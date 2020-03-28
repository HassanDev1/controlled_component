import React from 'react';
import Item from './item';

const ItemList=props=> {

        return (
        <div>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.items.map((item, index) =><Item  key = {index} item={item}/> )}
            </ol>
        </div>);
    
}

export default ItemList;