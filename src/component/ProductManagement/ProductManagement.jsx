import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [product,setProduct]=useState([]);

    const handleAddProduct=products=>{
        const newProduct=[...product,products];
        setProduct(newProduct);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;