import React, { useEffect, useState } from 'react';

const UploadedView = ( { file }) => {
   if (!file) return null;

  return (
    <div className="rounded-xl overflow-hidden border border-border-light">
        <img src={file} alt="Uploaded" className="w-full h-auto max-h-[60vh] object-contain mx-auto" />
      </div>
  )
}

export default UploadedView