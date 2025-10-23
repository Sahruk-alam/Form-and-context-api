import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error,setError]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quality=e.target.quality.value;
        // console.log(name,price,quality);
        if(!name || !price || !quality){
            setError('All fields are required');
            return;
        }
        else if(price<=0 || quality<=0){
            setError('Price and Quality must be greater than 0');
            return;
        }

        setError('');

        const product={
            name,
            price,
            quality
        };
        handleAddProduct(product);
    }
    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product name..' />
                <br />
                <input type="number" name="price" placeholder='Product price..' />
                <br />
                <input type="number" name="quality" placeholder='Product quality..' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p className='text-red-500'><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;