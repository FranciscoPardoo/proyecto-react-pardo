import React, {useState, useEffect} from 'react';
import { getSingleItemFromAPI } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from '../Loader/Loader';


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let id = useParams().id;

    useEffect(() => {
        getSingleItemFromAPI(id).then((itemsDB) => {
            setProduct(itemsDB)
            setIsLoading(false)
        })
        .catch((error) => {
            alert(error);
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) return <Loader lineWeight={4} size={100}/>

    return ( <ItemDetail product={product} /> )
}

export default ItemDetailContainer;