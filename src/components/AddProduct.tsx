import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllCategoriesQuery } from '../service/categoryApi'
import { useAddProductMutation } from '../service/productApi'

const IProductAdd = {
    avatar: "",
    category: "",
    description: "",
    developerEmail: "",
    name: "",
    price: 0,
}

export const AddProduct = () => {
    const { data } = useGetAllCategoriesQuery();
    const res = data?.categories;
    const [product, setProduct] = useState(IProductAdd);
    const navigate = useNavigate();
    const [addProduct] = useAddProductMutation()
    const { avatar, category, description, developerEmail, name, price } = product

    const handleChange = (e: any) => {
        const { value, name } = e.target
        // console.log(value, name)
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await addProduct(product)
        navigate("/")
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Add Product</h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="name" placeholder='Name' onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="price" placeholder='Price' onChange={handleChange} required />
                    </div>
                    <div >
                        <select className='relative text-center block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="category" onChange={handleChange}>
                            {
                                res?.map((el) => {
                                    return (
                                        <>
                                            <option value={el.name}>{el.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="description" placeholder='Description' onChange={handleChange} required />
                    </div>

                    <div>
                        <input type="text" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="avatar" onChange={handleChange} placeholder="link of avatar" required />
                    </div>
                    <div>
                        <input type="email"className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' name="developerEmail" placeholder='Developer Email' onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" value="Create Product" id="" />
                    </div>
                </form>
            </div>

        </div >
    )
}
