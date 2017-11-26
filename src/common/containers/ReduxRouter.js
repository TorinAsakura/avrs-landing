/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RouterContext as DefaultRoutingContext } from 'react-router';
import { createRouterObject } from 'react-router/lib/RouterUtils';
import routerStateEquals from 'redux-router/lib/routerStateEquals';
import { ROUTER_STATE_SELECTOR } from 'redux-router/lib/constants';
import { initRoutes, replaceRoutes } from 'redux-router/lib/actionCreators';
import { useBasename } from 'history'

function memoizeRouterStateSelector(selector) {
  let previousRouterState = null;

  return state => {
    const nextRouterState = selector(state);
    if (routerStateEquals(previousRouterState, nextRouterState)) {
      return previousRouterState;
    }
    previousRouterState = nextRouterState;
    return nextRouterState;
  };
}

function getRoutesFromProps(props) {
  return props.routes || props.children;
}

function getBasename(locale) {
  return locale ? `/${locale}` : null
}

class ReduxRouter extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.history = useBasename(() => context.store.history)({ basename: getBasename(props.locale) })
    this.router = createRouterObject(this.history, context.store.transitionManager, {})

    this.state = {
      locale: props.locale,
    }
  }

  componentWillMount() {
    this.context.store.dispatch(initRoutes(getRoutesFromProps(this.props)));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locale !== this.props.locale) {
      this.history = useBasename(() => this.context.store.history)({ basename: getBasename(nextProps.locale) })
      this.router = createRouterObject(this.history, this.context.store.transitionManager, {})

      this.setState({ locale: nextProps.locale })
    }

    this.receiveRoutes(getRoutesFromProps(nextProps));
  }

  receiveRoutes(routes) {
    if (!routes) return;

    const { store } = this.context;
    store.dispatch(replaceRoutes(routes));
  }

  render() {
    const { store } = this.context;

    if (!store) {
      throw new Error(
        'Redux store missing from context of <ReduxRouter>. Make sure you\'re '
      + 'using a <Provider>'
      );
    }

    const {
      history,
      [ROUTER_STATE_SELECTOR]: routerStateSelector
    } = store;

    if (!history || !routerStateSelector) {
      throw new Error(
        'Redux store not configured properly for <ReduxRouter>. Make sure '
      + 'you\'re using the reduxReactRouter() store enhancer.'
    );
    }

    return (
      <ReduxRouterContext
        routerStateSelector={memoizeRouterStateSelector(routerStateSelector)}
        history={this.history}
        router={this.router}
        {...this.props}
      />
    );
  }
}

class ReduxRouterContextContainer extends Component {
  static propTypes = {
    location: PropTypes.object,
    RoutingContext: PropTypes.func
  }

  render() {
    const {location} = this.props;

    if (location === null || location === undefined) {
      return null; // Async matching
    }

    const RoutingContext = this.props.RoutingContext || DefaultRoutingContext;

    return <RoutingContext {...this.props} />;
  }
}

const ReduxRouterContext = connect(
  (state, { routerStateSelector }) => routerStateSelector(state) || {}
)(ReduxRouterContextContainer)

export default connect(
  state => ({
    locale: state.router.params.locale,
  }),
)(ReduxRouter)
