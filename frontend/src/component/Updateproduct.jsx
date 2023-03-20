import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Updateproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getsingleproduct();
    }, []);

    const getsingleproduct = async()=>{
        let result  = await fetch(`http://localhost:5000/singleproduct/${params.id}`);
        result =  await result.json();
        // console.warn(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateproduct = async () =>{
        console.log(name, price , category, company)
        // form validation
        // console.warn(!name);  // empty h to true return karega 
        if(!name){
            alert("Invalid Name");
            return false ;  // false return ke baad code isse aage nahi badega
        }
        else if(!price){
            alert("Invalid price");
            return false;
        }
        else if(!category){
            alert("Invalid category");
            return false;
        }
        else if(!company){
            alert("Invalid company");
            return false;
        }
         let result = await fetch(`http://localhost:5000/update/${params.id}` , {
            method: "put",
            body: JSON.stringify({name , price, category, company}),
            headers:{
                "Content-Type" : "application/json"
            }
         });
         result = await result.json();
        //  console.warn(result);
        if(result){
         navigate("/")
        }
    }

  return (
    <section className="  py-4 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6  mx-auto  lg:py-0 mt-20">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Update Products
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


                            <button onClick={updateproduct}  type="submit" className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">Update Product</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Updateproduct
