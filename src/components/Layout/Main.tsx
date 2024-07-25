import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainNavbar from '../Navbars/MainNavbar'

import routes from '../../routes/routes'

function Main() {
  const mainPanel = useRef(null)

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/main') {
        const Component = prop.component
        return <Route path={prop.layout + prop.path} element={<Component />} key={key} />
      } else {
        return null
      }
    })
  }

  return (
    <>
      <div className="wrapper">
        <div className="main-panel" ref={mainPanel}>
          <MainNavbar />
          <div className="content">
            <Routes>{getRoutes(routes)}</Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
