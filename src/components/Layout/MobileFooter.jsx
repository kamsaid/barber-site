import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

// Sticky mobile footer with essential actions (Call, Directions, Book)
function MobileFooter() {
  return (
    <div className="footer-sticky py-3 px-4 grid grid-cols-3 gap-2">
      {/* Call Button */}
      <a 
        href="tel:+16316718388" 
        className="flex flex-col items-center justify-center text-primary-900 hover:text-accent-500"
        aria-label="Call Vlad the Barber"
      >
        <FaPhone className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Call</span>
      </a>

      {/* Directions Button */}
      <a 
        href="https://www.google.com/maps/place/S.A.K.+Barber+Shop/data=!4m7!3m6!1s0x80c297228d0dbb0d:0x2711419051f7947a!8m2!3d34.2018756!4d-118.4490527!16s%2Fg%2F11gbfd44lj!19sChIJDbsNjSKXwoARepT3UZBBESc?authuser=0&hl=en&rclk=1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-primary-900 hover:text-accent-500"
        aria-label="Get directions to S.A.K. Barber Shop"
      >
        <FaMapMarkerAlt className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Directions</span>
      </a>

      {/* Book Button */}
      <Link 
        to="/book" 
        className="flex flex-col items-center justify-center text-accent-500 hover:text-accent-600"
        aria-label="Book an appointment"
      >
        <FaCalendarAlt className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Book Now</span>
      </Link>
    </div>
  )
}

export default MobileFooter 