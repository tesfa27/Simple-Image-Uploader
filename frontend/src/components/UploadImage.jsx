import React from "react";

const UploadImage = ( { onFileSelect } ) => {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onFileSelect(file);
  };
  return (
    <div
      className="flex flex-col items-center justify-center gap-4
        border-2 border-dashed border-border-light 
        rounded-lg p-32 font-inter"
    >
      <img src="./exit.svg" alt="Upload" />

      <h1 className="text-main">
        Drag & drop a file or{" "}
        <label
          htmlFor="file-upload"
          className="text-primary cursor-pointer hover:underline"
        >
          browse files
        </label>
      </h1>

      <input
        id="file-upload"
        type="file"
        accept="image/png,image/jpeg,image/gif"
        onChange={handleChange}
        className="hidden"
      />

      <p className="text-small font-light">
        JPG, PNG or GIF - Max file size 2MB
      </p>
    </div>
  );
};

export default UploadImage;
