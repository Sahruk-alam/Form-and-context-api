import React from 'react';
import Special from './Special';

const Cousin = ({ name,asset }) => {
    return (
        <div>
            <h2>{name}</h2>
            {
                name === 'Rakib' && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousin;