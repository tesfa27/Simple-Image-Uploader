import React from 'react'

const UploadedView = () => {
   const imageUrl = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80';// Placeholder image URL
  return (
    <div className="rounded-lg overflow-hidden border border-border-light">
        <img src={imageUrl} alt="Uploaded" className="w-full h-auto object-cover" />
      </div>
  )
}

export default UploadedView