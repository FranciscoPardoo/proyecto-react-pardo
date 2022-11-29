import React from 'react';
import { Pulsar } from '@uiball/loaders';
import FlexWrapper from '../FlexWrapper/FlexWrapper';



function Loader(props) {
    return (
    <FlexWrapper>
        <Pulsar size={props.size} lineWeight={props.lineWeight} />
    </FlexWrapper> 
    )
}

export default Loader
