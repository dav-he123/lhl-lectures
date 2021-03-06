const express = require('express');

const router = express.Router();


  router.get('/', (req,res) => {
    console.log("now we are in the '/urls' route");
    res.render('urls');
  })

  router.get('/new', (req,res) => {
    console.log("now we are in the '/urls' route");
    res.render('new');
  })

  router.get('/:shortURL', (req,res) => {
    res.render('show');
  })

module.exports = router;