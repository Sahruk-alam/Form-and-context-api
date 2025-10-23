import React from 'react';

const ProductTable = ({product}) => {
    return (
        <div>
            <h3>products : {product.length}</h3>
            <table>
                <thead className=''>
                    <th className='mr-3'>NO.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quality</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   {
        product.map((prod,index) => <tr key={index}>
                    <td>{index+1}</td>  
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>  
                    <td>{prod.quality}</td>
                    <td><button>Delete</button></td>
        </tr>            
        )
    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;