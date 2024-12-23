//////////////////////scroll/////////////////////////
const productScroll = document.querySelector('.product-scroll');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;
let lastUpdatedTime = 0;
const DRAG_SPEED = 2; // Adjust this value to control the drag speed

productScroll.addEventListener('mousedown', (e) => {
  isDown = true;
  productScroll.classList.add('active');
  startX = e.pageX - productScroll.offsetLeft;
  scrollLeft = productScroll.scrollLeft;
});

productScroll.addEventListener('mouseleave', () => {
  isDown = false;
  productScroll.classList.remove('active');
  isDragging = false;
});

productScroll.addEventListener('mouseup', () => {
  isDown = false;
  productScroll.classList.remove('active');
  isDragging = false;
});

productScroll.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  isDragging = true;
  const x = e.pageX - productScroll.offsetLeft;
  const walk = (x - startX) * DRAG_SPEED;
  productScroll.scrollLeft = scrollLeft - walk;
  requestAnimationFrame(smoothScroll);
});

function smoothScroll() {
  if (!isDragging) return;
  const currentTime = performance.now();
  if (currentTime - lastUpdatedTime >= 16) {
    // Update the scroll position every 16ms (approximately 60 FPS)
    productScroll.scrollLeft = productScroll.scrollLeft;
    lastUpdatedTime = currentTime;
  }
  requestAnimationFrame(smoothScroll);
}




const products = [
{id: "Product1", name: "Assassins Creed Shadows", image: "https://image.api.playstation.com/vulcan/ap/rnd/202404/2214/3a3aa17817bc6b2acb860fd4426ec4885831c4ee5b3623e2.jpg", price: 79.99, count: 1 , headerImg: "https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_assassins_creed_shadows_01_1920x1080.jpg", headerTitle: "Experience the stealth and strategy of feudal Japan in Assassin's Creed Shadows. Available on the Official Ubisoft Store for PC, PS5, and Xbox.", bgColors: "#221513, #BC0E0B, #450202, #A8120D"},
{id: "Product2", name: "Assassins Creed Mirage", image: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg", price: 39.99 , count: 1 , headerImg: "https://images.hdqwalls.com/download/assassins-creed-mirage-2023-5k-q0-1366x768.jpg" , headerTitle: "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.", bgColors: "#3D444E, #AC7A55, #1E1923, #83563C"},
{id: "Product3", name: "Assassins Creed Valhalla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVITZzUd4i-phSARKRCD223a5M_1OKjE3xcziCZGqhAA&s", price: 29.99 , count: 1 , headerImg: "https://wallpapers.com/images/featured/assassins-creed-valhalla-background-g85p6z9biqv3ait9.jpg" , headerTitle: "Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.", bgColors: "#4C5F6D, #905D3D, #282D2D, #535953"},
{id: "Product4", name: "Assassins Creed Odyssey", image: "https://m.media-amazon.com/images/I/81XbTZwpWLL._AC_UF894,1000_QL80_DpWeblab_.jpg", price: 69.99 , count: 1 , headerImg: "https://www.chromethemer.com/download/hd-wallpapers/assassins-creed-odyssey-3840x2160.jpg" , headerTitle: "From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece", bgColors: "#27446C, #3B2F22, #5D5526, #5E523C"},
{id: "Product5", name: "Assassins Creed Origins", image: "https://cdn2.steamgriddb.com/thumb/7126e65d4f7fbbb5de1cbae1dc292d0a.jpg", price: 59.99 , count: 1 , headerImg: "https://i0.wp.com/www.pswallpapers.com/wp-content/uploads/2017/10/Assassins-Creed-Origins-04-4K-Main.jpg?ssl=1" , headerTitle: "Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassins Brotherhood.", bgColors: "#70482C, #110A09, #BC7427, #190D0A"},
{id: "Product6", name: "Assassins Creed Syndicate", image: "https://m.media-amazon.com/images/I/815L7efIuzL._AC_UF1000,1000_QL80_.jpg", price: 39.99 , count: 1 , headerImg: "https://images5.alphacoders.com/654/654187.jpg" , headerTitle: "London, 1868. In the heart of the Industrial Revolution, play as Frye twins, jacob & evie - two brash and charismatic Assassins.", bgColors: "#0B1929, #06091B, #3F0D1A, #30454A"},
{id: "Product7", name: "Assassins Creed Unity", image: "https://steam-gamestore.ir/wp-content/uploads/2021/02/Assassinscreedunity.jpg", price: 29.99 , count: 1 , headerImg: "https://c.wallhere.com/photos/80/28/1920x1080_px_Assassins_Creed_Unity_France-818144.jpg!d" , headerTitle: "Assassins Creed Unity tells the story of Arno who embarks upon an extraordinary journey to expose the true powers behind the French Revolution.", bgColors: "#245470, #6A0B12, #5A5D43, #34404E"},
{id: "Product8", name: "Assassins Creed Black Flag", image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c4b7612856287.5626e31d6576f.jpg", price: 19.99 , count: 1 , headerImg: "https://www.psu.com/wp/wp-content/uploads/2020/09/Assassins-Creed-IV-Black-Flag-PS4-Wallpapers-40.jpg" , headerTitle: "Become Edward Kenway, a charismatic yet brutal pirate captain, trained by Assassins.Edward can effortlessly switch between the Hidden Blade of the Assassin's Order and pistols and dual cutlass swords", bgColors: "#24231B, #45595F, #5D261F, #88857C"}
]


const productBtn = document.querySelectorAll(".product-btn");
let cartList = document.querySelector(".cartList");
let cartProducts = []; 

let userBasket = [];


/////////////////////adding product/////////////////////////


productBtn.forEach(button => {
  const selectedProductId = button.id;
  const selectedProduct = products.find(p => p.id === selectedProductId);
  button.addEventListener("click", () => addToCart(selectedProduct));

});


function addToCart(selectedProduct) {

if (!userBasket.find(product => product.id === selectedProduct.id)) {
  userBasket.push(selectedProduct);
  }

  let productId = selectedProduct.id;
  let productName = selectedProduct.name;
  let productImage = selectedProduct.image;
  let productPrice = selectedProduct.price;
  let productCount = selectedProduct.count;



  if (cartProducts.includes(productId)) {
    // The product is already in the cart
    calcTotalPrice(userBasket);
  } else {
    newCartItem(productName, productImage, productPrice, productId, productCount, selectedProduct);
    calcTotalPrice(userBasket);
    alert(productName + " Added to your cart")
    
    //scrool to buttom//
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Smooth scrolling
    });
    
  }
}


