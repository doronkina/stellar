export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome
  },
  {
    path: '/more',
    exact: true,
    component: components.PMore
  }
]
