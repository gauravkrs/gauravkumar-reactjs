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
    const { data } = useGetAllCategoriesQuery()
    const res = data?.categories
    console.log(res)
    const [product, setProduct] = useState(IProductAdd);
    const navigate = useNavigate();
    const [addProduct] = useAddProductMutation()
    const { avatar, category, description, developerEmail, name, price } = product

    const handleChange = (e: any) => {
        const { value, name } = e.target
        // console.log(value, name)
        setProduct({ ...product, [name]: value })
    }
    console.log(product)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await addProduct(product)
        navigate("/")
    }

    return (
        <div>
            <h2>Add Product</h2>
            <div onSubmit={handleSubmit}>
                <form>
                    <div>
                        <input type="text" name="name" placeholder='Name' onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="price" placeholder='Price' onChange={handleChange} required />
                    </div>
                    <div>
                        <select name="category" onChange={handleChange}>
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
                        <input type="text" name="description" placeholder='Description' onChange={handleChange} required />
                    </div>

                    <div>
                        <input type="text" name="avatar" onChange={handleChange} placeholder="link of avatar" required />
                    </div>
                    <div>
                        <input type="email" name="developerEmail" placeholder='Developer Email' onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="submit" value="Create Product" id="" />
                    </div>
                </form>
            </div >
        </div >
    )
}
