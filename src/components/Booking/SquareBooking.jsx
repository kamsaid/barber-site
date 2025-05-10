import { useEffect, useState, useRef } from 'react'
import SectionTitle from '../UI/SectionTitle'
import { services } from '../../data/services'

// Square booking widget component
function SquareBooking() {
  const iframeRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [popularServices, setPopularServices] = useState([])
  
  // Get popular services for highlighting
  useEffect(() => {
    const popular = services.filter(service => service.popular)
    setPopularServices(popular)
  }, [])
  
  // Load and configure Square booking widget
  useEffect(() => {
    // This would be replaced with your actual Square configuration
    const squareBookingScript = document.createElement('script')
    squareBookingScript.src = 'https://square.site/appointments/buyer/widget/n9pqavgv9cj3mh/LKWD3HC5AD5T7.js'
    squareBookingScript.async = true
    squareBookingScript.onload = () => {
      setIsLoaded(true)
    }
    
    document.body.appendChild(squareBookingScript)
    
    return () => {
      // Clean up the script when component unmounts
      if (document.body.contains(squareBookingScript)) {
        document.body.removeChild(squareBookingScript)
      }
    }
  }, [])
  
  // Handle iframe load
  const handleIframeLoad = () => {
    if (iframeRef.current) {
      // Adjust iframe height based on content
      iframeRef.current.style.height = '700px'
    }
  }
  
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Book Your Appointment"
          subtitle="Schedule your visit with Vlad and experience the best haircut and beard styling in Los Angeles."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Service highlights */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Popular Services</h3>
              
              <div className="space-y-4">
                {popularServices.map(service => (
                  <div key={service.id} className="border-b border-primary-100 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{service.name}</h4>
                      <span className="font-bold text-accent-500">${service.price}</span>
                    </div>
                    <p className="text-sm text-primary-600 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold">Why Choose Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Expert barbers with 10+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Complimentary hot towel with every service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Convenient online booking & reminders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Premium products for all hair types</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Square booking widget */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              {!isLoaded && (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500"></div>
                </div>
              )}
              
              {/* Square Booking Widget Container */}
              <div id="square-booking-widget" className={isLoaded ? 'block' : 'hidden'}>
                <iframe
                  ref={iframeRef}
                  title="Square Appointment Booking"
                  src="https://square.site/appointments/buyer/widget/n9pqavgv9cj3mh/LKWD3HC5AD5T7.js"
                  frameBorder="0"
                  width="100%"
                  height="700px"
                  onLoad={handleIframeLoad}
                  className="border-0"
                />
              </div>
              
              {/* FEATURE_CUSTOM_BOOKING_UI for future custom booking interface */}
              {/* This would be implemented in Phase 2 or later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SquareBooking 