import React from 'react'
import { Outlet } from 'react-router'
// import { Container } from 'react-bootstrap'
import Header from '../Header/Header'
import { Breadcrumb } from 'react-bootstrap'
import routes from '../../routes/routes'

const MainLayout: React.FC = () => {
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }

  return (
    <div>
      <Header />
      {/* <Container className="my-2" style={{ backgroundColor: '#f2f5f7', height: '100vh' }}> */}
      <main
        className="d-flex justify-content-center"
        style={{ backgroundColor: '#f2f5f7', height: '100vh' }}
      >
        <div className="d-flex justify-content-left absolut">
          {/* <h1>Title</h1> */}
          {/* <Breadcrumb>
            <Breadcrumb.Item active>
              <h1> {getBrandText()}</h1>
            </Breadcrumb.Item>
          </Breadcrumb> */}
        </div>
        <Outlet />
      </main>
      {/* </Container> */}
    </div>
  )
}

export default MainLayout
