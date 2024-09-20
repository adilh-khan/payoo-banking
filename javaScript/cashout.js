document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");
    if (isNaN(cashOut)) {
      alert("Failed To Cash Out");
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueByID("account-balance");
      if (cashOut > balance) {
        alert("Failed To Cash Out");
        return;
      }
      const newBalance = balance - cashOut;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
      // Add to Transaction History
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
                        <h4 class ="text-2xl font-bold">Cash Out</h4>
                        <p>${cashOut} withdraw New Balance ${newBalance}</p>
                      `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Invalid Input, Error!");
    }
  });
