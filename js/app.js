//  GLOBAL VARIABLES
const costPerKm = 0.21;
const minorsDiscount = 20;
const oversDiscount = 40;
const baseDiscount = 0;
const minorsAgeLimit = 18;
const oversMinAge = 65;
let ticketPrice;
let discount;
let age = parseInt(prompt('Quanti anni hai?'));
let km = parseFloat(prompt('Quanti Km devi percorrere?'));

// data verification
if ((Number.isNaN(age)) || (Number.isNaN(km)) || age < 1 || km < 1) {
  // error alert
  alert('I dati inseriti non sono corretti');
} else {
  // calculating base price
  ticketPrice = km * costPerKm;

  if (minorsAgeLimit > age) { // calculating discount for minors
    discount = ticketPrice * minorsDiscount / 100;
  } else if (age >= oversMinAge) { // calculating discount for elders
    discount = ticketPrice * oversDiscount / 100;
  } else { // calculating base discount
    discount = ticketPrice * baseDiscount / 100;
  }

  // subtracting discount from base price
  ticketPrice -= discount;

  // rounding price to 2nd decimal
  ticketPrice = ticketPrice.toFixed(2);
  // logging the final price
  console.log(`Il prezzo del biglietto è: ${ticketPrice}€`);
}