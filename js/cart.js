/* global Cart */
"use strict";
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = null;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  //let tableBody = document.querySelector('#cart tbody');
  let tableBody = document.getElementsByTagName("tbody")[0];

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tableRow = document.createElement("tr");
    let tableDeleteLink = document.createElement("td");
    let tableQuantity = document.createElement("td");
    let tableItem = document.createElement("td");

    tableItem.innerText = cart.items[i].product;
    tableQuantity.innerText = cart.items[i].quantity;
    tableDeleteLink.innerText = "X";
    tableDeleteLink.id = i;

    tableRow.appendChild(tableDeleteLink);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tableItem);
    
    tableBody.appendChild(tableRow);
  }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  event.preventDefault();
  cart.removeItem(event.target.id);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.saveToLocalStorage();
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
