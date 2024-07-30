import { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../utils/api'

export default function Header() {
  const [expanded, setExpanded] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false) // Состояние для управления видимостью меню
  // const [logo, setLogo] = useState('/images/placeholder.png') // Установим плейсхолдер
  const [logo, setLogo] = useState<string | null>(null)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  // const baseUrl = 'https://devzone.blueboxonline.co.uk/api/v1' || ''
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''
  // const baseUrl = '/api/v1'

  // // Имитация проверки авторизации
  // const isLogin = true // Замените это значение на актуальное условие авторизации

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await api.get(`${baseUrl}/app/settings`)
        setLogo(response.data.logo)
      } catch (error) {
        console.error('Failed to fetch logo', error)
      }
    }

    const checkAuth = async () => {
      try {
        // const response = await api.get(`${baseUrl}/auth/check`)
        const response = await fetch(`${baseUrl}/users/session`)
        console.log(response)
        // setIsLogin(response.ok) // Предполагается, что сервер возвращает это поле
        setIsLogin(true)
      } catch (error) {
        console.error('Failed to check authentication', error)
      }
    }

    fetchLogo()
    checkAuth()
  }, [])

  const handleNavbarToggle = () => {
    setExpanded(!expanded)
  }

  const handleLinkClick = () => {
    setExpanded(false)
  }

  const handleSignOutClick = async () => {
    try {
      // Логика выхода из системы
      await api.get(`${baseUrl}/users/logout`)
      setMenuVisible(false)
      window.location.reload() // Перезагрузить страницу для отображения компонента SignIn
    } catch (error) {
      console.error('Failed to sign out', error)
    }
    // console.log('Sign Out clicked')
    // setMenuVisible(false) // Закрыть меню после клика
  }

  const mobileLinkStyle = {
    width: '200px',
    border: '1px solid #9cadb2',
    margin: '2px 0',
    borderRadius: '3px',
    padding: '3px 10px',
    right: '0'
  }

  return (
    <Container className="p-3" fluid style={{ backgroundColor: '#ffffff', padding: '5px 50px' }}>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100">
        <div className="w-100 d-lg-none">
          {/* <Image src={logo} className="img-fluid w-100" /> */}
          {logo && <Image src={logo} className="img-fluid w-100" />}
        </div>

        <div className="w-100 d-lg-none d-flex justify-content-between align-items-center">
          <h1
            className="mb-0"
            style={{
              fontSize: '20px'
            }}
          >
            Title
          </h1>
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
              {/* <Image src="/images/placeholder.png" height={70} /> */}

              {logo && <Image src={logo} className="img-fluid w-100" />}
            </div>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-lg-flex justify-content-between w-100"
            >
              {expanded ? (
                <div className="d-lg-none d-flex flex-column align-items-end text-start w-100">
                  <Nav.Link as={Link} to="/" onClick={handleLinkClick} style={mobileLinkStyle}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/report"
                    onClick={handleLinkClick}
                    style={mobileLinkStyle}
                  >
                    Report
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={handleSignOutClick} style={mobileLinkStyle}>
                    Sign Out
                  </Nav.Link>
                </div>
              ) : (
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/report"
                    onClick={handleLinkClick}
                    style={{ marginLeft: '30px' }}
                  >
                    Report
                  </Nav.Link>
                </Nav>
              )}
              <div className="d-none d-lg-block" style={{ marginLeft: '40px' }}>
                <Image
                  src="/images/user_icon.svg"
                  height={25}
                  onClick={() => isLogin && setMenuVisible(!menuVisible)} // Показывать/скрывать меню только если авторизован
                  style={{ cursor: 'pointer' }}
                />
                {isLogin && menuVisible && (
                  <div
                    className="text-start"
                    style={{
                      position: 'absolute',
                      right: '0px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                      zIndex: 1000
                    }}
                  >
                    <Nav.Link as={Link} to="/" onClick={handleSignOutClick} style={mobileLinkStyle}>
                      Sign Out
                    </Nav.Link>
                  </div>
                )}
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </Container>
  )
}
