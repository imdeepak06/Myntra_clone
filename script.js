let arr=[];


counting();
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
            <button class="_button" onClick="addToCart(${prod.id})">Add to Cart</button>
          </div>
        </div>`;
  });

  mainContainer.innerHTML = mainContainerHtml;
}

function addToCart(ide){
  let hasItem=false;
  for(i=0; i<arr.length;i=i+1){
    if( arr[i]==ide){
      hasItem= true;
      break;
    }
  }
  if (!hasItem){
       arr.push(ide)
       let count=document.querySelector("._count");
       count.innerHTML=arr.length;
       counting();
      }
}

function counting(){
  let count=document.querySelector("._count");
  if (arr.length ==0){
    count.style.visibility="hidden"
  }
  else{
    count.style.visibility="visible"
  }
}