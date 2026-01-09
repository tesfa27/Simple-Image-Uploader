import React, { useEffect, useState } from 'react';

const UploadedView = ( { file }) => {
   if (!file) return null;

  return (
    <div className="rounded-lg overflow-hidden border border-border-light">
        <img src={file} alt="Uploaded" className="w-full h-auto object-cover" />
      </div>
  )
}

export default UploadedView