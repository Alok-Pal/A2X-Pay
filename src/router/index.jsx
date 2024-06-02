// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const InProgress = lazy(() => import('../pages/protected/deposit/inProgress/InProgress'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/deposit/progress',
    component: InProgress,
  },

]

export default routes
