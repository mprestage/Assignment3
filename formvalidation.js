function validateForm() {
    let input = document.forms["payment-form"]["card-name"].value;
    if (input == "") {
      alert("Please enter Name");
      return false;
    }
  }