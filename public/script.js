// an array with all of our cart items
var cart = [];


var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var total = 0;
  //add each cart price to the total variable
  for (var i = 0; i < cart.length; i++) {
  $('.cart-list').append(
    "<div class='item-list'>" +cart[i].name+' , '+cart[i].price+'$' + "</div>"
  )
  total = cart[i].price + total
  }
  //append the total to HTML
  $('.total').html(total); // = $('.total').empty(); + $('.total').append(total);
}

var addItem = function (item) {
   // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
  updateCart();
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
    $( ".shopping-cart" ).toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var itemPrice = $(this).closest('.card').data('price') 
  var itemName = $(this).closest('.card').data('name'); 
  var item ={
    price : itemPrice,
    name : itemName
  }
  addItem(item);
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
// updateCart();
