import React, {useState, useEffect} from 'react';
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [productsList, setProductsList] = useState([])
    const {categoryid} = useParams();

    useEffect(() => {
        if(categoryid){
            getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
                setProductsList(itemsDB);
            });
        }else{getItemsFromAPI().then((itemsDB) => {
            setProductsList(itemsDB);
        });
        }
    }, [categoryid]);

    return (<ItemList productsList={productsList}/>);
}

export default ItemListContainer