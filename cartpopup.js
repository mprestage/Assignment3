cartbutton = document.getElementById("add-cart");
popup = document.getElementById("cart-notification");

function hidePopup() {
    if  (popup.classList.contains('visible')) {
        popup.classList.remove('visible')
    }
}

function addToCart() {
    // if  (!cartbutton.classList.contains('used')) {
    //     cartbutton.classList.add('used')
    // }

    if  (!popup.classList.contains('visible')) {
        popup.classList.add('visible')
    }
    setTimeout(hidePopup,5000)
  }

