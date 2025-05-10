import React from 'react'

// Loading spinner component used as a fallback during lazy loading
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-accent-500 border-t-transparent"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingSpinner 