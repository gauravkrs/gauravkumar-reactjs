import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../service/productApi'

export const SingleProduct = () => {
    const { id } = useParams()
    console.log(id)
    const { data } = useGetSingleProductQuery(id)
    const res = data?.product
    console.log(res)
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-left text-3xl font-bold tracking-tight text-gray-900">{`Category : ${res?.category}`}</h2>
                </div>

                <div className='group relative'>
                    <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                        <img className='w-full h-full ' src={res?.avatar} alt={res?.avatar} />
                    </div>
                    <div className="mt-4 flex justify-between pl-2 pr-2">
                        <h3>{res?.name}</h3>
                        <p>₹ {res?.price}</p>
                    </div>
                    <div className='text-left pl-2 pr-2'>
                        <p>{res?.category}</p>
                    </div>
                    <div className='text-left pl-2 pr-2'>
                        <p>{res?.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
