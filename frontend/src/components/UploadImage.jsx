import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadImage = ({ onFileSelect }) => {
  // Callback triggered when files are dropped or selected
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  // Hook configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': []
    },
    maxSize: 2097152, // 2MB in bytes
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center gap-4
        border-2 border-dashed rounded-lg p-8 md:p-32 text-center font-inter transition-colors
        ${isDragActive ? "border-primary" : "border-border-light"}`}
    >
      {/* Hidden input required by dropzone */}
      <input {...getInputProps()} />

      <img src="./exit.svg" alt="Upload" />

      <h1 className="text-main">
        {isDragActive ? (
          "Drop the file here..."
        ) : (
          <>
            Drag & drop a file or{" "}
            <span className="text-primary cursor-pointer hover:underline">
              browse files
            </span>
          </>
        )}
      </h1>

      <p className="text-small font-light">
        JPG, PNG or GIF - Max file size 2MB
      </p>
    </div>
  );
};

export default UploadImage;