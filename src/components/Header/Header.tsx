// import { Navbar, Container, Image, Row, Col } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'

import { useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// import s from './Header.module.scss'

// import routs from '../../routes/NavLinks'
// import useMediaQuery from '../../hooks/useMediaQuery'

// import HeaderButtonBlock from './components/HeaderButtonBlock'
// import ChoiceBlock from './components/ChoiceBlock'

// const Header = () => {
// const [isActive, setIsActive] = useState(false)
// const [isLogIn, setIsLogIn] = useState(false)
// const [isMessage, setIsMessage] = useState(false)

// const { isMobile, isDesktop } = useMediaQuery()
// console.log(isMobile, isDesktop)

// const handleClickBurger = () => {
//   setIsActive(!isActive)
// }
// const handleClickLogIn = () => {
//   setIsLogIn(!isLogIn)
// }
// const handleClickMessage = () => {
//   setIsMessage(!isMessage)
// }

export default function Header() {
  const [expanded, setExpanded] = useState(false)

  const handleNavbarToggle = () => {
    setExpanded(!expanded)
  }

  const handleLinkClick = () => {
    setExpanded(false)
  }

  return (
    <Container className="p-3" fluid style={{ backgroundColor: '#ffffff', padding: '5px 50px' }}>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100">
        <div className="w-100 d-lg-none">
          <Image src="/images/default_org_icon.svg" className="img-fluid" />
        </div>
        <div className="w-100 d-lg-none d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Title</h1>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="basic-navbar-nav"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <FaBars />
          </button>
        </div>

        <Navbar variant="light" expand="lg" expanded={expanded} className="w-100">
          <div className="d-lg-flex justify-content-between w-100 align-items-center">
            <div className="d-none d-lg-block">
              <Image src="/images/default_org_icon.svg" height={50} />
            </div>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-lg-flex justify-content-between w-100"
            >
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/report" onClick={handleLinkClick}>
                  Report
                </Nav.Link>
              </Nav>
              <div className="d-none d-lg-block">
                <Image src="/images/default_org_icon.svg" height={30} />
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </Container>
    // <Container
    //   className="d-flex justify-content-between p-3"
    //   fluid
    //   style={{ backgroundColor: 'ffffff', padding: '5px 50px' }}
    // >
    //   <div>
    //     <Image src="/images/default_org_icon.svg" height={50} />
    //   </div>

    //   <Navbar variant="light" expand="lg" expanded={expanded}>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
    //     <Navbar.Collapse>
    //       <Nav className="ms-auto">
    //         <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/report" onClick={handleLinkClick}>
    //           Report
    //         </Nav.Link>
    //         <Image src="/images/default_org_icon.svg" height={30} />
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </Container>
  )
}
