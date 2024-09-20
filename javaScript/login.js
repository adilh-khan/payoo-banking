document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Login Button Click");
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("You are logged in");
      window.location.href = "home.html";
    } else {
      alert("Wrong Phone Number Or PIN");
    }
  });
