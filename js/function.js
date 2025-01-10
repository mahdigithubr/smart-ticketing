function discountInputField() {
  discountField.addEventListener("keyup", function (event) {
    let inputFieldValue = event.target.value;
    if (inputFieldValue === "Couple 20") {
      applyBtn.removeAttribute("disabled");
      applyBtn.classList.remove("bg-text-secondary");
      // button click to change grand total
      applyBtn.addEventListener("click", function (event) {
        setTotalWithout(20, event);
      });
    } else if (inputFieldValue === "NEW15") {
      applyBtn.removeAttribute("disabled");
      applyBtn.classList.remove("bg-text-secondary");
      // button click to change grand total
      applyBtn.addEventListener("click", function () {
        setTotalWithout(15);
      });
    } else {
      applyBtn.classList.add("bg-text-secondary", true);
      applyBtn.setAttribute("disabled", true);
    }
  });
}

function setTotalWithout(discount, event) {
  let grandTotal = document.getElementById("grand-total");
  let totalPriceAmount = document.getElementById("total-price").innerText;
  let priceWithDiscount = (totalPriceAmount * discount) / 100;
  let finalPrice = totalPriceAmount - priceWithDiscount;
  grandTotal.innerText = finalPrice;
  applyBtn.classList.add("bg-text-secondary", true);
  applyBtn.setAttribute("disabled", true);
  discountField.value = "";
}

document
  .getElementById("passenger-number")
  .addEventListener("keyup", function (event) {
    if (
      event.target.value.length == 11 &&
      document.getElementById("total-price").innerText >= 550 &&
      selectedTickets.length >= 0
    ) {
      console.log(selectedTickets.length);
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", true);
      console.log(selectedTickets.length);
    }
  });

function disabledRemove(button) {
  let passengerName = document.getElementById("passenger-name");
  let passengerEmail = document.getElementById("passenger-email");
  if (selectedTickets.length >= 0 && !button.classList.contains("bg-primary")) {
    passengerEmail.removeAttribute("disabled");
    passengerName.removeAttribute("disabled");
    passengerNumber.removeAttribute("disabled");
    console.log(selectedTickets.length);
  } else {
    passengerEmail.setAttribute("disabled", true);
    passengerName.setAttribute("disabled", true);
    passengerNumber.setAttribute("disabled", true);

    passengerNumber.value = "";
    nextBtn.setAttribute("disabled", true);
  }
}

function nextBtnEvent() {
  document.getElementById("next-btn").addEventListener("click", function () {
    document.getElementById("success-ticket").classList.remove("hidden");
    document.getElementById("ticket-management").classList.add("hidden");
    console.log(document.getElementById("ticket-management").classList);
  });
}

nextBtnEvent();
