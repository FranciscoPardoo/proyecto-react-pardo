import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Loader from "../Loader/Loader";

function ItemList(props) {
    let emptyArray = props.productsList.length === 0;

    return (
    <FlexWrapper>
        {emptyArray ? 
        <Loader lineWeight={4} size={100}/>
        :
            props.productsList.map((product) => (
                <Item key={product.id} product={product}/>
            ))
        }
    </FlexWrapper>
    );
}

export default ItemList;