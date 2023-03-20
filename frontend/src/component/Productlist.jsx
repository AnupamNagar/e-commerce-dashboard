import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/Ai';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Productlist = () => {
    const [Products, setproducts] = useState([]);

    useEffect(() => {
        getproducts();
    }, []);

    const getproducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setproducts(result);
    }

    const deleteproduct = async (id) => {
        // console.warn(id);
        let result = await fetch(`http://localhost:5000/delete/${id}`, {
            method: 'delete'
        })
        result = await result.json();
        if (result) {
            getproducts();
        }
    }

    const handlesearch = async (e) => {
        // console.warn(e.target.value);
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setproducts(result);
        } else {
            getproducts();
        }
    }

    // console.warn(Products);
    return (
        <>
            <div className='flex flex-col'>
                <div className=' mt-10   '>
                <div className='p-6 flex justify-center'>
                    <h1 className=' font-bold text-xl'>Products List</h1>
                </div>

                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                    <input type="search" id="default-search" className="block w-[50%] m-auto p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500" placeholder="Search Products" required onChange={handlesearch} />
                </form>
                </div>

                <div className=" overflow-x-auto  shadow-md sm:rounded-lg pt-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    S. No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Products.length > 0 ? Products.map((item, index) =>
                                    <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            Rs {item.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => deleteproduct(item._id)} >
                                                <AiFillDelete size={20} className=" cursor-pointer hover:scale-110" />
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/update/${item._id}`}>
                                                <RxUpdate size={20} className=" cursor-pointer hover:scale-110" />
                                            </Link>
                                        </td>

                                    </tr>
                                ) :
                                    <tr className='text-center font-bold text-3xl pt-5  text-gray-900'><td><h1 className='justify-center'>No Result Found</h1></td></tr>
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>


    )
}

export default Productlist
