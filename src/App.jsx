import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Layout Components
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/Layout/ScrollToTop'
import LoadingSpinner from './components/UI/LoadingSpinner'

// Eagerly loaded pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

// Lazily loaded pages for better performance
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Feature flag pages
const BlogPage = lazy(() => import('./pages/BlogPage')) 

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route path="gallery" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GalleryPage />
            </Suspense>
          } />
          
          <Route path="book" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BookingPage />
            </Suspense>
          } />
          
          <Route path="services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          
          <Route path="contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
          
          {/* Feature Flagged Routes */}
          {import.meta.env.VITE_FEATURE_BLOG === 'true' && (
            <Route path="blog" element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPage />
              </Suspense>
            } />
          )}
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 