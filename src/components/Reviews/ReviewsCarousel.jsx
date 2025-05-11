import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SectionTitle from '../UI/SectionTitle'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Mock reviews data - would be replaced with API data in production
import { reviews } from '../../data/reviews'

// Reviews carousel component displaying Google reviews
function ReviewsCarousel() {
  const [mounted, setMounted] = useState(false)

  // Initialize swiper only after component mount to avoid SSR issues
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have to say about their experience at Vlad the Barber."
        />

        {mounted && (
          <div className="mt-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active bg-accent-500',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      {review.avatar ? (
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
                          <span className="text-primary-700 font-bold text-xl">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-primary-900">{review.name}</h4>
                        <div className="flex text-accent-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="mr-0.5">
                              {i < review.rating ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-primary-700 mb-4 flex-grow">{review.text}</p>
                    
                    <div className="text-sm text-primary-400">
                      {review.date}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
        )}
      </div>
    </section>
  )
}

export default ReviewsCarousel 