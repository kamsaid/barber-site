import React from 'react'
import SectionTitle from '../components/UI/SectionTitle'
import CallToAction from '../components/UI/CallToAction'

// Blog page placeholder (behind feature flag)
function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Barber Blog</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Tips, trends, and advice for men's grooming and style.
          </p>
        </div>
      </div>
      
      {/* Blog Content - Coming Soon */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Coming Soon" 
            subtitle="Our blog is currently under development. We'll be sharing grooming tips, style advice, and the latest trends in men's haircuts very soon."
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-primary-50 rounded-xl p-8 text-center">
            <p className="text-lg text-primary-700 mb-6">
              Subscribe to be notified when we launch our blog and to receive exclusive grooming tips:
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
          {/* Blog Post Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card overflow-hidden group">
                <div className="h-56 bg-primary-200 flex items-center justify-center">
                  <span className="text-primary-400 text-lg">Image Coming Soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-500 transition-colors">
                    Blog Post Title Here
                  </h3>
                  <p className="text-primary-500 text-sm mb-4">Coming Soon</p>
                  <p className="text-primary-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  )
}

export default BlogPage 