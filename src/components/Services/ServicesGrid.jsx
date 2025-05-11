import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaClock, FaStar } from 'react-icons/fa'
import SectionTitle from '../UI/SectionTitle'

// Import services data
import { services } from '../../data/services'

// Service categories for filtering
const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'haircuts', name: 'Haircuts' },
  { id: 'beards', name: 'Beard Care' },
  { id: 'combo', name: 'Combos' },
  { id: 'color', name: 'Color' },
  { id: 'premium', name: 'Premium' },
  { id: 'addon', name: 'Add-ons' },
]

// Services display component with category filtering
function ServicesGrid({ limit = 0, showTitle = true, showCta = true }) {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Filter services by category and limit
  const filteredServices = services
    .filter(service => activeCategory === 'all' || service.category === activeCategory)
    .slice(0, limit > 0 ? limit : services.length)
  
  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }
  
  return (
    <section className="section">
      <div className="container-custom">
        {showTitle && (
          <SectionTitle
            title="Our Services & Pricing"
            subtitle="Professional haircuts and beard services at competitive prices. All services include a consultation to ensure we achieve your desired look."
          />
        )}
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent-500 text-white'
                  : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              className={`card p-6 flex flex-col relative ${
                service.popular ? 'border-2 border-accent-500' : ''
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                  <span className="flex items-center">
                    <FaStar className="mr-1" size={10} />
                    Popular
                  </span>
                </div>
              )}
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <span className="text-2xl font-bold text-accent-500">${service.price}</span>
              </div>
              
              <p className="text-primary-600 mb-4 flex-grow">{service.description}</p>
              
              <div className="flex items-center text-primary-500 text-sm">
                <FaClock className="mr-1" />
                <span>{service.duration} minutes</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA for booking */}
        {showCta && (
          <div className="mt-12 text-center">
            <p className="text-lg text-primary-700 mb-4">
              Ready to experience the best haircut in Los Angeles?
            </p>
            <Link to="/book" className="btn-primary">
              Book Your Appointment
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesGrid 