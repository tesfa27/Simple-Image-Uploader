import { useState } from 'react';

const ImageActions = ( { imageUrl } ) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!imageUrl) return;

    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);

      // reset after 2s
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className='flex gap-4'>
        <button className='rounded-md bg-primary px-3 py-2 text-small text-white '>
            <span>
              <img src='./download.svg' alt='Download' className="inline-block mr-2 h-4"/>
            </span>
            Download
        </button>

        <button
         onClick={handleShare}
         className='rounded-md bg-primary px-3 py-2 text-small text-white '>
            <span>
              <img src='./Link.svg' alt='Share' className="inline-block mr-2 h-4"/>
            </span>
            {copied ? "Copied!" : "Share"}
        </button>
            
    </div>
  )
}

export default ImageActions