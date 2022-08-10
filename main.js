//Mi solucion menu desktop
const openMenu = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

/* function openMenuDesktop() {
  if (menu.classList.value === "desktop-menu") {
    menu.classList.add("desktop-menu-active");
  } else {
    menu.classList.remove("desktop-menu-active");
  }
} */
// otra

openMenu.addEventListener("click", openMenuDesktop2);

function openMenuDesktop2() {
  const isAsydesClose = aside.classList.contains("product-detail-active");
  if (isAsydesClose) {
    aside.classList.remove("product-detail-active");
  }
  menu.classList.toggle("desktop-menu-active");
}
//menu hambuerguer//
const openMenuHamburger = document.querySelector(".menu");
const menuHam = document.querySelector(".mobile-menu");

openMenuHamburger.addEventListener("click", openHamburger);

function openHamburger() {
  const isAsydesClose = aside.classList.contains("product-detail-active");
  if (isAsydesClose) {
    aside.classList.remove("product-detail-active");
  }
  menuHam.classList.toggle("mobile-menu-active");
}

//Card Products//
const openDetailProduct = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

openDetailProduct.addEventListener("click", openDetailProduct2);

function openDetailProduct2() {
  const isMobileMenuClose = menuHam.classList.contains("mobile-menu-active");
  if (isMobileMenuClose) {
    menuHam.classList.remove("mobile-menu-active");
  } else menu.classList.contains("desktop-menu-active");
  {
    menu.classList.remove("desktop-menu-active");
  }
  aside.classList.toggle("product-detail-active");
}

//Products//
const ProductsList = [];

ProductsList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
ProductsList.push({
  name: "Bicycle helmet",
  price: 1200,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
ProductsList.push({
  name: "Bicycle helmet",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
});
ProductsList.push({
  name: "Bicycle helmet",
  price: 1500,
  image:
    "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
ProductsList.push({
  name: "Seat",
  price: 300,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
});
ProductsList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
ProductsList.push({
  name: "Sunglasses",
  price: 800,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
});
ProductsList.push({
  name: "Sunglasses",
  price: 600,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
});
ProductsList.push({
  name: "Bicycle seat bag",
  price: 876,
  image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
});
const AppendProduct = document.querySelector(".cards-container");


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    AppendProduct.appendChild(productCard);
  }
}

renderProducts(ProductsList);
