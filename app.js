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
    'Daily Location Totals'
  ];
  
// Random Number Generator
function randomInRange(min, max) {
    let range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
  }

  function CookieStand(id, location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale){
  this.id = id;
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSales = [];
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
      // console.log(Math.ceil(customersPerHour));
      return customersPerHour;
    }
    for (let i = 0; i < allStands.length; i++) {
      allStands[i].generateCustomersPerHour();
      
    };
    // CALCUATE COOKIES EACH HOUR
  CookieStand.prototype.calcCookiesEachHour = function() {
    let customersPerHour = this.generateCustomersPerHour();
    let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
    // console.log(Math.ceil(cookiesEachHour));
      return Math.ceil(cookiesEachHour);
  
  };

    // COOKIE SALES
  CookieStand.prototype.simulateCookieSales = function() {
    for (let i = 0; i < timeSlots.length - 1; i++) {
      let certainCookie = this.calcCookiesEachHour();
      this.cookieSales.push(certainCookie);
      this.storeTotal += certainCookie;
    }
   this.cookieSales.push(this.storeTotal);
    
  };

  CookieStand.prototype.render = function(){
      const salesRow = document.createElement('tr'); 
      const tableElem = document.getElementById('table')
      tableElem.appendChild(salesRow);
      const tableCell = document.createElement('td');
      salesRow.appendChild(tableCell);
      tableCell.textContent = this.location;
      for (let i = 0; i < this.cookieSales.length; i++) {
        const cookiesElem = document.createElement('td');
        cookiesElem.textContent = this.cookieSales[i];
        salesRow.appendChild(cookiesElem);
      }
  }
  
function renderHeaderRow(){
  const tableElem = document.getElementById('table');
  const rowOne = document.createElement('tr');
  tableElem.appendChild(rowOne);
  const emptyTh = document.createElement('th');
  rowOne.appendChild(emptyTh);
  for (let i = 0; i < timeSlots.length; i++) {
    const timeHeaderElem = document.createElement('th');
    timeHeaderElem.textContent = timeSlots[i];
    rowOne.appendChild(timeHeaderElem);
    timeHeaderElem.setAttribute('scope', 'col');

  }
}
renderHeaderRow();

for (let i = 0; i < allStands.length; i++) {
  allStands[i].calcCookiesEachHour();
  allStands[i].simulateCookieSales();
  allStands[i].render();
  
}

function displayFooter(){
  
  const tableElem = document.getElementById('table');
  const tableRowElem = document.createElement('tr');
  tableElem.appendChild(tableRowElem);

  const totalHeaderElem = document.createElement('th');
  totalHeaderElem.setAttribute('scope', 'row');
  totalHeaderElem.textContent = 'Totals';
  tableRowElem.append(totalHeaderElem);

  for (let i = 0; i < timeSlots.length; i++) {
    let cookieTotalHour = 0;
    for(let j = 0; j < allStands.length; j++){
      cookieTotalHour += allStands[j].cookieSales[i]
    }
    const cookieTd = document.createElement('td');
    cookieTd.textContent = cookieTotalHour;
    tableRowElem.appendChild(cookieTd);
    
  }
}
displayFooter();

let myForm = document.getElementById('new-store-form')
myForm.addEventListener("submit", submitHandler)

function submitHandler(event) {
  event.preventDefault();

  let id = event.target.storeName.value;
  let minCustomersPerHour = event.target.minCustomers.value;
  let maxCustomersPerHour = event.target.maxCustomers.value;
  let avgCookiesPerSale = event.target.avgCookieSales.value;
  let name = id + 'Stand'
  let newStand = new CookieStand (id, name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale);
  allStands.push(newStand);
  const tableElem = document.getElementById('table');
  tableElem.innerHTML = "";
  renderHeaderRow();
  newStand.calcCookiesEachHour();
  newStand.simulateCookieSales();


  for (let i = 0; i < allStands.length; i++) {
    allStands[i].render();
  }

  displayFooter();
}