const express = require('express');
const router = express.Router();


router.get('/', getFlowers);

router.get('/:id', getFlower);

router.post('/', createFlower);

router.patch('/:id', updateFlower);

router.delete('/:id', deleteFlower);

module.exports = router;

