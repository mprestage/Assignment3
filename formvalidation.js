

  function validateAddress() {
    const ddForm = document.getElementsByClassName('delivery-details')[0];
  
    if (ddForm?.checkValidity()) {
      window.location.href = "/checkout2.html";
    } else {
      ddForm?.reportValidity();
    }
  }

  function validatePayment() {
    const pForm = document.getElementsByClassName('payment-form')[0];
    if (pForm?.checkValidity()) {
      window.location.href = "/confirmation.html";
    } else {
      pForm?.reportValidity();
    }
  }