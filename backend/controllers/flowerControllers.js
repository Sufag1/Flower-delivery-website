const Flower = require('../models/flowerModels');
const mongoose = require('mongoose');



// Get all Flowers
const getFlowers = async (req, res) => {
    try {
        const flower = await Flower.find();
        res.status(200).json(flower)
    } catch(error) {
        res.status(400).json({error: error.message})
    }    
};


// Get a single workout
const getFlower = async (req, res) => {
    try {
        const{id} = req.params
        const flower = await Flower.findById(id)
        if (!flower) {
            return res.status(404).json({error: "Flower not found"})} 
    }   catch(error) {
            res.status(200).json(flower)
        }
};


// Post Flower
const createFlower = async (req,res) => {
    const {name, description, price, category} = req.body
    const image = req.file?.path;
    try {
        const flower = new Flower({name, description, price, category, image})
        const savedFlower = await flower.save()
        res.status(200).json(savedFlower)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

// Update Flower
const updateFlower = async (req, res) => {
    const { name, description, price, category } = req.body;
    const image = req.file?.path;
  
    try {
      const updatedData = { name, description, price, category };
      if (image) updatedData.image = image;
  
      const flower = await Flower.findByIdAndUpdate(
        req.params.id,
        updatedData,
        { new: true }
      );
  
      if (!flower) return res.status(404).json({ message: 'Flower not found' });
  
      res.json(flower);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  



// Delete Flower

const deleteFlower = async (req, res) => {
    try {
        const{id} = req.params
        if (!mongoose.Types.ObjectId.isValid) {
            return res.status(404).json({error: "No such Id"})
        }
        const flower = await Flower.findOneAndDelete({_id: id})
        res.status(200).json('Flower deleted')
        if (!flower) {
            return res.status(400).json({error: "No such Flower"})
        }
        } catch(error) {
            res.status(404).json({error: error.message})
        }

};


module.exports = {getFlowers, getFlower, createFlower, updateFlower, deleteFlower}