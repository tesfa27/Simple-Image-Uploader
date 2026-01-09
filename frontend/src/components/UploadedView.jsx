import React, { useEffect, useState } from 'react';

const UploadedView = ( { file }) => {
   const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    console.log(url);
    setPreviewUrl(url);

    // cleanup to avoid memory leaks
    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!previewUrl) return null;

  return (
    <div className="rounded-lg overflow-hidden border border-border-light">
        <img src={previewUrl} alt="Uploaded" className="w-full h-auto object-cover" />
      </div>
  )
}

export default UploadedView