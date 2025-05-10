import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'

// Site navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

// Header component with responsive navigation
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Handle keyboard navigation
  const handleMenuKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu()
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl font-serif font-bold text-primary-900"
            onClick={closeMenu}
          >
            Vlad<span className="text-accent-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors duration-200 hover:text-accent-500 ${
                        isActive ? 'text-accent-500' : 'text-primary-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Now Button */}
          <Link
            to="/book"
            className="hidden md:inline-flex btn-primary"
            onClick={closeMenu}
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-primary-900 hover:text-accent-500"
            onClick={toggleMenu}
            onKeyDown={handleMenuKeyDown}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 bg-white shadow-md">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors duration-200 hover:text-accent-500 ${
                      isActive ? 'text-accent-500' : 'text-primary-900'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/book"
                className="block w-full btn-primary text-center"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header 