const express = require("express");
const { config, engine } = require("express-edge")
const path = require("path")
const app = express();
const mongoose = require("mongoose")
const expressSession = require("express-session")
const connectMongo = require("connect-mongo")
const connectFlash = require("connect-flash")
const edge = require("edge.js")

const homePageController = require("./controllers/homePage")
const productListPageController = require("./controllers/productListPage")
const registerUserPageController = require("./controllers/registerUserPage")
const storeRegisterUserController = require("./controllers/storeRegisterUser")
const loginPageController = require("./controllers/loginPage") 
const loginUserController = require("./controllers/loginUser")
const logoutUserController = require("./controllers/logoutUser")
const productDetailPageController = require("./controllers/productDetailPage")
const addtoCartController = require("./controllers/addToCart")
const cartPageController = require("./controllers/cartPageController")
const checkoutPageController = require("./controllers/checkoutPageController")
const orderController = require("./controllers/orderController")
const paymentSuccessController = require("./controllers/paymentSuccessController")
const confirmationPageController = require("./controllers/confirmationPageController")

const authMiddleware = require("./middleware/auth");
const auth = require("./middleware/auth");


const mongoStore = connectMongo(expressSession)

mongoose.connect('mongodb://localhost/gift-cart', {useNewUrlParser:true,  useUnifiedTopology: true}).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
    console.log(`Not Connected to Database ERROR! ${err}`);
    });

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(expressSession({
    secret:"secret",
    saveUninitialized: true, 
    resave: true,
    store:new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))
app.use('*', (req, res, next)=>{
  
    edge.global('auth', req.session.userId)
    edge.global('globalMessage',req.session.globalMessage)
    //edge.global('cartQuantity', req.session.cartQuantity? req.session.cartQuantity:0);

    next()
})
  
app.use(express.static('public'))
app.use(engine)
app.set('views',`${__dirname}/views`)



/*
* Home page controller
*/
app.get("/", homePageController )  


/*
* product lsit page 
*/
app.get("/category/:category", productListPageController )


/*
* Registration related code
*/
app.get("/auth/register", registerUserPageController)

app.post("/user/register", storeRegisterUserController)



/*
* Login related code
*/
app.get("/auth/login", loginPageController)

app.post("/user/login", loginUserController)

app.get("/auth/logout",  logoutUserController)

app.get("/detailPage/:id", productDetailPageController)


/*
* Add To Cart Functionailty
*/
app.post("/addToCart", authMiddleware, addtoCartController)

/*
* Cart Page Controller
*/

app.get("/cart", authMiddleware, cartPageController)

/*
* Checkout Page Controlller
*/
app.get("/checkout", authMiddleware, checkoutPageController)


/*
* Order related work
*/

app.post("/order", authMiddleware, orderController)

app.post("/payment-success", authMiddleware, paymentSuccessController)

app.get("/confirm-page", authMiddleware, confirmationPageController )

app.listen(5000, ()=>{
    console.log("server has started at port 5000 for developement use url https://localhost:5000")
}).on('error', err=>{
    if(err.errno === 'EADDRINUSE') {
        console.log(`----- Port 5000 is busy, trying with port another port`);
        
    } else {
        console.log(err);
    }
})


    