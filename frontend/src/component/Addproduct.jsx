import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';


const Addproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();
    

    const addproduct =async () => {
        console.log(name, price, category, company);
        // console.warn(!name)  // it returns true when input field is empty else return false

        // form validations
        if(!name){
            alert("Invalid Name");
            return false;
        }else if(!price){
            alert("please enter your product price");
            return false;
        }else if(!category){
            alert("Invalid Category");
            return false;
        }else if(!company){
            alert("please enter your company name");
            return false;
        }
        const userid = JSON.parse(localStorage.getItem('user'))._id;
        let result  = await fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name , price , category , company, userid
            })
        });
        result = await result.json();
        if(result){
            navigate('/');
        }
        
        // console.log(result);
    }

    return (
        <section className="  py-4 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center px-6  mx-auto  lg:py-0 mt-20">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Products
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product name" required="" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price" required="" value={price} onChange={(e) => setPrice(e.target.value)} />
                                     
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <input type="text" placeholder="Enter category" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={category} onChange={(e)=>setCategory(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                <input type="text" placeholder="Enter Company Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={company} onChange={(e)=>setCompany(e.target.value)} />
                            </div>


                            <button onClick={addproduct} type="submit" className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">Add Product</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addproduct
