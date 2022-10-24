 const searchForm =document.querySelector(".search-form")
 const cartItems =document.querySelector(".cart-items-container")
 const navbar =document.querySelector(".navbar")
 const checkoutBtn =document.querySelector("#checkout-btn");

 const searchBtn=document.querySelector("#search-btn")
 const cartBtn=document.querySelector("#cart-btn")
 const menuBtn=document.querySelector("#menu-btn")
 let price=0;

 let urunler=[
     {id:1,name:'6 Mini Pizzas',price:90, img:'/images/menu-1.png',title:'PIZZA'},
     {id:2,name:'5 Mini Burgers',price:100 ,img:'/images/menu-2.png',title:'BURGER'},
     {id:3,name:'2 Mixed Pizzas',price:105,img:'/images/menu-3.png',title:'PIZZA'},
     {id:4,name:'3 Meatball Burgers',price:120,img:'/images/menu-4.png',title:'BURGER'},
 ]

 $( document ).ready(function() {
     let html=''
     urunler.forEach(value => {
         html=`<div class="box">
                <div class="box-head">
                    <img src="${value.img}" alt="menu">
                    <span class="menu-category">${value.title}</span>
                    <h3>${value.name}</h3>
                    <div class="price">$ ${value.price}</div>
                </div>
                <div class="box-bottom">
                    <button class="btn add-to-cart" onclick="addUrun((${value.id}))">add to cart</a>
                </div>
            </div>`
         $(".urunler").append(html)
     })
 });

 function addUrun(id) {
     let uruns='';
     urunler.forEach(value => {
         if (id === value.id){
             uruns=`<div id="cart-${value.id}" class="cart-item">
                <i class="fas fa-times" onclick="removeItem(${value.id},${value.price})"></i>
                <img src="${value.img}">
                <div class="content">
                    <h3>${value.name}</h3>
                    <div id="price1" class="price">$ ${value.price}</div>
                </div></div>`
             price+=value.price;
             $("#total").html(price)
             $("#CartItemsContainer").append(uruns)
         }
     })
 }

 function removeItem(id,prices) {
     $("#cart-"+id).remove();
     price-=prices
     $("#total").html(price)
 }

 function getLSContent() {
     // get contents from local storage.
     // if nothing is there, create an empty array
     const lsContent = JSON.parse(localStorage.getItem("products")) || [];
     return lsContent;
 }
 function calculateTotal(prices) {
     // calculate the total price in the cart
     return prices.reduce(function(prev, next) {
         return prev + next;
     }, 0);
 }
 function getCartItemPrices() {
     // extract the price numbers from the cart items to calculate total
     const prices = [];
     // retrieve the td element in the cart where the product price is stored
     // for each product in the cart
     let nums = cartContent.querySelectorAll(".price");

     // iterate over each td node and extract the price
     // strip the $ sign from the text, turn the string into
     // a number and push the number into the prices array
     if (nums.length > 0) {
         for (let cell = 0; cell < nums.length; cell++) {
             let num = nums[cell].innerText;
             num = num.replace(/[^\d]/g, "");
             num = parseFloat(num);
             prices.push(num);
         }
         // return the prices array
         return prices;
     } else {
         return;
     }
 }
 function displayCartTotal() {
     // display the total cost in the cart
     const prices = getCartItemPrices();
     let total = 0;
     if (prices) {
         total = calculateTotal(prices);
         totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
             2
         )}</span>`;
     } else {
         totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
     }
 }


  menuBtn.addEventListener("click",function (){
      navbar.classList.toggle("active");
      document.addEventListener("click",function (f){
          if(!f.composedPath().includes(menuBtn)&&(!f.composedPath().includes(navbar)) ){
              navbar.classList.remove("active");

          }
      });
  } );




    searchBtn.addEventListener("click",function (){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function (x){
        if(!x.composedPath().includes(searchBtn)&&(!x.composedPath().includes(searchForm)) ){
            searchForm.classList.remove("active");

         }
    });
} );
  cartBtn.addEventListener("click",function (){
      cartItems.classList.toggle("active");
      document.addEventListener("click",function (z){
          if(!z.composedPath().includes(cartBtn)&&(!z.composedPath().includes(cartItems)) ){
              cartItems.classList.remove("active");
          }
      });
  } );

