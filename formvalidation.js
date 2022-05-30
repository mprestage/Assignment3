

  function validateAddress() {
    const ddForm = document.getElementsByClassName('delivery-details')[0];
  
    if (ddForm?.checkValidity()) {
      window.location.href = "/checkout2.html";
    } else {
      ddForm?.reportValidity();
    }
  }

  function validatePayment() {
    const ddForm = document.getElementsByClassName('payment-form')[0];
    if (ddForm?.checkValidity()) {
      window.location.href = "/confirmation.html";
    } else {
      ddForm?.reportValidity();
    }
  }