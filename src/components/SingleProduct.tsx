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
        <div>
            <h2>{`Product : ${res?.name}`}</h2>
            <div>
                <div>
                    <img src={res?.avatar} alt={res?.avatar} />
                </div>
                <div>
                    <h3>{res?.name}</h3>
                    <p>{res?.price}</p>
                    <p>{res?.category}</p>
                </div>
                <div>
                    <p>{res?.description}</p>
                </div>
            </div>
        </div>
    )
}
