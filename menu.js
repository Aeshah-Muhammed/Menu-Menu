// sideBar
const bar = document.querySelector(".bar");
const cancel = document.querySelector(".cancel");
const sideBar = document.querySelector(".side-solid");

function barkick()  {
  bar.style.display = 'none'
  cancel.style.display = 'block'
  sideBar.style.display = 'block'
}

function closekick() {
  cancel.style.display = 'none'
  bar.style.display = 'block'
  sideBar.style.display = 'none'
}
// sideBar ends 



//  second page menus 


const menus = [
    {
        id : 1,
        image : "Assets/Images/001/IMG_3304.JPG",
        price : 1200 ,
    names :"Jollof Rice",
    desc : "with beef and plantain",
    link :"Order Now",
    } ,
    {
        id : 2,
        image :"Assets/Images/001/IMG_3313.JPG",
        price : 1200 ,
    names :"Jollof Rice",
    desc : "with fish and plantain",
    link :"Order Now",
    },
    {
        id : 3,
        image :"Assets/Images/001/1201e8a0-079c-4453-82ca-8c44adb8b7bb.jpg",
        price : 600 ,
    names :"Yam and Beans",
    desc : "with fish and plantain",
    link :"Order Now",
    },
    {
        id : 4,
        image : "Assets/Images/001/IMG_3307.JPG",
        price : 1300 ,
    names :"Ewa Agoyin",
    desc : "with fish,ponmo and plantain",
    link :"Order Now",
    },
    
    {
        id : 5,
        image :"Assets/Images/001/IMG_3308.JPG",
        price : 500 ,
    names :"Chin-Chin",
    desc : "Price varries with size.",
    link :"Order Now",
    },
    {
        id : 6,
        image :"Assets/Images/001/IMG_3314.JPG",
        price : 200 ,
    names :"Coleslaw",
    desc : "Coleslaw",
    link :"Order Now",
    },
    
];
const img = document.querySelector("#img");
const price = document.querySelector(".price");
const names = document.getElementById("names");
const desc = document.getElementById("desc");

const img2 = document.querySelector("#img2");
const price2 = document.querySelector("#price2");
const names2 = document.getElementById("names2");
const desc2 = document.getElementById("desc2");

const img3 = document.querySelector("#img3");
const price3 = document.querySelector("#price3");
const names3 = document.getElementById("names3");
const desc3 = document.getElementById("desc3");

const link = document.getElementById("link");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

let currentItem = 0;
let currentItem2 = 1;
let currentItem3 = 2;

window.addEventListener("DOMCOntentLoaded", function() {
    showPerson();
});




function showPerson() {
    const item = menus[currentItem];
    const item2 = menus[currentItem2];
    const item3 = menus[currentItem3];

    img.src = item.image;
    names.textContent = item.names;
    desc.textContent = item.desc;
    link.textContent = item.link;
    price.textContent = item.price;

    img2.src = item2.image;
    names2.textContent = item2.names;
    desc2.textContent = item2.desc;
    price2.textContent = item2.price;

    img3.src = item3.image;
    names3.textContent = item3.names;
    desc3.textContent = item3.desc;
    price3.textContent = item3.price;

}

nextBtn.addEventListener("click", nextAction);

function nextAction(){
    currentItem++;
    currentItem2++;
    currentItem3++;
  
    if (currentItem > menus.length - 1)  {
      currentItem = 0;
    }
    if (currentItem2 > menus.length - 2)  {
      currentItem2 = 1;
    }
    if (currentItem3 > menus.length - 3)  {
        currentItem3 = 2;
      }


  
    showPerson();
  }

  prevBtn.addEventListener("click", function(){
    currentItem--;
  if (currentItem < 0) {
    currentItem = menus.length - 1;
  } 
  showPerson();
});

nextArrow.addEventListener("click", arrowAction);

function arrowAction(){
    currentItem++;
    currentItem2++;
    currentItem3++;
  
    if (currentItem > menus.length - 1)  {
      currentItem = 0;
    }
    if (currentItem2 > menus.length - 2)  {
      currentItem2 = 1;
    }
    if (currentItem3 > menus.length - 3)  {
        currentItem3 = 2;
      }


  
    showPerson();
  }
  prevArrow.addEventListener("click", function(){
    console.log("prevArrow");
    currentItem--;
    currentItem2--;
    currentItem3--;
  if (currentItem < 0) {
    currentItem = menus.length - 1;
  } 
  if (currentItem2 < 0) {
    currentItem2 = menus.length - 2;
  }   if (currentItem3 < 0) {
    currentItem3 = menus.length - 3;
  } 
  showPerson();
  
});


setInterval(() => {
    nextAction()
}, 3000);

// second page menu ends 
