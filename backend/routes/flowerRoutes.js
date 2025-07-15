const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const {
  getFlowers,
  getFlower,
  createFlower,
  updateFlower,
  deleteFlower,
  getRandomFlowers,
} = require("../controllers/flowerControllers");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "flowers",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("image");

router.post("/", (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({ error: err.message });
    }
    next();
  });
}, createFlower);

router.get("/random", getRandomFlowers);
router.get("/", getFlowers);
router.get("/:id", getFlower);
router.patch("/:id", upload.single("image"), updateFlower);
router.delete("/:id", deleteFlower);

module.exports = router;