let shopItems = [
  {
    img: 'icon hoodie.png',
    img1: ['icon hoodie.png','icon hoodie2.png', 'icon hoodie3.jpg','icon hoodie4.jpg'],
    title: 'icon hoodie - boon',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 74.99
  },
  {
    img: 'dreamithoodie.png',
    img1: ['dreamithoodie.png','dreamithoodie1.jpg','dreamithoodie3.jpg','dreamithoodie2.png'],
    title: 'Dream it hoodie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 84.99
  },
  {
    img: 'Icon Jogger - black.png',
    img1: ['Icon Jogger - black.png','Icon Jogger - black2.png','Icon Jogger - black3.jpg','Icon Jogger - black4.jpg'],
    title: 'Icon Jogger - black',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 64.99
  },
  {
    img: 'DONT SLEEP T-SHIRT.png',
    img1: ['DONT SLEEP T-SHIRT.png','DONT SLEEP T-SHIRT2.png', 'DONT SLEEP T-SHIRT3.jpg','DONT SLEEP T-SHIRT4.jpg'],
    title: 'DONT SLEEP T-SHIRT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 49.99
  },
  {
    img: 'METAL DAD HAT.png',
    img1: ['METAL DAD HAT.png','METAL DAD HAT3.png','METAL DAD HAT2.jpg','METAL DAD HAT4.jpg'],
    title: 'METAL DAD HAT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 34.99
  },
];
function loadItems() {
  let newdropItems = document.getElementById('newdrop-items');
  for (let i=0; i< shopItems.length; i++) {
    let divTag = `
    <div onclick='modal(this)' onmouseover="onHoverChangeImg(this)" onmouseout="changeBackImg(this)" class="swiper-slide">
            <img class="cart-item_img" src="images/${shopItems[i].img}" alt="image">
              <p class="cart-item_title">${shopItems[i].title}</p>
            <p class="price">&euro; ${shopItems[i].price}</p>
          </div>
    `
    newdropItems.insertAdjacentHTML("beforeend",divTag);
  }
}
function onHoverChangeImg(item) {
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let image = item.getElementsByClassName('cart-item_img')[0];
  let index;
  for (let i=0; i< shopItems.length; i++) {
    if (shopItems[i].title == title) {
      index = i;
    }
  }
  let newImg = shopItems[index].img1[2]
image.src = `images/${newImg}`;
}
function changeBackImg(item) {
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let image = item.getElementsByClassName('cart-item_img')[0];
  let index;
  for (let i=0; i< shopItems.length; i++) {
    if (shopItems[i].title == title) {
      index = i;
    }
  }
  let newImg = shopItems[index].img1[0]
image.src = `images/${newImg}`;

}

// banner swiper start

var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
          paginationType: "progressbar"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       
      });

 // banner swiper ends

 // new-drop swiper start
 var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        breakpoints: {
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
       // new-drop swiper end

// collection-mobile_swiper start

var swiper = new Swiper(".collection-mobile_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
          paginationType: "progressbar"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       
      });

// collection-mobile_swiper end

        let collection  = document.getElementsByClassName('collection')[0];
      
        function showImg() {
           collection.classList.add("hover_img");
        }
        function hideImg() {
          collection.classList.remove("hover_img");
        }
        function showImg1() {
          collection.classList.add("hover_img1");
        }
        function hideImg1() {
          collection.classList.remove("hover_img1");
        }


// Show/hide cart
let cart = document.getElementById('cart');
function showCart() {
  cart.classList.add("show-cart");
}
function hideCart() {
  cart.classList.remove("show-cart");
}

function addToCartClicked(item) {
  let shopItem = item.parentElement.parentElement;
  let title = shopItem.getElementsByClassName('modal-info_title')[0].innerText;
  let price = shopItem.getElementsByClassName('modal-info_price')[0].innerText;
  let index;
  for (let i=0; i< shopItems.length; i++) {
    if (shopItems[i].title.toUpperCase() == title) {
      index = i;
    }
  }
  let imageSrc = shopItems[index].img1[0];
  addItemToCart(title, price, imageSrc);
  alert('Preke sekmingai ikelta i krepseli!');
  closeModal();
}

