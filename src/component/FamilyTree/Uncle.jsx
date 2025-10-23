import React from 'react';
import Cousin from './Cousin';

const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle </h2>
            <section className='flex'>
                <Cousin name="Rakib" asset={asset}></Cousin>
                <Cousin name="Mohim"></Cousin>
                
            </section>
        </div>
    );
};

export default Uncle;