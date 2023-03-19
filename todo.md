# backend folder
    * npm init
    * .gitignore
    * npm i express
    * npm i mongoose
    * npm i npdemon
    * make index.js file

# frontend folder
    * vercel app
    

# Database setup
    * download mongodb
    * install mongodb 
    * setup mongodb compass

# signup Api
    * make db folder and collection
    * make config file
    * make model
    * make route for api
    * test api with postman

# resolve Cors issue
    * its a backend problem
    * npm i cors

# integrate signup Api in React
    * signup.jsx ->>  handleform function 

# complete signup flow
    * keep user data in loacal storage 
        localStorage.setItem("user" , JSON.stringify(result));

    * make private component
        Privatecomponent.jsx 
    * handle signup page with loaclstorage  
    * update navbar for with Logout and Signup menu

# Logout
    * make a function for logout
    * clear localstorage
    * redirect user to signup

# login Api in Nodejs
    * make route for api
    * pass data from postman
    * fetch result from db
    * remove password from register and login api

# login Api integration 
    * test api with postman
    * call api on login buttton click
    * set localstorage
    * redirect page 
    * update navbar 

# Add product Api
    * make collection for products
    * define model for product collection
    * make route for Add product
    * send data from postman

# form validations for signup , login , add product
    *   if(!email){
            alert("Invalid Email");
            return false;
        }else if(!name){
            alert("Invalid Name");
            return false;
        }else if(!password){
            alert("Invalid Password");
            return false;
        }

# product list Api
    * make route for product list api
    * fetch data from database
    * test api with postman

# delete product Api 
    * make route for api
    * get id with params in api url
    * delte product from database
    * test api with the postman

# Api for get single product
    * make route for api
    * get data from the database
    * test Api with postman

# prefill update product form
    * get id from url params using "{useparams hooks}"
    * fetch product data
    * set data in input fields 

# Integrate Api for Update Product
    * use fetch method for api integration
    * send data with the put method
    * redirect to product list page    
