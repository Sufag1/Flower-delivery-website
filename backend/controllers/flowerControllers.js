const Flower = require("../models/flowerModels");
const mongoose = require("mongoose");

// Get all flowers
const getFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ flowers });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single flower
const getFlower = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID format" });
  }

  try {
    const flower = await Flower.findById(id);
    if (!flower) {
      return res.status(404).json({ error: "Flower not found" });
    }
    res.status(200).json(flower);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new flower
const createFlower = async (req, res) => {
  console.log("Incoming POST /api/flowers request...");
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  const { name, description, price, category } = req.body;
  const image = req.file?.path;

  try {
    if (!image) {
      throw new Error("Image was not uploaded successfully.");
    }

    const flower = new Flower({ name, description, price, category, image });
    const savedFlower = await flower.save();

    res.status(201).json(savedFlower);
  } catch (error) {
    console.error("Error in createFlower:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// Update a flower
const updateFlower = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;
  const image = req.file?.path;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID format" });
  }

  const updatedData = { name, description, price, category };
  if (image) updatedData.image = image;

  try {
    const flower = await Flower.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!flower) {
      return res.status(404).json({ error: "Flower not found" });
    }
    res.status(200).json(flower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a flower
const deleteFlower = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID format" });
  }

  try {
    const flower = await Flower.findByIdAndDelete(id);
    if (!flower) {
      return res.status(404).json({ error: "Flower not found" });
    }
    res.status(200).json({ message: "Flower deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get four random flowers

const getRandomFlowers = async (req, res) => {
  try {
    const flowers = await Flower.aggregate([{ $sample: { size: 4 } }]);
    res.json({ flowers });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch suggested flowers." });
  }
};

module.exports = {
  getFlowers,
  getFlower,
  createFlower,
  updateFlower,
  deleteFlower,
  getRandomFlowers,
};