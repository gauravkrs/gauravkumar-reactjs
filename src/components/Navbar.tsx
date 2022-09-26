import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            <h2 className='mt-1 text-xl font-large text-gray-900'>Upayment Product</h2>
            <div>
                <div className='grid gap-4 grid-cols-6'>
                    <Link className='text-lg hover:text-base' to="/"><h3>Home</h3></Link>
                    <Link className='text-lg hover:text-base' to="/addProduct"><h3>Add Product</h3></Link>
                </div>
            </div>
        </div>
    )
}
