 const products = [
  // SHIRTS
  {
    id: 1,
    name: "Gucci Shirt",
    description: "Premium shirt with cool collar",
    size: ["S", "M", "L", "XL"],
    price: 2299,
    discount: 45,
  },
  {
    id: 2,
    name: "Armani Shirt",
    description: "Elegant formal shirt for office wear",
    size: ["S", "M", "L", "XL"],
    price: 1999,
    discount: 30,
  },
  {
    id: 3,
    name: "Zara Shirt",
    description: "Casual shirt with trendy design",
    size: ["S", "M", "L", "XL", "XXL"],
    price: 1499,
    discount: 20,
  },
  {
    id: 4,
    name: "Levi's Shirt",
    description: "Denim shirt with rugged look",
    size: ["M", "L", "XL"],
    price: 1799,
    discount: 25,
  },
  {
    id: 5,
    name: "H&M Shirt",
    description: "Slim fit shirt for daily wear",
    size: ["S", "M", "L"],
    price: 1299,
    discount: 15,
  },

  // KURTAS
  {
    id: 6,
    name: "Fabindia Kurta",
    description: "Cotton kurta with traditional patterns",
    size: ["M", "L", "XL", "XXL"],
    price: 1599,
    discount: 20,
  },
  {
    id: 7,
    name: "Biba Kurta",
    description: "Elegant kurta with embroidered details",
    size: ["S", "M", "L", "XL"],
    price: 1899,
    discount: 25,
  },
  {
    id: 8,
    name: "W for Woman Kurta",
    description: "Printed kurta with casual style",
    size: ["S", "M", "L", "XL"],
    price: 1399,
    discount: 10,
  },
  {
    id: 9,
    name: "Global Desi Kurta",
    description: "Chic kurta with modern patterns",
    size: ["M", "L", "XL", "XXL"],
    price: 1699,
    discount: 30,
  },
  {
    id: 10,
    name: "Pantaloons Kurta",
    description: "Comfortable cotton kurta for daily wear",
    size: ["S", "M", "L"],
    price: 1199,
    discount: 15,
  },

  // TOPS
  {
    id: 11,
    name: "Forever 21 Top",
    description: "Trendy top with short sleeves",
    size: ["S", "M", "L"],
    price: 799,
    discount: 10,
  },
  {
    id: 12,
    name: "H&M Top",
    description: "Casual top for daily wear",
    size: ["S", "M", "L", "XL"],
    price: 899,
    discount: 15,
  },
  {
    id: 13,
    name: "Zara Top",
    description: "Chic top with stylish design",
    size: ["S", "M", "L", "XL"],
    price: 1199,
    discount: 20,
  },
  {
    id: 14,
    name: "Mango Top",
    description: "Elegant top with premium fabric",
    size: ["M", "L", "XL"],
    price: 1399,
    discount: 25,
  },
  {
    id: 15,
    name: "Forever New Top",
    description: "Comfortable casual top",
    size: ["S", "M", "L"],
    price: 999,
    discount: 12,
  },
];



let mainitem="" ;
products.forEach(prod => {
    mainitem= mainitem + `
    <div class="_element">
          <div class="_image">
            <img src='images/main${prod.id}.webp' alt="productimage1">
          </div>
          <div class="_imageline">
            <div class="_b1name">${prod.name}</div>
            <div class="_b2name">${prod.description}</div>
            <div class="_b3name">XL</div>
            <span class="_b4name">Rs. ${prod.price}</span>
            <span class="_b5name">Rs. ${prod.price} </span>
            <span class="_b6name">${prod.discount}% OFF</span>
            <button class="_button">Add to Cart</button>
          </div>
        </div>
    `
});
document.querySelector("._maincontainer").innerHTML = mainitem;