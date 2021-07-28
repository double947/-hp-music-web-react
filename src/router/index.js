import CoDiscover from '@/views/discover'

const routes = [
  {
    path: "/",
    exact: true,
    component: CoDiscover
  },
  // {
  //   path: "/",
  //   exact: true,
  //   component: () => import('@/views/discover')
  // },
  // {
  //   path: "/mine",
  //   component: () => import('@/views/mine')
  // },
  // {
  //   path: "/friend",
  //   component: () => import('@/views/friend')
  // },
]

export default routes