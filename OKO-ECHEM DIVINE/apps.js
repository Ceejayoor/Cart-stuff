const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const totalsEl = document.querySelector(".totalSection");

products.forEach(afunc);
function afunc(product){
  leftEl.innerHTML += `<div class="image1Container">
  <div class="image1">
    <img src=${product.imgSrc} alt="">
  </div>
  <h1>${product.dish}</h1>
  <h2>${product.cost}</h2>
  <button onclick="myfunction(${product.id})">Add</button>
</div> `
}

let cart = [];
function myfunction(id){
const thecondition = cart.some(cfunc);
function cfunc(item){
  return item.id===id;
}

if(thecondition){
  // window.alert("product already in cart!");
  changeNumberOfUnits("plus", id)
}
 else{
    const found = products.find(bfunc);
  function bfunc(product){
  return product.id === id;
}
console.log(found);
cart.push({...found, noOfUnits: 1,});
console.log(cart);

rightEl.innerHTML = "";
cart.forEach(dfunc);
function dfunc(item){
  rightEl.innerHTML += `<div class="image1Container">
          <div class="image1">
            <img src="${item.imgSrc}" alt="">
          </div>
        <h1>${item.dish}</h1>
        <h2>${item.cost}</h2>
        </div>
        <div>
          <button onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
          <label id= "${item.id}">${item.noOfUnits}</label>
          <button onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
        </div>`
}
 }
}

function changeNumberOfUnits(action, id){
  const mapping = cart.map(dfunc);
  function dfunc(item){

    if(action==='minus' && item.id===id && item.noOfUnits >1){
    item.noOfUnits -=1;
      document.getElementById(`${item.id}`).innerHTML = item.noOfUnits;
    }
    else if(action==='plus' && item.id===id && item.noOfUnits <6){
        item.noOfUnits +=1;
        document.getElementById(`${item.id}`).innerHTML = item.noOfUnits;
        
  }
}
}

// function renderTotals(){
//   let totalPrice = 0; let totalQuantity = 0;
//   cart.forEach(efunc);
//   function efunc(item){
//   totalPrice += item.cost * item.noOfUnits;
//   totalQuantity += item.noOfUnits; 
// }

//  totalsEl.innerHTML = 
//   `<div>Grande Total #${totalPrice}</div>
//   <div>(Grande Quantity ${totalQuantity} items)</div>`
// }


const calculatePrice = products.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.cost
}, 0)

const totalPrice = calculatePrice;
totalsEl.innerHTML = totalPrice;
console.log(calculatePrice);



const calculateQty = products.reduce((total, item) => {
     return total + item.qty
}, 0)

const totalQty = calculateQty;
console.log(totalQty);
