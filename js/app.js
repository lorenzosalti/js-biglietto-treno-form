//  VARIABLES
// constant oparators
const costPerKm = 0.21;
const minorsDiscount = 20;
const oversDiscount = 40;
const baseDiscount = 0;
const minorsAgeLimit = 18;
const oversMinAge = 65;
// variable oparators
let fullPrice;
let discount;
let finalPrice;
// user inputs
const kmElement = document.getElementById('km-input');
const ageElement = document.getElementById('age-input');
const submitElement = document.getElementById('data-submit');
const formElement = document.getElementById('ticket-form');


// form event
formElement.addEventListener('submit', function (event) {

  event.preventDefault();

  console.log('I dati sono stati inviati');

  const userKm = parseInt(kmElement.value);
  console.log(`Km: ${userKm}`);
  const userAge = parseInt(ageElement.value);
  console.log(`Età: ${userAge}`);

  if (!verifyData(userKm, userAge)) {
    fullPrice = userKm * costPerKm;
    discount = calcDiscount(userAge, fullPrice);
    finalPrice = calcTicketPrice(userKm, discount);
    console.log(`Il prezzo del biglietto è: ${finalPrice}€`);
  } else {
    console.log('I dati inseriti non sono validi');
  }

})




// console.log(kmElement);
// console.log(ageElement);
// console.log(submitElement);
// console.log(formElement);


// FUNCTIONS

function verifyData(num1, num2) {
  const notValid = ((Number.isNaN(num1)) || (Number.isNaN(num2)) || num1 < 1 || num2 < 1);
  return notValid;
}

function calcDiscount(age, basePrice) {
  let discount;
  if (minorsAgeLimit > age) { // calculating discount for minors
    discount = basePrice * minorsDiscount / 100;
  } else if (age >= oversMinAge) { // calculating discount for elders
    discount = basePrice * oversDiscount / 100;
  } else { // calculating base discount
    discount = basePrice * baseDiscount / 100;
  }
  return discount;
}

function calcTicketPrice(km, discount) {
  let price;
  price = km * costPerKm;
  price -= discount;
  price = price.toFixed(2);
  return price;
}