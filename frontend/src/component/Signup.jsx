import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    }, []);

    const handleform = async () =>{
        console.log(name , email , password);
        // form validation
        if(!email){
            alert("Invalid Email");
            return false;
        }else if(!name){
            alert("Invalid Name");
            return false;
        }else if(!password){
            alert("Invalid Password");
            return false;
        }

        // Api call
        let result  = await fetch('http://localhost:5000/signup',{
            method:"POST", 
            headers:{  
                "Content-Type":"application/json"  // this is important to send data in json format  , otherwise it will give error  , 500 internal server error  , 404 not found error etc 
            },
            body:JSON.stringify({    
                name,
                email,
                password
            })   
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user" , JSON.stringify(result));  // this will store user info in local storage  , so that we can use it in other component  , like profile page etc  ,  we can also use redux for this purpose  , but for now we will use local storage  
        // if(result.error){
        //     alert(result.error);    // if there is any error then it will show error in alert box
        // }else{
        //     navigate('/'); // if there is no error then it will navigate to home page
        // }
        navigate('/'); 
    }

    return (
        <section className=" pt-8 md:pt-6 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6  mx-auto  lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="a@gmail.com" required
                                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="anupam" required
                                value={name} onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                                value={password} onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                          
                            
                            <button onClick={handleform} type="submit" className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">SignUp</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
