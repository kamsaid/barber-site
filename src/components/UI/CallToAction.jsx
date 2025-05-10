import React from 'react'
import { Link } from 'react-router-dom'

// Call to action section to encourage booking
function CallToAction() {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Fresh New Look?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Experience the premium service and attention to detail that makes Vlad the most sought-after barber in Los Angeles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/book" 
              className="btn-primary"
            >
              Book Your Appointment
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline text-white border-white hover:bg-white hover:text-primary-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 