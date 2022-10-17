
// scroll

// let height = 0
// const scrollIcon = document.querySelector(".scroll-icon")


// window.addEventListener('scroll',  scrollkick)



// function scrollkick() {
//   let scrollIcon = window.scrollY
//   // console.log(windowheight)

//     if ( height  = 10 ) {
//   }

//   scrollIcon.style.display = 'block'
   
//   }




// function scrolltotop(params) {
//   window.scroll(0,0)
// }













// const menu = [
// { 
//     id:1,
//     title:"Jollof Rice with beef and plantain",
//     category:"Breakfast",
//     price:1200,
// },
// { 
//     id:2,
//     title:"Jollof Rice with with fish and plantain",
//     category:"Launch",
//     price:1200,
// },
// { 
//     id:3,
//     title:"Yam and beanswith fish and plantain",
//     category:"Launch",
//     price:600,
// },
// { 
//     id:4,
//     title:"Ewa Agoyin with fish,ponmo and plantain",
//     category:"Launch",
//      price:1300,
// },
// { 
//     id:5,
//     title:"Chin-Chin",
//     category:"Brucnch",
//     price:200/500,
// },
// { 
//     id:6,
//     title:"Coleslaw",
//     category:"Coleslaw",
//     price:200 - 500,
// },
// { 
//     id:7,
//     title:"Drinks",
//     category:"Soft drinks of your choice",
//     price:200 - 500,
   
// },
// ];

// const eachMenu = document.querySelector ("each-menu");

// window.addEventListener("DOMContentLoaded", function() {
//  displayMenu = menu.map(function (item) {
// //     return ' <div class="menu-wrap">
// //     <div class="each-menu">
// //     <p>${.title}</p>
// //     <strong>#${.price</strong >
// //     <span> 
// //         ${.desc}
// //     </span>
// //     </div>
// //   </div>';
     
// });
// displayMenu = displayMenu.join("");
// eachMenu.innerHTML = displayMenu;
// });

// index 





  
// scroll ends 

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



// wallpaper 

const backgroundImages = [
  "Assets/Images/pexels-lisa-fotios-1279330.jpg",
  "Assets/Images/pexels-ella-olsson-1640777.jpg",
  "Assets/Images/pexels-rajesh-tp-1624487.jpg",
  "Assets/Images/pexels-lukas-616401.jpg"
 
  
];
i = 0;


function backgroundChanger() {
if (i > backgroundImages.length - 1)  {
  i = 0;
}
document.querySelector(".wallpaper").style.backgroundImage = 'url(' + backgroundImages[i++] + ')';


}

setInterval( backgroundChanger, 4000);

// wallpaper ends 


// first page menu 



const firstPageMenu = [
{
  id : 1,
  p : "Jollof Rice",
  span : " with beef and plantain..............................................................<strong> &#8358;1200</strong>",

  type : ['breakfast', 'launch' ] 
},
{
  id : 2,
  p : "Jollof Rice",
  span : " with fish and plantain................................................................<strong> &#8358;1200</strong>",
  type : ['breakfast', 'launch' ] 
},
{
  id : 3,
  p : "Yam and beans",
  span : "with fish and plantain ..............................................................<strong>&#8358;600</strong>",
  type : ['breakfast', 'launch' ] 
},
{
  id : 4,
  p : "Ewa Agoyin",
  span : "with fish,ponmo and plantain...................................................<strong>&#8358;1,300</strong>",
  type : ['launch' ] 
},
{
  id : 5,
  p : "Chin-Chin",
  span : "Price varries with size........................................................<strong>&#8358;200/&#8358;500</strong>",
  type : ['breakfast', 'launch', 'brunch' ] 
},
{
  id : 6,
  p : "Coleslaw",
  span : "Just............................................................................................ <strong>&#8358;200</strong>",
  type : ['breakfast', 'launch', 'brunch', 'coleslaw' ] 
},
{
  id : 7,
  p : "Soft drinks of your choice",
  span : "Price ranges with choice.....................................................<strong>&#8358;200 - &#8358;500</strong>",
  type : ['breakfast', 'launch', 'brunch', 'drinks' ] 

},



];


const menuWrap = document.querySelector(".menu-wrap");


// const allMenu = document.getElementById("allmenu");
const breakfast = document.getElementById("breakfast");
const brunch = document.getElementById("brunch");
const launch = document.getElementById("launch");
const  drinks = document.getElementById("drinks");
const coleslaw = document.getElementById("coleslaw");


const maplist =  firstPageMenu.map((items,id) =>

`   <div class="each-menu">
<p>${items.p}</p>
<span
  >${items.span}</span
>
</div>`

)

// const oo = [{
//   id : 1,
//   p : "Jollof Rice",
//   span : " with beef and plantain..............................................................<strong> &#8358;1200</strong>",

//   category : ['breakfast', 2] 
// },
// ]



maplist.forEach(function(i){
  const workLiTag = document.createElement("div");
   workLiTag.innerHTML = i;
   document.querySelector(".menu-wrap").appendChild(workLiTag);
})
// allMenu.addEventListener('click', allMenufilter)
breakfast.addEventListener('click', breakfastfilter)
brunch.addEventListener('click', brunchfilter)
launch.addEventListener('click', launchfilter)
drinks.addEventListener('click', drinksfilter)
coleslaw.addEventListener('click', coleslawfilter)

// function allMenufilter() {

//   document.querySelector(".menu-wrap").innerHTML = '';

//   const maplist = breakfast.map((items, id) =>



//   `    <div class="each-menu">
//   <p>${items.p}</p>
//   <span
//     >${items.span}</span
//   >
//   </div>`
//   )


