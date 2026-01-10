const cloudinary = require("../config/cloudinary");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      {
        folder: "uploads",
      }
    );

    res.status(200).json({
      url: result.secure_url,
      filename: result.public_id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const downloadImage = (req, res) => {
  const filename = decodeURIComponent(req.params.filename);

  const url = cloudinary.url(filename, {
    secure: true,
    flags: "attachment",
  });

  res.redirect(url);
};

module.exports = {
  uploadImage,
  downloadImage,
};
