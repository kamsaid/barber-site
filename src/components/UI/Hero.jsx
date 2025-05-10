import React from 'react'
import { Link } from 'react-router-dom'

// Hero section component for landing page
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/images/barber-shop-interior.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Expert Cuts & <span className="text-accent-500">Classic Style</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-lg">
              Los Angeles's premier barber shop specializing in perfect fades, beard styling, and traditional cuts. Experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/book" className="btn-primary">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-outline text-white border-white hover:bg-white hover:text-primary-900">
                View Services
              </Link>
            </div>
            
            {/* Featured reviews preview */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hidden md:block">
              <div className="flex items-center">
                <div className="text-accent-500">
                  <span className="flex">★★★★★</span>
                </div>
                <p className="ml-2 italic text-primary-100">
                  "Best fade in Los Angeles, hands down!" - <span className="font-medium">Michael K.</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile version of the featured review */}
          <div className="md:hidden mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="flex items-center">
              <div className="text-accent-500">
                <span className="flex">★★★★★</span>
              </div>
              <p className="ml-2 italic text-primary-100">
                "Best fade in Los Angeles, hands down!" - <span className="font-medium">Michael K.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 