function addItemToCart(title, price, imageSrc) {
  let cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cartItemContent = `
                <div class="cart-item_img">
                  <img src="images/${imageSrc}" alt="cart-item">
                </div>
                <div class="cart-info">
                  <div class="cart-item_text">
                    <p class="cart-item_title">${title}</p>
                    <p class="cart-item_price">${price}</p>
                  </div>
                  <div class="cart-item_buttons">
                    <div class="cart-item_quantity">
                      <span onClick="quantityMinus(this)">-</span>
                       <span class="quantityNumber">1</span> 
                       <span onClick="quantityPlus(this)">+</span>
                    </div>
                    <p onClick="remove(this)" class="cart-item_delete"><i class="far fa-trash-alt"></i></p>
                  </div>
                </div>
  `;
cartItem.innerHTML = cartItemContent;
cartItems.appendChild(cartItem);
updateCart();
updateCartTotal()
}


function remove(el) {
  el.parentElement.parentElement.parentElement.remove();
  updateCart();
  updateCartTotal()
}
function updateCart() {
  let cartItemsNumber = document.getElementById('cartItemsNumber');
 
  let items = document.getElementsByClassName('cart-item');
  let totalItems = 0;
for (var i=0; i < items.length; i++) {
   totalItems += 1;
}
  cartItemsNumber.innerText = totalItems;
  if (totalItems == 0) {
    document.getElementsByClassName('no-item_info')[0].style.display = 'block'
  } else {
    document.getElementsByClassName('no-item_info')[0].style.display = 'none'
  }
}


function quantityMinus(el) {
  let quantityElement = el.parentElement.getElementsByClassName('quantityNumber')[0];
  let quantityNumber = quantityElement.innerText;
  if(quantityNumber > 1) {
    quantityNumber--;
    el.nextElementSibling.innerText = quantityNumber;
    updateCartTotal()
  } else {
    quantityNumber = 1;
    el.nextElementSibling.innerText = quantityNumber;
  }
}
function quantityPlus(el) {
  let quantityElement = el.parentElement.getElementsByClassName('quantityNumber')[0];
  let quantityNumber = quantityElement.innerText;
    quantityNumber++;
    el.previousElementSibling.innerText = quantityNumber;
    updateCartTotal()
}
function updateCartTotal() {
  let items = document.getElementsByClassName('cart-item');
  let total = 0;
  for (var i=0; i < items.length; i++) {
    let item = items[i]
    let priceElement = item.getElementsByClassName('cart-item_price')[0]
    let price = parseFloat(priceElement.innerText.replace('€', ''))
    let quantityElement = item.getElementsByClassName('quantityNumber')[0];
    let quantityNumber = parseFloat(quantityElement.innerText);
    total = total + (price * quantityNumber)
  }
  document.getElementsByClassName('total-sum')[0].innerText = total.toFixed(2)
}

function modal(item) {
  let modal = document.querySelector('.modal');
  let backdrop = document.getElementById('backdrop');
  let smallImgEl = document.querySelector('.small-img');
  smallImgEl.innerHTML = "";
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let price = item.getElementsByClassName('price')[0].textContent;
  let index;
  for (let i=0; i< shopItems.length; i++) {
    if (shopItems[i].title == title) {
      index = i;
    }
  }
  let description = shopItems[index].description;
  let image = shopItems[index].img1[0];
  document.querySelector(".modal-info_description").innerHTML = description;
  document.querySelector(".modal-info_title").innerHTML = title;
  document.querySelector(".modal-info_price").innerHTML = price;
  document.querySelector('.big-img').innerHTML = `
  <img src="images/${image}" alt="image">
  `;
  for (let j=0; j < shopItems[index].img1.length; j++) {
    let smallImg = `<img onClick="smallImgClick(this)" src="images/${shopItems[index].img1[j]}" alt="image">`

    smallImgEl.insertAdjacentHTML("beforeend",smallImg);
  }
  modal.classList.add('visible');
  backdrop.classList.add('visible');
}
document.getElementById('backdrop').addEventListener('click', ()=> {
  document.querySelector('.modal').classList.remove('visible')
  backdrop.classList.remove('visible');
})
function closeModal() {
  let modal = document.querySelector('.modal');
  let backdrop = document.getElementById('backdrop');
  modal.classList.remove('visible')
  backdrop.classList.remove('visible');
}
function smallImgClick(img) {
  document.querySelector('.big-img').innerHTML = `
  <img src="${img.src}" alt="image">
  `;
}

// Firebase Authentication
let mobProfilePage = document.getElementById('mob-profile');
let profilePage = document.getElementById('profile-page');
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        mobProfilePage.innerHTML = '<a class="nav-link" href="login.html">Login</a>';
        profilePage.addEventListener('click', () => {
          location.replace("login.html");
        })
    }else{
        mobProfilePage.innerHTML = '<a class="nav-link" href="profile.html">Profile</a>';
        profilePage.addEventListener('click', () => {
          location.replace("profile.html");
        })
    }
})
