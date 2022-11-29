import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQRQ7S4_PzVZ0tDA7cI4w1rtzkWpd8_j8",
    authDomain: "mapple-react.firebaseapp.com",
    projectId: "mapple-react",
    storageBucket: "mapple-react.appspot.com",
    messagingSenderId: "279775609267",
    appId: "1:279775609267:web:3d0cf33dab8ea7b4924bc6"
};

const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export function testDatabase(){
    console.log(FirebaseApp);
}

export async function getItemsFromAPI(){
    try{
    const collectionProducts = collection(DB, "products");

    let respuesta = await getDocs(collectionProducts);

    const products = respuesta.docs.map( docu => {
        return {
            ...docu.data(),
            id: docu.id,
        }
    })
    return(products);
    }
    catch(error){
        console.error(error);
    }
}

export async function getSingleItemFromAPI(id) {
    const docRef = doc(DB, "products", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return {
            ...docSnap.data(),
            id: docSnap.id,
        };
    }else {
        console.error("El productos no existe");
    }
}

export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "products");
    const myQuery = query(productsRef, where("category", "==", categoryId));

    const productsSnap = await getDocs(myQuery);

    const products = productsSnap.docs.map((docu) => {
        return {
            ...docu.data(),
            id: docu.id,
        };
    });
    return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(DB, "buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);

    return docRef.id;
    }