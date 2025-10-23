import React from 'react';
import MySelf from './MySelf';
import Sister from './Sister';
import Brother from './Brother';

const Father = ({ asset }) => {
    return (
        <div>
            <h2>Father Component</h2>
            <section className='flex'>
                <MySelf asset={asset}></MySelf>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;