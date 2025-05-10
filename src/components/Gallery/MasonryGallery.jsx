import { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import Modal from 'react-modal'
import { useInView } from 'react-intersection-observer'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'
import SectionTitle from '../UI/SectionTitle'

// Import mock gallery data
import { galleryImages } from '../../data/gallery'

// Ensure modal is accessible
Modal.setAppElement('#root')

// Gallery categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'fade', name: 'Fades' },
  { id: 'beard', name: 'Beard' },
  { id: 'classic', name: 'Classic' },
  { id: 'kids', name: 'Kids' },
]

// Responsive breakpoint columns for masonry layout
const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}

// Gallery with masonry layout and lightbox functionality
function MasonryGallery({ limit = 0, showTitle = true }) {
  const [images, setImages] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  
  // Lazy load images when they come into view
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Initialize images based on limit prop
  useEffect(() => {
    let filteredImages = [...galleryImages]
    if (limit > 0) {
      filteredImages = filteredImages.slice(0, limit)
    }
    setImages(filteredImages)
  }, [limit])

  // Filter images by category
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  // Open modal with selected image
  const openModal = (image) => {
    setCurrentImage(image)
    setModalIsOpen(true)
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false)
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset'
  }

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === currentImage.id)
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentImage(images[nextIndex])
  }

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === currentImage.id)
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentImage(images[prevIndex])
  }

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e) => {
    if (modalIsOpen) {
      if (e.key === 'ArrowRight') nextImage()
      else if (e.key === 'ArrowLeft') prevImage()
      else if (e.key === 'Escape') closeModal()
    }
  }

  // Add keyboard listener for navigation
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalIsOpen, currentImage])

  // Filter images based on selected category
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <section className="section" ref={ref}>
      <div className="container-custom">
        {showTitle && (
          <SectionTitle
            title="Our Work"
            subtitle="Browse through our gallery of haircuts and beard styles to find the look that's right for you."
          />
        )}
        
        {/* Category filters */}
        {categories.length > 0 && (
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
        )}
        
        {/* Masonry gallery */}
        {inView && (
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(image)}
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(image)
                  }
                }}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.thumbnail}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </Masonry>
        )}
        
        {/* Lightbox modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Lightbox"
          className="max-w-4xl mx-auto h-auto max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden outline-none my-8"
          overlayClassName="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
        >
          {currentImage && (
            <>
              <div className="relative">
                <img
                  src={currentImage.fullsize || currentImage.thumbnail}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={closeModal}
                  aria-label="Close lightbox"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                
                {/* Navigation buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FaArrowLeft className="w-5 h-5" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-lg font-medium">{currentImage.alt}</p>
                {currentImage.description && (
                  <p className="text-primary-600 mt-1">{currentImage.description}</p>
                )}
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  )
}

export default MasonryGallery 