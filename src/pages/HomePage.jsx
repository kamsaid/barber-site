import React from 'react'
import Hero from '../components/UI/Hero'
import ReviewsCarousel from '../components/Reviews/ReviewsCarousel'
import MasonryGallery from '../components/Gallery/MasonryGallery'
import ServicesGrid from '../components/Services/ServicesGrid'
import CallToAction from '../components/UI/CallToAction'

// Home page component assembling all major sections
function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Featured Services */}
      <ServicesGrid 
        limit={6} 
        showTitle={true}
        showCta={true}
      />
      
      {/* Gallery Preview */}
      <MasonryGallery 
        limit={8}
        showTitle={true}
      />
      
      {/* Reviews */}
      <ReviewsCarousel />
      
      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default HomePage 