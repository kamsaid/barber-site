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
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">Los Angeles, CA 90001</p>
              <p className="mb-4">
                <a href="tel:+13101234567" className="text-white hover:text-accent-500">
                  (310) 123-4567
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
                href="https://google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-500"
                aria-label="Google"
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