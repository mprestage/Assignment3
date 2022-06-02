productcard = document.getElementById("targetcard");

closeicon = document.getElementsByClassName("close-product");

function expandProduct() {
    if  (!productcard.classList.contains('expand')) {
        productcard.classList.add('expand')
    }
  }

  function collapseProduct(event) {
    event.stopPropagation();
    if  (productcard.classList.contains('expand')) {
        productcard.classList.remove('expand')
    }

  }