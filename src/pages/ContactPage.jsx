import React from 'react'
import MapSection from '../components/Contact/MapSection'
import SectionTitle from '../components/UI/SectionTitle'

// Contact page with map and contact form
function ContactPage() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // This would be replaced with actual form submission to backend
    alert('Form submitted. In a production environment, this would send a message to Vlad the Barber.')
  }
  
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Have questions or need to get in touch? We're here to help with all your grooming needs.
          </p>
        </div>
      </div>
      
      {/* Map Section */}
      <MapSection />
      
      {/* Contact Form */}
      <section className="section bg-primary-50">
        <div className="container-custom max-w-4xl">
          <SectionTitle 
            title="Send Us a Message" 
            subtitle="Have a question, feedback, or want to book a special appointment? Fill out the form below and we'll get back to you as soon as possible."
          />
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Question</option>
                  <option value="services">Services Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-accent-500 focus:ring-accent-500 border-primary-300 rounded mt-1"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-primary-600">
                  I agree to the privacy policy and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage 