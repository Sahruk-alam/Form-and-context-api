import React, { createContext } from 'react';
import GrandFather from './GrandFather';
import './familyTree.css';
export const AssetContext=createContext('');
const FamilyTree = () => {
    const asset = "House";
    const newAsset='Diamond';
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <GrandFather asset={asset}></GrandFather>
            </AssetContext.Provider>
            
        </div>
    );
};

export default FamilyTree;