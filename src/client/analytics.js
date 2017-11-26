import ym from 'react-yandex-metrika'

if (process.env.NODE_ENV === 'production') {
  if (window.location.host.includes('stage.')) {
    ym.init([43873429], {
      clickmap: true,
      trackLinks: true,
      trackHash: true,
      accurateTrackBounce: true,
      webvisor: true,
      ut: 'noindex',
    })
  } else {
    ym.init([44011104], {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true,
    })
  }
}
