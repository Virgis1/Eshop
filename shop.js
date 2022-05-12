let shopAllItems = [
  {
    img: 'Essential-Long-Sleeve.png',
    img1: ['Essential-Long-Sleeve.png', 'Essential-Long-Sleeve1.png', 'Essential-Long-Sleeve2.png', 'Essential-Long-Sleeve3.png', 'Essential-Long-Sleeve4.png'],
    title: 'ESSENTIALS LONG SLEEVE - RUST',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis.',
    price: 64.00,
    category: 'Jerseys'
  },
  {
    img: 'Essential-jogger-grey.png',
    img1: ['Essential-jogger-grey.png', 'Essential-jogger-grey1.png', 'Essential-jogger-grey2.png', 'Essential-jogger-grey3.png', 'Essential-jogger-grey4.png'],
    title: 'ESSENTIALS JOGGER 2.0 - GREY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 67.00,
    category: 'trousers'
  },
  {
    img: 'icon hoodie.png',
    img1: ['icon hoodie.png','icon hoodie2.png', 'icon hoodie3.jpg','icon hoodie4.jpg'],
    title: 'icon hoodie - boon',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 74.98,
    category: 'Jerseys'
  },
  {
    img: 'dreamithoodie.png',
    img1: ['dreamithoodie.png','dreamithoodie1.jpg','dreamithoodie3.jpg','dreamithoodie2.png'],
    title: 'Dream it hoodie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 84.99,
    category: 'Jerseys'
  },
  {
    img: 'Essential-Tee-Gray.png',
    img1: ['Essential-Tee-Gray.png','Essential-Tee-Gray1.png', 'Essential-Tee-Gray2.png', 'Essential-Tee-Gray3.png', 'Essential-Tee-Gray4.png'],
    title: 'ESSENTIALS TEE - GREY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque. Dolores corporis',
    price: 52.50,
    category: 'T-shirts'
  },
  {
    img: 'Icon Jogger - black.png',
    img1: ['Icon Jogger - black.png','Icon Jogger - black2.png','Icon Jogger - black3.jpg','Icon Jogger - black4.jpg'],
    title: 'Icon Jogger - black',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 64.99,
    category: 'trousers'
  },
  {
    img: 'dad-hat-orange.png',
    img1: ['dad-hat-orange.png', 'dad-hat-orange1.png', 'dad-hat-orange2.png', 'dad-hat-orange3.png'],
    title: 'METAL UMBRELLA DAD HAT - BURNT ORANGE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 30.00,
    category: 'hats'
  },
  {
    img: 'DONT SLEEP T-SHIRT.png',
    img1: ['DONT SLEEP T-SHIRT.png','DONT SLEEP T-SHIRT2.png', 'DONT SLEEP T-SHIRT3.jpg','DONT SLEEP T-SHIRT4.jpg'],
    title: 'DONT SLEEP T-SHIRT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 49.99,
    category: 'T-shirts'
  },
  {
    img: 'METAL DAD HAT.png',
    img1: ['METAL DAD HAT.png','METAL DAD HAT3.png','METAL DAD HAT2.jpg','METAL DAD HAT4.jpg'],
    title: 'METAL DAD HAT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 34.99,
    category: 'hats'
  },
  {
    img: 'Icon-jogger-bone.png',
    img1: ['Icon-jogger-bone.png', 'Icon-jogger-bone1.png', 'Icon-jogger-bone2.png', 'Icon-jogger-bone3.png', 'Icon-jogger-bone4.png'],
    title: 'ICON JOGGER - BONE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque. Nisi mollitia ullam quis tenetur dolores corporis, eaque nihil impedit molestias, commodi qui deleniti veniam dolorem itaque.',
    price: 65.00,
    category: 'trousers'
  }
];


window.addEventListener('DOMContentLoaded', () => {
  loadAllItems();
})

