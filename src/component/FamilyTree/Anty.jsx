import React from 'react';
import Cousin from './Cousin';

const Anty = () => {
    return (
        <div>
            <h2>Aunt Component</h2>
            <section className='flex'>
                <Cousin name="Nishi"></Cousin>
                <Cousin name="Nipa"></Cousin>
            </section>
        </div>
    );
};

export default Anty;