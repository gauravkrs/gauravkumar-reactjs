import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='grid grid-cols-2 gap-2 bg-gray-800 h-20 ' >
            <h2 className='mt-1 text-xl font-large text-red-200 mt-5 font-bold'>Upayment Product</h2>
            <div>
                <div className='grid gap-4 grid-cols-6 mt-5'>
                    <Link className='text-lg hover:text-base text-red-200 font-bold' to="/"><h3>Home</h3></Link>
                    <Link className='text-lg hover:text-base text-red-200 font-bold' to="/addProduct"><h3>Add Product</h3></Link>
                </div>
            </div>
        </div>
    )
}
