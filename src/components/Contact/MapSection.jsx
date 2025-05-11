import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

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

// Map and contact information component
function MapSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <address className="not-italic text-primary-600">
                      7217 Van Nuys Blvd<br />
                      Van Nuys, CA 91405
                    </address>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaPhone className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+13101234567" 
                      className="text-primary-600 hover:text-accent-500"
                    >
                      (310) 123-4567
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaEnvelope className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:appointments@vladthebarber.com" 
                      className="text-primary-600 hover:text-accent-500"
                    >
                      appointments@vladthebarber.com
                    </a>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaClock className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Hours</h4>
                    <ul className="text-primary-600 space-y-1">
                      {businessHours.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="font-medium mr-4">{item.day}:</span>
                          <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Parking information */}
              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <h4 className="font-medium mb-2">Parking Information</h4>
                <p className="text-primary-600 text-sm">
                  Street parking is available on Van Nuys Blvd. We also have convenient customer parking available in the plaza lot.
                </p>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <div className="relative w-full h-[400px] lg:h-full rounded-lg overflow-hidden">
                <iframe
                  title="Vlad the Barber Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.1694821875837!2d-118.45218848453515!3d34.20121558056186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c296f51f4545e3%3A0xf0c487852d981f35!2s7217%20Van%20Nuys%20Blvd%2C%20Van%20Nuys%2C%20CA%2091405!5e0!3m2!1sen!2sus!4v1653964856521!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection 