function deleteItem(e){
  body.removeChild(e.currentTarget.parentNode.parentNode)
}

  
function getTotalPrice() {
    
  const unitPrice =  document.getElementsByClassName('unit-price')
  const quantity = document.getElementsByTagName('input')
  const totalProdPrice = document.getElementsByClassName('total-prod-price')

  let totalAmount = 0
  for (let i = 0; i < quantity.length - 2; i++) {
    totalProdPrice[i].innerText = (quantity[i].value * unitPrice[i].innerText) + '€'
    totalAmount += parseFloat(totalProdPrice[i].innerText)
  }
  totalCartPrice.querySelector('span').innerText = `${totalAmount}€`
}


function createNewItemRow(itemName, itemUnitPrice){
  let newItem = document.createElement('div')
  newItem.setAttribute('class', 'wrapper')
  newItem.innerHTML = `<span>${itemName}</span>
  <span class='unit-price'>${itemUnitPrice}</span>
  <span>
    <label for='qty'>QTY</label>
    <input type='number' class='quantity'>
  </span>
  <span class='total-prod-price'>0€</span>
  <span>
    <button class='btn-delete'>Delete</button>
  </span>`
  newItem.getElementsByClassName('btn-delete')[0].onclick = deleteItem
  return newItem
}


function createNewItem(){
  const productName = document.getElementById('product-name').value
  const productPrice = document.getElementById('product-price').value
  let newRow = createNewItemRow(productName, productPrice)
  const father = document.getElementById('body')
  const reference = document.getElementById('create-form')
  father.insertBefore(newRow, reference)
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


const totalCartPrice = document.createElement('div')
totalCartPrice.innerHTML = '<h2>Total Price: <span>0€</span></h2>'
const father = document.getElementById('body')
father.appendChild(totalCartPrice)