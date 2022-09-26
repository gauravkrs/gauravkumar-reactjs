import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetAllCategoriesQuery } from '../service/categoryApi';
import { useGetAllProductQuery } from '../service/productApi';


export const Home = () => {
    const [toggle, setToggle] = useState(true);
    const { data } = useGetAllProductQuery();
    const res = data?.products
    const [dataDisplay, setDataDisplay] = useState(res)
    console.log(res)


    const { currentData } = useGetAllCategoriesQuery()
    // console.log(currentData?.categories)

    const handleFilter = (e: any) => {
        setToggle(false);
        const { value } = e.target
        console.log(value)
        let tempProduct = res?.filter((el: any) => {
            return el.category === value
        })
        console.log(tempProduct);
        setDataDisplay(tempProduct)
    }


    return (
        <div className=''>
            <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <select name="category" onChange={handleFilter}>
                    {
                        currentData?.categories.map((el) => {
                            return (
                                <>
                                    <option value={el.name}>{el.name}</option>
                                </>
                            )
                        })
                    }
                </select>
                <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {toggle ? (res?.map((el: any) => {
                        return (
                            <div className='group relative' key={el._id}>
                                <Link to={`/products/${el._id}`} >
                                    <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                                        <img className='h-full w-full object-cover object-center lg:h-full lg:w-full' src={el.avatar} alt={el.avatar} />
                                    </div>
                                </Link>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-md text-gray-700">
                                            <span className="" />
                                            {el.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{el.category}</p>
                                    </div>
                                    <p className="text-md font-medium text-gray-900">₹ {el.price}</p>
                                </div>
                                <div><button>Delete</button></div>
                            </div>
                        )
                    })) : (dataDisplay?.map((el: any) => {
                        return (
                            <div className='group relative' key={el._id}>
                                <Link to={`/products/${el._id}`} >
                                    <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                                        <img className='h-full w-full object-cover object-center lg:h-full lg:w-full' src={el.avatar} alt={el.avatar} />
                                    </div>
                                </Link>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-md text-gray-700">
                                            <span className="" />
                                            {el.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{el.category}</p>
                                    </div>
                                    <p className="text-md font-medium text-gray-900">₹ {el.price}</p>
                                </div>
                                <div><button>Delete</button></div>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div >
    )
}
