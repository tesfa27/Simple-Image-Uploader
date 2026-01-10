# Simple Image Uploader

A full-stack image upload application built as a solution for [devchallenges.io](https://devchallenges.io). This application allows users to seamlessly upload, preview, and manage images following modern UI/UX patterns.

---

## ✨ Features

* **Single Image Upload:** Streamlined process for uploading one image at a time.
* **Drag & Drop:** Integrated `react-dropzone` for intuitive file handling.
* **Manual Browse:** Traditional file explorer selection support.
* **File Validation:** * Supported formats: **JPG, PNG, GIF**
    * Maximum file size: **2MB**
* **Real-time Feedback:** Visual loader displayed during the upload process.
* **Post-Upload Actions:** * Instant image preview.
    * **Share:** Copy the image URL to your clipboard.
    * **Download:** Save the image directly to your device.
* **Theming:** Optional Dark and Light mode support.

---

## 🛠 Tech Stack

### Frontend
* **React** (Vite)
* **Tailwind CSS** (Styling)
* **react-dropzone** (File handling)
* **State Management:** `useState`, `useEffect`
* **Browser APIs:** Clipboard API

### Backend
* **Node.js & Express.js**
* **Multer** (Middleware for handling `multipart/form-data`)
* **Cloudinary** (Image hosting and transformation)
* **REST API** architecture

