const express = require('express');
const router = express.Router();
const path = require('path');
const { title } = require('process');
const products = require('../data/products');

router.get('/' , (req , res)=>{
    // res.sendFile(path.join(__dirname , '../views/index.html'));
    res.render('home');
});

router.get('/data' , (req , res)=>{
    // products.forEach((e)=>{
    //     console.log(e.brand);
    // })
    res.send(products);
});
router.get('/products' , (req , res)=>{
    res.render('products' ,{
        array:products

    });
});

module.exports = router ;