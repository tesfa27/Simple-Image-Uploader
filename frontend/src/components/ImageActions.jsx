import React from 'react'

const ImageActions = () => {
  return (
    <div className='flex gap-4'>
        <button className='rounded-md bg-primary px-3 py-2 text-small text-white '>
            <span>
              <img src='./download.svg' alt='Download' className="inline-block mr-2 h-4"/>
            </span>
            Download
        </button>

        <button className='rounded-md bg-primary px-3 py-2 text-small text-white '>
            <span>
              <img src='./Link.svg' alt='Share' className="inline-block mr-2 h-4"/>
            </span>
            Share
        </button>
            
    </div>
  )
}

export default ImageActions