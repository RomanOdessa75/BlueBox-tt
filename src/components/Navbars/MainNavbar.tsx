// import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Container, Nav, Dropdown, Image } from 'react-bootstrap'

import routes from '../../routes/routes'

function Header() {
  const location = useLocation()

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Navbar.Brand href="#home" onClick={(e) => e.preventDefault()} className="mr-2">
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Image src="/images/default_org_icon.svg" height={50} />
          </Nav>

          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link className="m-0" href="#pablo" onClick={(e) => e.preventDefault()}>
                <span className="no-icon">Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="m-0" href="#pablo" onClick={(e) => e.preventDefault()}>
                <span className="no-icon">Report</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-planet"></i>
                {/* <span className="notification">5</span> */}
                <span className="d-lg-none ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav.Item>
              <Nav.Link className="m-0" href="#pablo" onClick={(e) => e.preventDefault()}>
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
