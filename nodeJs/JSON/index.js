const fs = require('fs')
const data  = {
                    "id": 10,
                    "title": "HP Pavilion 15-DK1056WM",
                    "description": "HP Pavilion 15-DK1056WM Gaming...",
                    "price": 1099,
                    "discountPercentage": 6.18,
                    "rating": 4.43,
                    "stock": 89,
                    "brand": "HP Pavilion",
                    "category": "laptops",
                    "thumbnail": "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
                    "images": [
                    "https://dummyjson.com/image/i/products/10/1.jpg",
                    "https://dummyjson.com/image/i/products/10/2.jpg",
                    "https://dummyjson.com/image/i/products/10/3.jpg",
                    "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
                    ]
                }
const jsondata = JSON.stringify(data);
// console.log(jsondata);

// var jsonn = {"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming...","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg","images":["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"]}

// console.log(JSON.parse(jsondata));

// fs.writeFileSync('./index.json', jsondata)
fs.readFile('./index.json','UTF-8', (error,data)=>{
    console.log(data);
    // console.log(JSON.parse(data));
});
