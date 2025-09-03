
displayItemHomePage();



function displayItemHomePage() {
  let mainContainer = document.querySelector("._maincontainer");
  let mainContainerHtml = "";

  products.forEach((prod) => {
    mainContainerHtml =
      mainContainerHtml +
      `<div class="_element">
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
        </div>`;
  });

  mainContainer.innerHTML = mainContainerHtml;
}
