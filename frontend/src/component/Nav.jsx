import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className='w-full p-4  bg-sky-300'>
      
        {
          auth ? <>
          <ul className='flex space-x-4 md:space-x-14 '  >
            {/* <li className='text-white text-sm md:text-xl '> <Link to="/" >Home</Link></li> */}
            <li className='text-white text-sm md:text-xl '> <Link to="/" >Products List</Link></li>
            <li className='text-white text-sm md:text-xl'> <Link to="/update" >update Product</Link></li>
            <li className='text-white text-sm md:text-xl'> <Link to="/add" >Add Product </Link></li>
            {/* <li className='text-white text-sm md:text-xl'> <Link to="/profile" >Profile</Link></li> */}
            <li className='text-white text-sm md:text-xl'> <Link onClick={logout} to="/login" >Logout</Link></li>
          </ul>
           
          </>
          :
         <>
            <ul className='flex space-x-4 pr-2 justify-end'>
              <li className='text-white text-sm md:text-xl'> <Link to="/login" >Login</Link></li>
              <li className='text-white text-sm md:text-xl'> <Link to="/signup" >SignUp</Link></li>
            </ul> 
          </>
        }
    </div>
  ) 
}

export default Nav
