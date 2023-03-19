const express = require('express');
const cors = require('cors');       // this is backend error not a frontend error (CORS error)   
require('./db/config');        // this is the connection to the database (MongoDB)  
const User = require('./db/User');
const Product = require('./db/Product');

const app = express();   // this is the express server      

app.use(express.json());
app.use(cors());   // this is the middleware to allow cross origin requests from the frontend to the backend server on port 5000 (localhost:5000)  


// Signup Route (POST)   
app.post('/signup', async (req, res) => {
    // res.send('Register');
    let user = new User(req.body);
    let result = await user.save();
    result  = result.toObject();  // this is to convert the result to an object
    delete result.password;     // this is to delete the password from the result object
    res.send(result);
});

// Login Route (POST)
app.post('/login', async (req, res) => {
    // res.send(req.body);
    if(req.body.email && req.body.password) {
        let user  =  await User.findOne(req.body).select('-password');
        if(user) {
            res.send(user);
        } else {
            res.status(401).send({message: 'Invalid Credentials'});
        }
    } else {
        res.status(401).send({message: 'Invalid Credentials'});
    }
});

// Add Product Route (POST)
app.post('/addproduct', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

// Product list route (get method)
app.get("/products" , async(req,res) =>{
    let products = await Product.find();
    if(products.length > 0){
        res.send(products)
    }
    else{
        res.send("No Products Found")
    }
});

// Delete Product Route (delete method)
app.delete("/delete/:id"  , async(req , resp) =>{
    
    let result = await Product.deleteOne({_id:req.params.id});
    resp.send(result)
});

// Get single product route
app.get("/singleproduct/:id" , async(req,res) =>{
    let product  =  await Product.findOne({_id:req.params.id});
    res.send(product);
    // if(result){
    //     res.send(product);
    // }else{
    //     res.send("No result found");
    // }    
});

// Update product Route
app.put("/update/:id" , async(req, resp)=>{
    let product = await Product.updateOne({_id:req.params.id} , {$set : req.body});
    resp.send(product);
});

// search api route
app.get("/search/:key" , async(req , resp)=>{
    let result  = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });
    resp.send(result)
});


app.listen(5000);
