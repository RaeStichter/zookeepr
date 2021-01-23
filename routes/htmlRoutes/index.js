const path = require('path');
const router = require('express').Router();

// ROUTE used for creating the homepage index.html (main page)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// ROUTE used for creating the animals page
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// ROUTE used for creating the zookeepers page
router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;