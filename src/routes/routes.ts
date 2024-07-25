// import Home from '../components/Home/Home'
import SignIn from '../components/SignIn/SignIn'
import HomePage from '../pages/HomePage/HomePage'
import ReportPage from '../pages/ReportPage/ReportPageIndex'

const dashboardRoutes = [
  {
    path: '/home',
    name: 'Home',
    // icon: 'nc-icon nc-alien-33',
    component: HomePage,
    layout: '/'
  },
  {
    path: '/report',
    name: 'Report',
    // icon: 'nc-icon nc-chart-pie-35',
    component: ReportPage,
    layout: '/report'
  },
  {
    path: '/signin',
    name: 'Sign In',
    // icon: 'nc-icon nc-chart-pie-35',
    component: SignIn,
    layout: '/signin'
  }
]

export default dashboardRoutes
