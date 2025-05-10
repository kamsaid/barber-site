import React from 'react'

// Consistent section title component with optional subtitle
function SectionTitle({ title, subtitle, center = true, className = '' }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-primary-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle 