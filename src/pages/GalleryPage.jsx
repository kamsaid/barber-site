import React from 'react'
import MasonryGallery from '../components/Gallery/MasonryGallery'
import CallToAction from '../components/UI/CallToAction'

// Gallery page showing all haircut and beard styling photos
function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Browse our portfolio of haircuts, fades, and beard styles. Every cut is customized to enhance your unique style and features.
          </p>
        </div>
      </div>
      
      {/* Full Gallery */}
      <MasonryGallery showTitle={false} />
      
      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default GalleryPage 