//   maplist.forEach(function(i){
//     const workLiTag = document.createElement("div");
//     workLiTag.innerHTML = i;
//     document.querySelector(".menu-wrap").appendChild(workLiTag);
//     })
// }
function breakfastfilter() {

  document.querySelector(".menu-wrap").innerHTML = '';

  // const filterlist = firstPageMenu.filter((items, id) => items.category.includes('breakfast'))


  const filterlist = firstPageMenu.filter((foods) =>
  foods.type.includes('breakfast')
)
  

  const filterlisthtml = filterlist.map((items, id) => 

  `    <div class="each-menu">
  <p>${items.p}</p>
  <span
    >${items.span}</span
  >
  </div>`

  )

  filterlisthtml.forEach(function(i){
    const workLiTag = document.createElement("div");
    workLiTag.innerHTML = i;
    document.querySelector(".menu-wrap").appendChild(workLiTag);
    })
    
}

function brunchfilter() {

  document.querySelector(".menu-wrap").innerHTML = '';

  const filterlist = firstPageMenu.filter((foods) =>
  foods.type.includes('brunch')
  )
  

  const filterlisthtml = filterlist.map((items, id) => 

  `    <div class="each-menu">
  <p>${items.p}</p>
  <span
    >${items.span}</span
  >
  </div>`

  )

  filterlisthtml.forEach(function(i){
    const workLiTag = document.createElement("div");
    workLiTag.innerHTML = i;
    document.querySelector(".menu-wrap").appendChild(workLiTag);
    })
    
}
function launchfilter() {

  document.querySelector(".menu-wrap").innerHTML = '';

  const filterlist = firstPageMenu.filter((foods) =>
  foods.type.includes('launch')

  )

  const filterlisthtml = filterlist.map((items, id) => 

  `    <div class="each-menu">
  <p>${items.p}</p>
  <span
    >${items.span}</span
  >
  </div>`

  )

  filterlisthtml.forEach(function(i){
    const workLiTag = document.createElement("div");
    workLiTag.innerHTML = i;
    document.querySelector(".menu-wrap").appendChild(workLiTag);
    })
    
}
function drinksfilter() {

  document.querySelector(".menu-wrap").innerHTML = '';

  const filterlist = firstPageMenu.filter((foods) =>
  foods.type.includes('drinks'))

  

  const filterlisthtml = filterlist.map((items, id) => 

  `    <div class="each-menu">
  <p>${items.p}</p>
  <span
    >${items.span}</span
  >
  </div>`

  )

  filterlisthtml.forEach(function(i){
    const workLiTag = document.createElement("div");
    workLiTag.innerHTML = i;
    document.querySelector(".menu-wrap").appendChild(workLiTag);
    })
    
}
function coleslawfilter() {

  document.querySelector(".menu-wrap").innerHTML = '';

  const filterlist = firstPageMenu.filter((foods) =>
  foods.type.includes('coleslaw'))

  

  const filterlisthtml = filterlist.map((items, id) => 

  `    <div class="each-menu">
  <p>${items.p}</p>
  <span
    >${items.span}</span
  >
  </div>`

  )

  filterlisthtml.forEach(function(i){
    const workLiTag = document.createElement("div");
    workLiTag.innerHTML = i;
    document.querySelector(".menu-wrap").appendChild(workLiTag);
    })
    
}

breakfast.addEventListener('click',
function() {

  breakfast.style.backgroundColor = 'orangered'
  breakfast.style.color = 'white'
  brunch.style.backgroundColor = 'white'
  coleslaw.style.backgroundColor = 'white'
  launch.style.backgroundColor = 'white'
 drinks.style.backgroundColor = 'white'
 brunch.style.color = 'black'
 coleslaw.style.color = 'black'
  launch.style.color = 'black'
 drinks.style.color = 'black'

 
})
brunch.addEventListener('click',
function() {
  breakfast.style.backgroundColor = 'white'
  brunch.style.backgroundColor = 'orangered'
  brunch.style.color = 'white'
  launch.style.backgroundColor = 'white'
 drinks.style.backgroundColor = 'white'
 coleslaw.style.backgroundColor = 'white'
 breakfast.style.color = 'black'
 coleslaw.style.color = 'black'
 launch.style.color = 'black'
drinks.style.color = 'black'
})
launch.addEventListener('click',
function() {

  launch.style.backgroundColor = 'orangered'
  launch.style.color = 'white'

  breakfast.style.backgroundColor = 'white'
  brunch.style.backgroundColor = 'white'
  coleslaw.style.backgroundColor = 'white'
 drinks.style.backgroundColor = 'white'
 breakfast.style.color = 'black'
 coleslaw.style.color = 'black'
 brunch.style.color = 'black'
drinks.style.color = 'black'
})
coleslaw.addEventListener('click',
function() {

  coleslaw.style.backgroundColor = 'orangered'
  coleslaw.style.color = 'white'
  brunch.style.backgroundColor = 'white'
  breakfast.style.backgroundColor = 'white'
  launch.style.backgroundColor = 'white'
 drinks.style.backgroundColor = 'white'
 breakfast.style.color = 'black'
 brunch.style.color = 'black'
 launch.style.color = 'black'
drinks.style.color = 'black'
})
drinks.addEventListener('click',
function() {

  drinks.style.backgroundColor = 'orangered'
  drinks.style.color = 'white'
  breakfast.style.backgroundColor = 'white'
  brunch.style.backgroundColor = 'white'
  launch.style.backgroundColor = 'white'
  coleslaw.style.backgroundColor = 'white'
  breakfast.style.color = 'black'
  coleslaw.style.color = 'black'
  launch.style.color = 'black'
 brunch.style.color = 'black'
 
})

// style


// first page menu ends 





