import React from 'react'
import ServicesGrid from '../components/Services/ServicesGrid'
import CallToAction from '../components/UI/CallToAction'

// Services page showing all available services with prices
function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            From classic cuts to premium fades and beard styling, we offer a range of services to keep you looking your best.
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <ServicesGrid showTitle={false} />
      
      {/* Extra Information */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">First-Time Clients</h3>
              <p className="text-primary-600 mb-4">
                New to Vlad the Barber? We recommend booking a consultation along with your service to discuss your style goals and preferences.
              </p>
              <p className="text-primary-600">
                First-time clients receive a complimentary hot towel treatment with any haircut service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Regular Maintenance</h3>
              <p className="text-primary-600 mb-4">
                For optimal results, we recommend scheduling haircuts every 3-4 weeks and beard trims every 2 weeks.
              </p>
              <p className="text-primary-600">
                Ask about our maintenance packages for clients who want to keep their look sharp year-round.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
              <p className="text-primary-600 mb-4">
                We understand that plans change. Please provide at least 24 hours notice for cancellations or rescheduling.
              </p>
              <p className="text-primary-600">
                No-shows or late cancellations may be subject to a booking fee for future appointments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default ServicesPage 