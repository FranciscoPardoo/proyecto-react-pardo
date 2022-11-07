const itemsDB = [
        {
            "id": 1,
            "title": "iPhone 9",
            "price": 549,
            "stock": 94,
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        },
        {
            "id": 2,
            "title": "iPhone X",
            "price": 899,
            "stock": 34,
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "price": 1249,
            "stock": 36,
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "price": 280,
            "stock": 123,
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "price": 499,
            "stock": 32,
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg"
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "price": 1749,
            "stock": 83,
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png",
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "price": 1499,
            "stock": 50,
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "price": 1499,
            "stock": 68,
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "price": 1099,
            "stock": 96,
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "price": 1099,
            "stock": 89,
            "category": "laptops",
            "thumbnail": "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
        },
        {
            "id": 11,
            "title": "perfume Oil",
            "price": 13,
            "stock": 65,
            "category": "fragrances",
            "thumbnail": "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
        },
        {
            "id": 12,
            "title": "Brown Perfume",
            "price": 40,
            "stock": 52,
            "category": "fragrances",
            "thumbnail": "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "price": 13,
            "stock": 61,
            "category": "fragrances",
            "thumbnail": "https://dummyjson.com/image/i/products/13/thumbnail.webp",
        },
        {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "stock": 114,
            "category": "fragrances",
            "thumbnail": "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
        },
        {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "price": 30,
            "stock": 105,
            "category": "fragrances",
            "thumbnail": "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
        },
        {
            "id": 16,
            "title": "Hyaluronic Acid Serum",
            "price": 19,
            "stock": 110,
            "category": "skincare",
            "thumbnail": "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
        },
        {
            "id": 17,
            "title": "Tree Oil 30ml",
            "price": 12,
            "stock": 78,
            "category": "skincare",
            "thumbnail": "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
        },
        {
            "id": 18,
            "title": "Oil Free Moisturizer 100ml",
            "price": 40,
            "stock": 88,
            "category": "skincare",
            "thumbnail": "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
        },
        {
            "id": 19,
            "title": "Skin Beauty Serum.",
            "price": 46,
            "stock": 54,
            "category": "skincare",
            "thumbnail": "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
        },
        {
            "id": 20,
            "title": "Freckle Treatment Cream- 15gm",
            "price": 70,
            "stock": 140,
            "category": "skincare",
            "thumbnail": "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
        }
    ];

export default function getItemsFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(itemsDB);
        }, 500);
    });
}

export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemRequested = itemsDB.find((item) => item.id === Number(idParams));
            
            if( itemRequested ){
                resolve(itemRequested);
            }
            else{
                reject(new Error("El item no existe."));
            }
        }, 500);
    });
}

export function getItemsFromAPIByCategory(categoryid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemsRequested = itemsDB.filter(item => item.category === categoryid);
            resolve(itemsRequested);
        }, 500);
    });
}