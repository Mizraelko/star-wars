import React from 'react';
import './random-block.css';
import ItemList from "../item-list/item-list";
const RandomBlock = () => {

    return (
        <div className='random-block'>
            <div className='random-block_img'>
                <img src="" alt="image"/>
            </div>
            <div className='random-block_items'>
                <ItemList/>
            </div>
        </div>
    );
};

export default RandomBlock;