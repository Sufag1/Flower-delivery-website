const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  getFlowers,
  getFlower,
  createFlower,
  updateFlower,
  deleteFlower,
} = require("../controllers/flowerControllers");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isValid = allowedTypes.test(file.mimetype.toLowerCase());
  cb(null, isValid);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Routes
router.get("/", getFlowers);

router.get("/:id", getFlower);

router.post("/", upload.single("image"), createFlower);

router.patch("/:id", upload.single("image"), updateFlower);

router.delete("/:id", deleteFlower);

module.exports = router;