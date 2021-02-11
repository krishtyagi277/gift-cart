const mongoose = require('mongoose');
const Product = new mongoose.Schema({

    code:{
        type:String
    },
    name:{
    type: String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    subCategory:{
        type:String
    },
    subCategory2:{
        type:String
    },
    subCategory3:{
        type:String
    },
    miniPicture:{
        type:String
    },
    bigPicture:{
        type:String
    },
    displayPicture:{
        type:String
    },
    stock:{
        type:Boolean
    },
    salePrice:{
        type:Number
    }
})

const productModel = mongoose.model('Product', Product);



mongoose.connect('mongodb://localhost/gift-cart');

const productData = [
    {
        "code": 100,
        "name": "Pineapple Cake - Half KG",
        "price": 699,
        "description": "Eggless Pineapple cake for your love ones.",
        "category": "Cake",
        "subCategory": "pineappleCake",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "pineapp-350x299.83333333333_2 .jpg",
        "bigPicture": "pineapp-350x299.83333333333_2.jpg",
        "displayPicture": "pineapp-350x299.83333333333_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 101,
        "name": "Eggless Black Forest - Half KG",
        "price": 699,
        "description": "Eggless Black Forest Cake for your love ones.",
        "category": "Cake",
        "subCategory": "chocolate",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "bfeg-350x262.5_2.jpg",
        "bigPicture": "bfeg-350x262.5_2.jpg",
        "displayPicture": "bfeg-350x262.5_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 102,
        "name": "FRUIT CAKE - HALF KG",
        "price": 799,
        "description": "Delicious and Good Quality 500gm Fruit cake for your love ones.",
        "category": "Cake",
        "subCategory": "fruitCake",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "fruitcake-350x350_2_1.jpg",
        "bigPicture": "fruitcake-350x350_2_1.jpg",
        "displayPicture": "1382608097-1-cake17_1_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 103,
        "name": "Chocolate Truffle Cake 1 KG",
        "price": 1249,
        "description": "Delicious Flavour full Chocolate Truffle cake to suit all ocassions and taste for your love ones.",
        "category": "Cake",
        "subCategory": "chocolate",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "ct-350x350_2.jpg",
        "bigPicture": "ct-350x350_2.jpg",
        "displayPicture": "ct-350x350_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 104,
        "name": "ChocoCream Cake 1 KG",
        "price": 1499,
        "description": "1kg ChocoCream Cake for your love once",
        "category": "Cake",
        "subCategory": "chocolate",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "choco_cream_2.jpg",
        "bigPicture": "choco_cream_2.jpg",
        "displayPicture": "choco_cream_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 105,
        "name": "Ultimate Chocolate 1KG",
        "price": 1299,
        "description": "1kg Heart Shape Chocolate Cake for your love once",
        "category": "Cake",
        "subCategory": "chocolate",
        "subCategory2": "root",
        "subCategory3": "heartShape",
        "miniPicture": "cakes.jpg",
        "bigPicture": "cakes.jpg",
        "displayPicture": "cakes.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 106,
        "name": "Heart Shape Pineapple Cake 1KG",
        "price": 1349,
        "description": "1kgs Heart Shape Pineapple Cake for your love once",
        "category": "Cake",
        "subCategory": "pineapple",
        "subCategory2": "root",
        "subCategory3": "heartShape",
        "miniPicture": "piepallpe_heart.jpg",
        "bigPicture": "piepallpe_heart.jpg",
        "displayPicture": "piepallpe_heart.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 107,
        "name": "Photo Cake In Heart Shape",
        "price": 1799,
        "description": "1Kg Pineapple Photo Cake In Heartshape which looks very lovely",
        "category": "Cake",
        "subCategory": "pineapple",
        "subCategory2": "root",
        "subCategory3": "pictureCake",
        "miniPicture": "heartshape_photo_cake.jpg",
        "bigPicture": "heartshape_photo_cake.jpg",
        "displayPicture": "heartshape_photo_cake.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 108,
        "name": "Purpose Cake",
        "price": 1349,
        "description": "1kg Heartshape Cake with Your PERSONAL message(note: flavour will be of your Choice)",
        "category": "Cake",
        "subCategory": "special",
        "subCategory2": "root",
        "subCategory3": "purposeCake",
        "miniPicture": "cakes_1.jpg",
        "bigPicture": "cakes_1.jpg",
        "displayPicture": "cakes_1.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 109,
        "name": "ButterScotch Cake",
        "price": 599,
        "description": "Butterscotch cake",
        "category": "Cake",
        "subCategory": "chocolate",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "butter_scotch.jpg",
        "bigPicture": "butter_scotch.jpg",
        "displayPicture": "butter_scotch.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 110,
        "name": "Charming Beauty",
        "price": 599,
        "description": "Beautiful Bunch of 10 Red Roses with 6 white Gladiolus in a cellophane pakcing.",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "bigPicture": "roses_1_2_1.jpg",
        "displayPicture": "roses_1_2_1.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 111,
        "name": "Bunch Of Pink Roses",
        "price": 599,
        "description": "Bunch Of 12 pink roses",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "pink_3.jpg",
        "bigPicture": "pink_3.jpg",
        "displayPicture": "pink_3.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 112,
        "name": "Milky Rooses",
        "price": 599,
        "description": "Bunch of long stem White Rose wrapped with White ribbion.",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "whiteroses",
        "subCategory3": "normal",
        "miniPicture": "1296477694-phw-n-15-w-r_2.jpg",
        "bigPicture": "1296477694-phw-n-15-w-r_2.jpg",
        "displayPicture": "1296477694-phw-n-15-w-r_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 113,
        "name": "Healthy Sorrounding",
        "price": 1099,
        "description": "12 Yellow Roses Bunch with 2 layer lucky Bambo Plant for your love once",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "myfloralkart.com_bambo.jpg",
        "bigPicture": "myfloralkart.com_bambo.jpg",
        "displayPicture": "myfloralkart.com_bambo.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 114,
        "name": "Filled With Love",
        "price": 3799,
        "description": "This bunch consists of One Hundred stems of Pink Roses for your love",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "100_pink_roses.jpg",
        "bigPicture": "100_pink_roses.jpg",
        "displayPicture": "100_pink_roses.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 115,
        "name": "First Love 50 Red Roses Bunch",
        "price": 1699,
        "description": "50 red roses in white paper packing and red ribbon",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "my_roses.jpg",
        "bigPicture": "my_roses.jpg",
        "displayPicture": "my_roses.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 116,
        "name": "Heartly Celebration",
        "price": 1599,
        "description": "Twin Heart arrangement of 35 roses in cane basket",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "roses_1_3.jpg",
        "bigPicture": "roses_1_3.jpg",
        "displayPicture": "roses_1_3.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 117,
        "name": "Classic Arrangement",
        "price": 1799,
        "description": "Unique Arrangement of 10 Orchid n 10 red roses with lots of fillers in a stand which looks le heart orchid",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "orchid_hearts.jpg",
        "bigPicture": "orchid_hearts.jpg",
        "displayPicture": "orchid_hearts.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 118,
        "name": "Sweet Inspiration",
        "price": 1799,
        "description": "Blessing a splendid and brilliant bundle overflowing with roses in plenitude outlined uniquely for you by myfloralkart.com This shocking bunch has 50 brilliant roses and some regular fillers wrapped in a paper tied with a ribbion conversely. Request this great bundle of blossoms to your friends and family and make them smile.",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "exp135_2.jpg",
        "bigPicture": "exp135_2.jpg",
        "displayPicture": "exp135_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 119,
        "name": "Best Of Luck combo",
        "price": 1199,
        "description": "6 pink n 6 white roses in cellophane packing with matching ribbions and with 2 layer lucky bambo plant",
        "category": "Flower",
        "subCategory": "roses",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "white_n_pink.jpg",
        "bigPicture": "white_n_pink.jpg",
        "displayPicture": "white_n_pink.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 120,
        "name": "Graceful Flowers",
        "price": 499,
        "description": "Group Of 10 Pink carnation in pleasant cellophane packing.",
        "category": "Flower",
        "subCategory": "carnations",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "pink_carnation_3.jpg",
        "bigPicture": "pink_carnation_3.jpg",
        "displayPicture": "pink_carnation_3.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 121,
        "name": "Red and Pink Carnations",
        "price": 599,
        "description": "Group of 12 red and pink carnations.",
        "category": "Flower",
        "subCategory": "carnations",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "1303379632-phw-n-15-rp-c_2.jpg",
        "bigPicture": "1303379632-phw-n-15-rp-c_2.jpg",
        "displayPicture": "1303379632-phw-n-15-rp-c_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 122,
        "name": "Love Shade",
        "price": 549,
        "description": "Bunch of 12 Long Stem Fresh Red nd white Carnation in a cellophane Packing and ribbon bow.",
        "category": "Flower",
        "subCategory": "carnations",
        "subCategory2": "root",
        "subCategory3": "love",
        "miniPicture": "1296478608-phw-n-14-rw-c_2.jpg",
        "bigPicture": "1296478608-phw-n-14-rw-c_2.jpg",
        "displayPicture": "1296478608-phw-n-14-rw-c_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 123,
        "name": "Flower Fruity",
        "price": 1199,
        "description": "This combo comprise a pack of 10 pink and white carnation with 2 kg fresh fruits",
        "category": "Flower",
        "subCategory": "carnations",
        "subCategory2": "root",
        "subCategory3": "love",
        "miniPicture": "combo_03_2__2.jpg",
        "bigPicture": "combo_03_2__2.jpg",
        "displayPicture": "combo_03_2__2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 124,
        "name": "Carnation of Love",
        "price": 1199,
        "description": "Bunch of 12 mix colour carnation with cellophane packing n matchinh ribbions in the bow ,, n with half kg pineapple cake for your love once",
        "category": "Flower",
        "subCategory": "carnations",
        "subCategory2": "root",
        "subCategory3": "combo",
        "miniPicture": "5555.jpg",
        "bigPicture": "5555.jpg",
        "displayPicture": "5555.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 125,
        "name": "Flower Fruits & Wine Hamper",
        "price": 5999,
        "description": "Basket of mix Flower mix Fruits with Wine in Roya Style",
        "category": "Flower",
        "subCategory": "lilies",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "wine_2.jpg",
        "bigPicture": "wine_2.jpg",
        "displayPicture": "wine_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 126,
        "name": "Prettiest",
        "price": 999,
        "description": "Be the first to review this product",
        "category": "Flower",
        "subCategory": "lilies",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "lilies_2.jpg",
        "bigPicture": "lilies_2.jpg",
        "displayPicture": "lilies_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 127,
        "name": "Hand Tied Bouquet",
        "price": 949,
        "description": "Hand tied Bouquet of Lillies, Gerberas, Roses,& Carnations. Specially for your love ones.",
        "category": "Flower",
        "subCategory": "lilies",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "style_bouquet_lillies_2.jpg",
        "bigPicture": "style_bouquet_lillies_2.jpg",
        "displayPicture": "style_bouquet_lillies_2.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 128,
        "name": "Authentic Love",
        "price": 1299,
        "description": "An elegant bunch of 10 orchids and 3 lilies in paper wrapping for your love ones.",
        "category": "Flower",
        "subCategory": "lilies",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "authentic_love_1_1.jpg",
        "bigPicture": "authentic_love_1_1.jpg",
        "displayPicture": "authentic_love_1_1.jpg",
        "stock": true,
        "salePrice": 599
    },
    {
        "code": 129,
        "name": "Heartfull Love",
        "price": 1699,
        "description": "Basket arrangement of 18 yellow and red carnations, 2 pink oriental lilies and 5 orchids decorated with lots of green fillers for your love ones.",
        "category": "Flower",
        "subCategory": "lilies",
        "subCategory2": "root",
        "subCategory3": "normal",
        "miniPicture": "753_1_2.jpg",
        "bigPicture": "753_1_2.jpg",
        "displayPicture": "753_1_2.jpg",
        "stock": true,
        "salePrice": 599
    }
]



// const data2 = {
//     product: data
// }
// Cart.create(data2, (error, data)=>{
//     console.log(error)
// })

// for(var i=0;i<productData.length;i++){
//     Product.create(productData[i], (error, data)=>{
//         console.log(error)
//     })
// }


productData.forEach(function(item){
    productModel.create(item, (error, data)=>{
        console.log(error)
    })
})

