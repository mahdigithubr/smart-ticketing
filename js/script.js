// selectedEvent("background-change1");
// selectedEvent("background-change2");
// selectedEvent("background-change3");
// selectedEvent("background-change4");
// selectedEvent("background-change5");
// selectedEvent("background-change6");
// selectedEvent("background-change7");
// selectedEvent("background-change8");
// selectedEvent("background-change9");
// selectedEvent("background-change10");
// selectedEvent("background-change11");
// selectedEvent("background-change12");
// selectedEvent("background-change13");
// selectedEvent("background-change14");
// selectedEvent("background-change15");
// selectedEvent("background-change16");
// selectedEvent("background-change17");
// selectedEvent("background-change18");
// selectedEvent("background-change18");
// selectedEvent("background-change19");
// selectedEvent("background-change20");
// selectedEvent("background-change21");
// selectedEvent("background-change22");
// selectedEvent("background-change23");
// selectedEvent("background-change24");
// selectedEvent("background-change25");
// selectedEvent("background-change26");
// selectedEvent("background-change27");
// selectedEvent("background-change28");
// selectedEvent("background-change29");
// selectedEvent("background-change30");
// selectedEvent("background-change31");
// selectedEvent("background-change32");
// selectedEvent("background-change33");
// selectedEvent("background-change34");
// selectedEvent("background-change35");
// selectedEvent("background-change36");
// selectedEvent("background-change37");
// selectedEvent("background-change38");
// selectedEvent("background-change39");
// selectedEvent("background-change40");

let selectedTickets = [];
const ticketContainer = document.getElementById("ticketContainer");

document.querySelectorAll(".ticket").forEach((ticket) => {
  ticket.addEventListener("click", (selectedTicket) => {
    const button = selectedTicket.target;
    console.log(button);
    let matchClass = button.classList.contains("bg-primary");

    if (matchClass) {
      button.classList.remove("bg-primary", "text-white", "font-semibold");
      button.classList.add("bg-primary-background");
    } else {
      button.classList.add("bg-primary", "text-white", "font-semibold");
      button.classList.remove("bg-primary-background");
    }

    const found = selectedTickets.find(
      (item) => item.id == selectedTicket.target.id
    );

    // console.log(found);

    if (found) {
      selectedTickets = selectedTickets.filter((item) => item.id != found.id);
    } else {
      selectedTickets.push({
        id: selectedTicket.target.id,
        name: selectedTicket.target.innerText,
        price: 500,
      });
    }

    selectedTickets.map((element) => {
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const container = document.createElement("div");
      p1.innerText = element.name;
      p2.innerHTML = element.price;
      ticketContainer.appendChild(p1);
      //   const button = document.getElementById(element.id);
      //   let matchClass = button.classList.contains("bg-primary");
      //   if (matchClass) {
      //     button.classList.remove("bg-primary", "text-white", "font-semibold");
      //     button.classList.add("bg-primary-background");
      //   } else {
      //     button.classList.add("bg-primary", "text-white", "font-semibold");
      //     button.classList.remove("bg-primary-background");
      //   }
    });

    // console.log(selectedTickets);
  });
});

const elementHandler = () => {
  // Create the parent div element
  const hiddenPriceDiv = document.createElement("div");
  hiddenPriceDiv.id = "hidden-price1";
  hiddenPriceDiv.className =
    "inter-font text-text-thirdly flex justify-between";

  // Create and append the first <p> element
  const setNameP = document.createElement("p");
  setNameP.id = "set-name1";
  setNameP.textContent = "Set Name";
  hiddenPriceDiv.appendChild(setNameP);

  // Create and append the second <p> element
  const economyP = document.createElement("p");
  economyP.id = "economy-id1";
  economyP.className = "";
  economyP.textContent = "Economy";
  hiddenPriceDiv.appendChild(economyP);

  // Create and append the third <p> element with a <span>
  const amountP = document.createElement("p");
  const amountSpan = document.createElement("span");
  amountSpan.className = "tiket-amount1";
  amountSpan.textContent = "0";
  amountP.appendChild(amountSpan);
  hiddenPriceDiv.appendChild(amountP);

  // Append the entire div to the body (or any other container element)
  document.body.appendChild(hiddenPriceDiv);
};
