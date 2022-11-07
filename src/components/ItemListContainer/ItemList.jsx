import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

function ItemList(props) {
    return (
    <FlexWrapper>
        {props.productsList.map((product) => (
            <Item key={product.id} product={product}/>
        ))}
    </FlexWrapper>
    );
}

export default ItemList;