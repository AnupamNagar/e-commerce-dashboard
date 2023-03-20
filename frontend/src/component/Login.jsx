import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth  = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    }, [])


    const handlelogin = async ()=>{
        // console.log(email, password);
        // form validation
        if(!email){
            alert("Invalid Email");
            return false;
        }
        else if(!password){
            alert("Invalid Password");
            return false;
        }
        let result  = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
        else{
            alert("Invalid Login");
        }
    }

    return (
        <section className=" py-4 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 mt-20">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="a@gmail.com" required=""
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>


                            <button onClick={handlelogin}  type="submit" className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Signup </Link>
                            </p>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                                    Sample Email: a@gmail.com
                                    
                                </p>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                                    Sample password: 123456
                                    
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
