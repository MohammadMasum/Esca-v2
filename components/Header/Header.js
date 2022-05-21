import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from './logo.svg'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => {
  const [open, isOpen] = useState(false)
  const [isSticky, setIsSticy] = useState(false)
  const handleClick = () => {
    isOpen(!open)
  }
  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleClick)
    window.addEventListener('scroll', handleSticky)
    return () => {
      window.removeEventListener('scroll', handleSticky)
    }
  })
  const handleSticky = (e) => {
    const scrollTop = window.scrollY
    if (scrollTop >= 50) {
      setIsSticy(true)
    } else {
      setIsSticy(false)
    }
  }

  return (
    <header className={`header-area ${open ? 'active' : ''} ${isSticky ? 'is-sticky' : ''}`}>
      <Navbar expand='xl' variant='dark'>
        <Container>
          <Link href='/'>
            <a className='logo-wrap'>
              <Image src={Logo.src} width='100px' height='50px' alt='' />
            </a>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={() => handleClick()} />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#banner'>Home</Nav.Link>
              <Nav.Link href='#service'>Services</Nav.Link>
              <Nav.Link href='#blog'>Blog</Nav.Link>
              <Nav.Link href='#offer'>Post an Offer</Nav.Link>
            </Nav>
            <ul className='ms-auto header-btns'>
              <li>
                <a href='#' className='primary-btn bordered-btn'>
                  Sign Up
                </a>
              </li>
              <li>
                <a href='#' className='primary-btn'>
                  List a Service
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
