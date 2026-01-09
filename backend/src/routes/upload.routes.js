const express = require("express");
const upload = require("../middleware/upload");
const {
  uploadImage,
  downloadImage,
} = require("../controllers/upload.controller");

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.get("/download/:filename", downloadImage);

module.exports = router;
