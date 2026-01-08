import React from 'react'

const UploadImage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4
      border-2 border-dashed border-border-light 
      rounded-lg p-32 font-inter
      hover:border-primary cursor-pointer
      transition-colors duration-300
      '>
      <img src='./exit.svg' alt='Upload' />
      <h1 className='text-main'>Drag & drop a file or {" "}
        <span className='text-primary'>browse files</span>
         </h1>
      <p className='text-small font-light'>JPG, PNG or GIF - Max file size 2MB</p>
    </div>
  )
}

export default UploadImage