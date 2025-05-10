import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

// Sticky mobile footer with essential actions (Call, Directions, Book)
function MobileFooter() {
  return (
    <div className="footer-sticky py-3 px-4 grid grid-cols-3 gap-2">
      {/* Call Button */}
      <a 
        href="tel:+13101234567" 
        className="flex flex-col items-center justify-center text-primary-900 hover:text-accent-500"
        aria-label="Call Vlad the Barber"
      >
        <FaPhone className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Call</span>
      </a>

      {/* Directions Button */}
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Vlad+the+Barber+Los+Angeles" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-primary-900 hover:text-accent-500"
        aria-label="Get directions to Vlad the Barber"
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