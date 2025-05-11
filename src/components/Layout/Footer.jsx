import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYelp, FaGoogle } from 'react-icons/fa'

// Business hours data
const businessHours = [
  { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

// Main site footer with business information and links
function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 hidden md:block">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vlad the Barber</h3>
            <address className="not-italic">
              <p className="mb-2">7217 Van Nuys Blvd</p>
              <p className="mb-2">Van Nuys, CA 91405</p>
              <p className="mb-4">
                <a href="tel:+16316718388" className="text-white hover:text-accent-500">
                  (631) 671-8388
                </a>
              </p>
              <p>
                <a href="mailto:appointments@vladthebarber.com" className="text-white hover:text-accent-500">
                  appointments@vladthebarber.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              {businessHours.map((item) => (
                <li key={item.day} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-accent-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-accent-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white hover:text-accent-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-white hover:text-accent-500">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-accent-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-500"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-500"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-500"
                aria-label="Yelp"
              >
                <FaYelp className="w-6 h-6" />
              </a>
              <a 
                href="https://www.google.com/maps/place/S.A.K.+Barber+Shop/data=!4m7!3m6!1s0x80c297228d0dbb0d:0x2711419051f7947a!8m2!3d34.2018756!4d-118.4490527!16s%2Fg%2F11gbfd44lj!19sChIJDbsNjSKXwoARepT3UZBBESc?authuser=0&hl=en&rclk=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-500"
                aria-label="Google Maps"
              >
                <FaGoogle className="w-6 h-6" />
              </a>
            </div>
            
            <Link to="/book" className="btn-primary w-full text-center">
              Book Appointment
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-800 text-center text-primary-400">
          <p>&copy; {currentYear} Vlad the Barber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 