function loadAllItems() {
  let AllItems = document.getElementById('items');
  for (let i=0; i< shopAllItems.length; i++) {
    let divTag = `
    <div onclick='modal(this)' onmouseover="onHoverChangeImg(this)" onmouseout="changeBackImg(this)" class="item">
            <img class="cart-item_img" src="images/${shopAllItems[i].img}" alt="image">
              <p class="cart-item_title">${shopAllItems[i].title}</p>
            <p class="price">&euro; ${shopAllItems[i].price.toFixed(2)}</p>
          </div>
    `
    AllItems.insertAdjacentHTML("beforeend",divTag);
  }
}
function onHoverChangeImg(item) {
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let image = item.getElementsByClassName('cart-item_img')[0];
  let index;
  for (let i=0; i< shopAllItems.length; i++) {
    if (shopAllItems[i].title == title) {
      index = i;
    }
  }
  let newImg = shopAllItems[index].img1[1]
image.src = `images/${newImg}`;
}
function changeBackImg(item) {
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let image = item.getElementsByClassName('cart-item_img')[0];
  let index;
  for (let i=0; i< shopAllItems.length; i++) {
    if (shopAllItems[i].title == title) {
      index = i;
    }
  }
  let newImg = shopAllItems[index].img1[0]
image.src = `images/${newImg}`;

}

function modal(item) {
  let modal = document.querySelector('.modal');
  let backdrop = document.getElementById('backdrop');
  let smallImgEl = document.querySelector('.small-img');
  smallImgEl.innerHTML = "";
  let title = item.getElementsByClassName('cart-item_title')[0].textContent;
  let price = item.getElementsByClassName('price')[0].textContent;
  let index;
  for (let i=0; i< shopAllItems.length; i++) {
    if (shopAllItems[i].title == title) {
      index = i;
    }
  }
  let description = shopAllItems[index].description;
  let image = shopAllItems[index].img1[0];
  document.querySelector(".modal-info_description").innerHTML = description;
  document.querySelector(".modal-info_title").innerHTML = title;
  document.querySelector(".modal-info_price").innerHTML = price;
  document.querySelector('.big-img').innerHTML = `
  <img src="images/${image}" alt="image">
  `;
  for (let j=0; j < shopAllItems[index].img1.length; j++) {
    let smallImg = `<img onClick="smallImgClick(this)" src="images/${shopAllItems[index].img1[j]}" alt="image">`

    smallImgEl.insertAdjacentHTML("beforeend",smallImg);
  }
  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function addToCartClicked(item) {
  let shopItem = item.parentElement.parentElement;
  let title = shopItem.getElementsByClassName('modal-info_title')[0].innerText;
  let price = shopItem.getElementsByClassName('modal-info_price')[0].innerText;
  let index;
  for (let i=0; i< shopAllItems.length; i++) {
    if (shopAllItems[i].title.toUpperCase() == title) {
      index = i;
    }
  }
  let imageSrc = shopAllItems[index].img1[0];
  addItemToCart(title, price, imageSrc);
  alert('Preke sekmingai ikelta i krepseli!');
  closeModal();
}

const AllItems = document.getElementById('items');
function showCategory(btn) {
  AllItems.innerHTML = '';
  if (btn.textContent === 'all') {
    shopAllItems.map(item => {
    AllItems.innerHTML += `
    <div onclick='modal(this)' onmouseover="onHoverChangeImg(this)" onmouseout="changeBackImg(this)" class="item">
            <img class="cart-item_img" src="images/${item.img}" alt="image">
              <p class="cart-item_title">${item.title}</p>
            <p class="price">&euro; ${item.price.toFixed(2)}</p>
          </div>
    `
  })
  }
  
  let clickedCategory = shopAllItems.filter(item => item.category === btn.textContent);
  clickedCategory.map(item => {
    AllItems.innerHTML += `
    <div onclick='modal(this)' onmouseover="onHoverChangeImg(this)" onmouseout="changeBackImg(this)" class="item">
            <img class="cart-item_img" src="images/${item.img}" alt="image">
              <p class="cart-item_title">${item.title}</p>
            <p class="price">&euro; ${item.price.toFixed(2)}</p>
          </div>
    `
  })
}
