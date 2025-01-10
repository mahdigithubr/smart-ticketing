let selectedTickets = [];
const ticketContainer = document.getElementById("ticketContainer");
const ticketNumber = document.getElementById("ticket-number");
const discountField = document.getElementById("coupon-field");
const applyBtn = document.getElementById("apply-discount");
const nextBtn = document.getElementById("next-btn");
const passengerNumber = document.getElementById("passenger-number");
document.querySelectorAll(".ticket").forEach((ticket) => {
  ticket.addEventListener("click", (selectedTicket) => {
    const button = selectedTicket.target;
    applyBtn.classList.add("bg-text-secondary", true);
    disabledRemove(button);

    // Check if the ticket count exceeds 4 and  open coupon option
    if (
      !button.classList.contains("bg-primary") &&
      selectedTickets.length > 3
    ) {
      alert("You can select maximum 4 tickets.");
      return;
    } else if (
      !button.classList.contains("bg-primary") &&
      selectedTickets.length == 3
    ) {
      discountField.removeAttribute("disabled");
    } else {
      discountField.value = "";
      discountField.setAttribute("disabled", true);
    }
    if (
      !button.classList.contains("bg-primary") &&
      selectedTickets.length >= 0
    ) {
    }

    if (button.classList.contains("bg-primary")) {
      // Toggle CSS classes
      button.classList.remove("bg-primary", "text-white", "font-semibold");
      button.classList.add("bg-primary-background");
    } else {
      button.classList.add("bg-primary", "text-white", "font-semibold");
      button.classList.remove("bg-primary-background");
    }

    discountInputField();

    // Toggle ticket in selectedTickets array

    const found = selectedTickets.find((item) => item.id === button.id);

    if (found) {
      selectedTickets = selectedTickets.filter((item) => item.id !== button.id);
      // ticket number upgrade set ticket number
    } else {
      selectedTickets.push({
        id: button.id,
        name: button.innerText,
        price: 550,
      });
      // ticket number upgrade set ticket number
    }
    ticketNumber.innerText = selectedTickets.length;
    // Clear existing ticket elements first
    ticketContainer.innerHTML = "";
    let totalPrice = 0;

    selectedTickets.forEach((ticket) => {
      totalPrice += ticket.price;

      // Create the parent div element
      const hiddenPriceDiv = document.createElement("div");
      hiddenPriceDiv.id = `ticket${ticket.id}`;

      hiddenPriceDiv.className =
        "inter-font text-text-thirdly flex justify-between";

      // Create and append the first <p> element
      const name = document.createElement("p");
      name.textContent = ticket.name;
      hiddenPriceDiv.appendChild(name);

      // Create and append the second <p> element
      const economy = document.createElement("p");
      economy.textContent = "Economy";
      hiddenPriceDiv.appendChild(economy);

      // Create and append the third <p> element with a <span>
      const amount = document.createElement("p");
      amount.textContent = `${ticket.price}`;
      hiddenPriceDiv.appendChild(amount);

      // Append to the ticket container
      ticketContainer.appendChild(hiddenPriceDiv);
    });

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total").innerText = `BDT ${totalPrice}`;
  });
});
