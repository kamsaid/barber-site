import React from 'react'
import SquareBooking from '../components/Booking/SquareBooking'

// Booking page with Square appointments widget
function BookingPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Schedule your appointment with Vlad and experience the best haircut in Los Angeles. Online booking is quick and easy.
          </p>
        </div>
      </div>
      
      {/* Square Booking Widget */}
      <SquareBooking />
    </>
  )
}

export default BookingPage 