function newCartItem(productName , productImage , productPrice, productId, productCount, selectedProduct){

  cartProducts.push(productId) 

  let rowDiv = document.createElement("div");
  rowDiv.classList.add("cart-row");
  rowDiv.id = productId;
  cartList.appendChild(rowDiv)

    let itemcolumn = document.createElement("div");
    itemcolumn.classList.add("cart-item");
    itemcolumn.classList.add("cart-column");
    rowDiv.appendChild(itemcolumn);

      let itemImg = document.createElement("img");
      itemImg.classList.add("cart-item-image");
      itemImg.width = "100";
      itemImg.height = "100";
      itemImg.src = productImage;
      itemcolumn.appendChild(itemImg);

      let itemName = document.createElement("span");
      itemName.classList.add("cart-item-title");
      itemName.innerText = productName;
      itemcolumn.appendChild(itemName);

    let itemPrice = document.createElement("span");
    itemPrice.classList.add("cart-price");
    itemPrice.classList.add("cart-column");
    itemPrice.innerText = "$" + productPrice;
    rowDiv.appendChild(itemPrice);

    let itemQuantity = document.createElement("div");
    itemQuantity.classList.add("cart-quantity");
    itemQuantity.classList.add("cart-column");
    rowDiv.appendChild(itemQuantity);

      let quantityInp = document.createElement("input");
      quantityInp.classList.add("cart-quantity-input");
      quantityInp.id = productId;
      quantityInp.type = "number";
      quantityInp.min = 1;
      quantityInp.value = productCount;
      quantityInp.addEventListener("change", () => quantityChange(userBasket, quantityInp, selectedProduct));
      itemQuantity.appendChild(quantityInp);

      let quantityBtn = document.createElement("button");
      quantityBtn.classList.add("btn");
      quantityBtn.classList.add("btn-danger");
      quantityBtn.type = "button";
      quantityBtn.innerText = "REMOVE";
      quantityBtn.addEventListener("click", () => removeFromCart(quantityBtn.parentElement));
      itemQuantity.appendChild(quantityBtn);
  

}


