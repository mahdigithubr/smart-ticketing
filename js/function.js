// let ticket set count for variable
let count = 0;

function selectedEvent(elementId) {
  document.getElementById(elementId).addEventListener("click", function () {
    // for warning massage
    let massagePlace = document.getElementById("warning-massage");
    massagePlace.classList.add("hidden");

    let backgroundChangeId = document.getElementById(elementId);
    let classArray = toArray(backgroundChangeId.classList);

    let matchClass = classArray.includes("bg-primary");
    if (matchClass) {
      console.log("double click here");
      return changeBackgroundAndOther(backgroundChangeId);
    }
    // condition for 4 ticket
    if (count >= 4) {
      return warningMassage();
    }
    count++;
    // call function for change background
    backgroundChange(backgroundChangeId);
    // set ticket Number function
    setTicketNumber("ticket-number");

    setSeatNamePrice(count, backgroundChangeId);
  });
}

// set ticket number for
function setTicketNumber(elementId) {
  document.getElementById(elementId).innerText = count;
}

// background Change function
function backgroundChange(backgroundChangeId) {
  backgroundChangeId.classList.add("bg-primary", "text-white", "font-semibold");
  backgroundChangeId.classList.remove("bg-primary-background");
}

// warning massage showing
function warningMassage() {
  let massagePlace = document.getElementById("warning-massage");
  console.log("hello warning massage");
  massagePlace.innerText = "You cannot buy its tickets";
  massagePlace.classList.remove("hidden");
}

// function convert a classList to array
function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}

// function for -- and change background
function changeBackgroundAndOther(elementId) {
  removeSeatNamePrice(elementId);
  count--;
  elementId.classList.remove("bg-primary", "text-white", "font-semibold");
  elementId.classList.add("bg-primary-background");
  setTicketNumber("ticket-number");
}

// set Seat name and price per seat function
function setSeatNamePrice(setNumber, seatName) {
  if (count > 2) {
    console.log(count);
    document.getElementById("hidden-price" + count).classList.remove("hidden");
  }
  let seatNumber = setNumber;
  let setName = "set-name" + seatNumber;
  document.getElementById(setName).innerText = seatName.innerText;
}

// remove setName and price function
function removeSeatNamePrice(elementId) {
  let seatName = "set-name" + valueToArray(elementId);
  document.getElementById(seatName).innerText = "Set Name";
}

// all value to array
function valueToArray(seatName) {
  let valueArray = [];
  valueArray[0] = document.getElementById("set-name1").innerText;

  valueArray[1] = document.getElementById("set-name2").innerText;

  valueArray[2] = document.getElementById("set-name3").innerText;

  valueArray[3] = document.getElementById("set-name4").innerText;

  let clickedBtn = seatName.innerText;

  let arrayIncludes = valueArray.includes(clickedBtn);

  if (arrayIncludes) {
    let index = valueArray.indexOf(clickedBtn);
    return index + 1;
  } else {
    console.log("hi this is mahdi");
  }
}
