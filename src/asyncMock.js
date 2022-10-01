const products = [
    {
      "id": 2661,
      "stock": 3,
      "name": "Campera Puffer",
      "price": 1990,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/06c374d6-fed3-48e1-8dc2-3a311632fd28-800x1000.jpeg"
    },
    {
      "id": 2932,
      "stock": 14,
      "name": "Campera Puffer Wester",
      "price": 2490,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/14514f01-ad2d-4621-b810-fefc5b8a7ef9-800x1067.jpeg"
    },
    {
      "id": 2939,
      "stock": 5,
      "name": "Campera togo",
      "price": 2190,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/6ff4fe8e-d959-4595-85de-bbc9928e7ca5-800x1059.jpeg"
    },
    {
      "id": 2949,
      "stock": 1,
      "name": "Sobrecamisa Adis",
      "price": 2190,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/1edfd0dd-c5c2-45c2-840f-5d0250f565e2-800x1006.jpeg"
    },
    {
      "id": 2954,
      "stock": 2,
      "name": "Jeans Mavala",
      "price": 1990,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/img_8330-800x1200.jpeg"
    },
    {
      "id": 2961,
      "stock": 11,
      "name": "Pantalón Ecocuero California",
      "price": 2190,
      "img": "https://diversite.uy/wp-content/uploads/2022/07/img_0156-800x1064.jpeg"
    },
    {
      "id": 2964,
      "stock": 18,
      "name": "Jean Nordelta",
      "price": 2190,
      "img": "https://diversite.uy/wp-content/uploads/2022/08/3e59e65d-6201-4533-8a89-d904728d1c3a-800x1044.jpeg"
    },
    {
      "id": 2971,
      "stock": 9,
      "name": "Vestido Agatha",
      "price": 1490,
      "img": "https://diversite.uy/wp-content/uploads/2022/07/ca28d185-488e-468d-8a5f-8c448f9325e0-800x1067.jpeg"
    },
    {
      "id": 2974,
      "stock": 7,
      "name": "Monito gerbera",
      "price": 2690,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/77fa4ddb-3e28-4b0f-a01d-a155149ff8c8-800x1044.jpeg"
    },
    {
      "id": 2984,
      "stock": 12,
      "name": "Championes Petra",
      "price": 2290,
      "img": "https://diversite.uy/wp-content/uploads/2022/08/fd700a9a-d492-404d-b16e-71cf08c2ec74-800x1067.jpeg"
    },
    {
      "id": 3038,
      "stock": 19,
      "name": "Championes Print",
      "price": 1990,
      "img": "https://diversite.uy/wp-content/uploads/2022/09/41f2b77c-35d9-4d80-a1f6-7d84661646f7-1-800x1067.jpeg"
    },
    {
      "id": 3073,
      "stock": 9,
      "name": "Championes padua",
      "price": 1990,
      "img": "https://diversite.uy/wp-content/uploads/2022/08/fb9f9152-766a-4177-83b5-1229492e4743-800x1067.jpeg"
    }
   ]

export const getProducts = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(products)
        },1000)
    })
}

export const getProduct =(id) =>{
  return new Promise ((resolve) =>{
    setTimeout(()=>{
      resolve(products.find(prod => prod.id == id))
    },1000)
  })
}