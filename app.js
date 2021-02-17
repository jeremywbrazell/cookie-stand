'use strict'

let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ];
  
// Seattle
function randomInRange(min, max) {
    let range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
  }

  function CookieStand(id, location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale, cookieSales = []){
  this.id = id;
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSales = cookieSales;
  this.storeTotal = 0;
  }

  let standSeattle = new CookieStand('seattle', 'Seattle', 23, 65, 6.3);
  let standTokyo = new CookieStand('tokyo', 'Tokyo', 3, 24, 1.2);
  let standDubai = new CookieStand('dubai', 'Dubai', 11, 38, 3.7);
  let standParis = new CookieStand('paris', 'Paris', 20, 38, 2.3);
  let standLima = new CookieStand('lima', 'Lima', 2, 16, 4.6);
  let allStands = [standSeattle, standTokyo, standDubai, standParis, standLima];

    // GENERATE CUSTOMERS PER HOUR
  CookieStand.prototype.generateCustomersPerHour = function() {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      // console.log(customersPerHour);
      return customersPerHour;
    }
    for (let i = 0; i < allStands.length; i++) {
      allStands[i].generateCustomersPerHour();
      
    }
    // CALCUATE COOKIES EACH HOUR
  CookieStand.prototype.calCookiesEachHour = function() {
    let customersPerHour = this.generateCustomersPerHour();
    let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      return Math.ceil(cookiesEachHour);
      // return cookiesEachHour;
  }

    // COOKIE SALES
  CookieStand.prototype.dailyCookieSales = function() {
    for (let i = 0; i < timeSlots.length; i++) {
      let certainCookie=this.calCookiesEachHour();
      this.cookieSales.push(certainCookie)
      this.storeTotal+= certainCookie
      
    }
   this.cookieSales.push(this.storeTotal);
    
  }
  
CookieStand.prototype.render = function(){
let ulElem = document.getElementById(this.id);
for (let i = 0; i < timeSlots.length; i++) {
  let liElem = document.createElement('li') 
    liElem.textContent = timeSlots[i] + ' : ' + this.cookieSales[i] + ' cookies';
    ulElem.appendChild(liElem);
  }
let liElem = document.createElement('li');
liElem.textContent = 'Total' + ' : ' + this.storeTotal + ' cookies';
ulElem.appendChild(liElem);
console.log(this.avgCookiesPerSale);
}

for (let i = 0; i < allStands.length; i++) {
  allStands[i].calCookiesEachHour();
  allStands[i].dailyCookieSales();
  allStands[i].render();
  
}

let tableElem = document.getElementById('table');
const row1 = document.createElement('th');
for (let i = 0; i < timeSlots.length; i++) { 
  tableElem.appendChild(row1);
  const timeElem = document.createElement('th');
  timeElem.textContent = timeSlots[i];
  row1.appendChild(timeElem);


}

const row2 = document.createElement('tr');
for (let i = 0; i < location.length; i++) { 
  tableElem.appendChild(row2);
  const locationElem = document.createElement('tr');
  locationElem.textContent = timeSlots[i];
  row2.appendChild(locationElem);
}


// const row2 = document.createElement('tr');
// tableElem.appendChild(row2);
// const sixDataElem = document.createElement('td');
// row2.appendChild(sixDataElem);
// sixDataElem.textContent = this.location;

// CookieStand.prototype.render = function() {

//   const article = document.createElement('article');

//   const profileContainer = document.getElementById('seattle');

//   profileContainer.appendChild(article);

// const locationElem = document.createElement('h2');

// article.appendChild(locationElem);

// locationElem.textContent = this.location;


// const tableElem = document.createElement('table');
// profileContainer.appendChild(tableElem);

// const row1 = document.createElement('tr');
//   const row2 = document.createElement('tr');

//   tableElem.appendChild(row1);
//   tableElem.appendChild(row2);

  // const timeSlotsElem = document.createElement('th');
  // row1.appendChild(timeSlotsElem);
  // timeSlotsElem.textContent = 'Time Slots';

  // const timeSlotsElem = document.createElement('th');
  // row1.appendChild(timeSlotsElem);
  // goodWithDogsHeaderElem.textContent = 'Good with Dogs';

  // const goodWithCatsHeaderElem = document.createElement('th');
  // row1.appendChild(goodWithCatsHeaderElem);
  // goodWithCatsHeaderElem.textContent = 'Good with Other Cats';


  // const timeSlotsElem = document.createElement('td');
  // row2.appendChild(timeSlotsElem);
  // timeSlotsElem.textContent = this.timeSlots;


  // const goodWithDogsDataElem = document.createElement('td');
  // row2.appendChild(goodWithDogsDataElem);
  // goodWithDogsDataElem.textContent = this.goodWithDogs;


  // const goodWithCatsDataElem = document.createElement('td');
  // row2.appendChild(goodWithCatsDataElem);
  // goodWithCatsDataElem.textContent = this.goodWithOtherCats;
// }
