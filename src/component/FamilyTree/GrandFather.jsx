import React from 'react';
import Father from './Father';
import Anty from './Anty';
import Uncle from './Uncle';

const GrandFather = ({ asset }) => {
    
    
    return (
        <div className=''>
            <h2>Grand Father Component</h2>
            <section className='flex'>
              <Father asset={asset}></Father>
              <Anty></Anty>  
              <Uncle asset={asset}></Uncle>
            </section>
            
        </div>
    );
};

export default GrandFather;