import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaCalendarAlt, FaPhone } from 'react-icons/fa'

// 404 Not Found page
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-accent-500">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-4">Page Not Found</h2>
        <p className="text-lg text-primary-600 mt-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 btn-primary"
          >
            <FaHome className="h-5 w-5" />
            Back to Home
          </Link>
          
          <Link 
            to="/book" 
            className="flex items-center justify-center gap-2 btn-secondary"
          >
            <FaCalendarAlt className="h-5 w-5" />
            Book Appointment
          </Link>
          
          <Link 
            to="/contact" 
            className="flex items-center justify-center gap-2 btn-outline"
          >
            <FaPhone className="h-5 w-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage 