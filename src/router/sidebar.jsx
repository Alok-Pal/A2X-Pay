/** Icons are imported separatly to reduce build time */
import { BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    path: '/app/transactions',
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: 'Transactions', 
  },
  {
    path: '/app/integration', // url
    icon: <BoltIcon className={iconClasses} />, // icon component
    name: 'Integration', // name that appear in Sidebar
  },

]

export default routes


