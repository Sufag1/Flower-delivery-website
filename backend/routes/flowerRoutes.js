const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const {
  getFlowers,
  getFlower,
  createFlower,
  updateFlower,
  deleteFlower,
} = require("../controllers/flowerControllers");


const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary.js");


// Multer and cloudinary setup

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "flowers", 
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });


// Routes
router.get("/", getFlowers);

router.get("/:id", getFlower);

router.post("/", upload.single("image"), createFlower);

router.patch("/:id", upload.single("image"), updateFlower);

router.delete("/:id", deleteFlower);

module.exports = router;