/////////////////////////totalPrice///////////////////////////////

const cartTotalPriceElem = document.querySelector(".cart-total-price");

function calcTotalPrice(userBasket) {
  let totalPriceValue = 0;

  userBasket.forEach(function(product) {

      totalPriceValue += product.count * product.price;
    
  });

  cartTotalPriceElem.innerHTML = `$${totalPriceValue.toFixed(2)}`;

}


//////////////////////quantity///////////////////////

function quantityChange(userBasketArray, quantityInp, selectedProduct) {

  selectedProduct.count = quantityInp.value
  calcTotalPrice(userBasketArray)

}


///////////////////////product remove//////////////////////////

function removeFromCart(element) {
  let cartRow = element.parentElement;
  let productToRemove = cartRow.id;

  if (cartProducts.includes(productToRemove)) {
    let index = cartProducts.indexOf(productToRemove);
    cartProducts.splice(index, 1);
  }

  let indexToRemove = userBasket.findIndex(product => product.id === productToRemove);
  if (indexToRemove !== -1) {
    userBasket.splice(indexToRemove, 1);
  }
console.log(element);

  cartRow.remove();
  calcTotalPrice(userBasket);
}


//////////////////////headerHandler////////////////////////////

const productImgs = document.getElementsByClassName("product-img");

const productInfo = document.getElementsByClassName("product-info-header")[0];
const body = document.querySelector("body")

const infoImage = document.querySelector("header")
const infoName = document.querySelector(".product-name");
const infoTitle = document.querySelector(".product-title");
const infoPrice = document.querySelector(".product-info-price");
const infoMore = document.querySelector(".product-info-more")

let selectedProduct

for (let i = 0; i < productImgs.length; i++) {
  productImgs[i].addEventListener("click", function headerHandler(){

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const productAlt = productImgs[i].alt;
    selectedProduct = products.find(p => p.id === productAlt);

    let productInfoImg = selectedProduct.headerImg;
    let productInfoName = selectedProduct.name;
    let productInfoTitle = selectedProduct.headerTitle;
    let productInfoPrice = selectedProduct.price;
    let bodyBackgroundColors = selectedProduct.bgColors;
    let productInfoId = selectedProduct.id;


    headerInfochanger(productInfoImg, productInfoName, productInfoTitle, productInfoPrice, bodyBackgroundColors, productInfoId)
  });
}



function headerInfochanger(productInfoImg, productInfoName, productInfoTitle, productInfoPrice, bodyBackgroundColors, productInfoId) {
  infoImage.style.backgroundImage = `url(${productInfoImg})`;
  infoName.innerText = productInfoName;
  infoTitle.innerText = productInfoTitle;
  let id = productInfoId.slice(7, 8);
  infoMore.href = "http://127.0.0.1:5500/ShoppingCart/gameCart/index.html/?id="+id;



  body.style.background = `linear-gradient(135deg, ${bodyBackgroundColors})`;
  body.style.backgroundSize = "600% 600%";

  productInfo.style.visibility = "visible";

}


//////////////////purchase button///////////////////

const purchaseBtn = document.querySelector(".btn-purchase");

purchaseBtn.addEventListener("click", function() {
  console.log(cartList.children.length);
  let cartChildren = Array.from(cartList.children);

  cartChildren.reverse();

  if (cartList.children.length === 0) {
    alert("Your basket is empty. Please add items to your basket before checking out.");

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    alert("Thank you for your purchase!");

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  for (let i = 0; i < cartChildren.length; i++) {
    let productToPurchase = cartChildren[i].children[2];
    removeFromCart(productToPurchase);
  }


});



////////////////////////purchasing from game cart/////////////////////////

let locationSearch = location.search;
let locationSearchParams = new URLSearchParams(locationSearch);
let productIDParam = locationSearchParams.get("id");


let mainProduct = products.find(function (product) {
  let productId = product.id
  let productIdNum = productId.slice(7);

  return parseInt(productIdNum) === parseInt(productIDParam);
});

if(mainProduct){
  addToCart(mainProduct)
}