// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard, 
  },

]

export default routes
