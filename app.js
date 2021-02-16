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
  
  
  let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
     
    },
    render: function () {
  
        let storeTotal = 0;

        this.simulateCookieSales();
      
        let ulElem = document.getElementById(this.id);
      
        for (let i = 0; i < timeSlots.length; i++) {
      
          let certainCookie=this.calcCookiesEachHour();
          storeTotal+= certainCookie
      
          let liElem = document.createElement('li');
      
          liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';
      
          ulElem.appendChild(liElem);
        }
      
          let totalElem = document.createElement('li');
          totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
          ulElem.appendChild(totalElem);
        },
      };
  
seattle.render();



// TOKYO
function randomInRange(min, max) {
  
    let range = max - min;
  
   
    return Math.floor(Math.random() * (range + 1)) + min;
  }
  
  
  let tokyo = {
    id: 'tokyo',
    location: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
     
    },
    render: function () {
  
        let storeTotal = 0;

        this.simulateCookieSales();
      
        let ulElem = document.getElementById(this.id);
      
        for (let i = 0; i < timeSlots.length; i++) {
      
          let certainCookie=this.calcCookiesEachHour();
          storeTotal+= certainCookie
      
          let liElem = document.createElement('li');
      
          liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';
      
          ulElem.appendChild(liElem);
        }
      
          let totalElem = document.createElement('li');
          totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
          ulElem.appendChild(totalElem);
        },
      };
  
  tokyo.render();

  function randomInRange(min, max) {

    let range = max - min;
  
  
    return Math.floor(Math.random() * (range + 1)) + min;
  }
  
  // DUBAI
  let dubai = {
    id: 'dubai',
    location: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
     
    },
    render: function () {
  
        let storeTotal = 0;

        this.simulateCookieSales();
      
        let ulElem = document.getElementById(this.id);
      
        for (let i = 0; i < timeSlots.length; i++) {
      
          let certainCookie=this.calcCookiesEachHour();
          storeTotal+= certainCookie
      
          let liElem = document.createElement('li');
      
          liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';
      
          ulElem.appendChild(liElem);
        }
      
          let totalElem = document.createElement('li');
          totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
          ulElem.appendChild(totalElem);
        },
      };
  
  
  dubai.render();

  // PARIS
  let paris = {
    id: 'paris',
    location: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
     
    },
    render: function () {
        let storeTotal = 0;

        this.simulateCookieSales();
      
        let ulElem = document.getElementById(this.id);
      
        for (let i = 0; i < timeSlots.length; i++) {
      
          let certainCookie=this.calcCookiesEachHour();
          storeTotal+= certainCookie
      
          let liElem = document.createElement('li');
      
          liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';
      
          ulElem.appendChild(liElem);
        }
      
          let totalElem = document.createElement('li');
          totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
          ulElem.appendChild(totalElem);
        },
      };
  
  
  paris.render();

  // LIMA
  let lima = {
    id: 'lima',
    location: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
     
    },
    render: function () {

        let storeTotal = 0;

  this.simulateCookieSales();

  let ulElem = document.getElementById(this.id);

  for (let i = 0; i < timeSlots.length; i++) {

    let certainCookie=this.calcCookiesEachHour();
    storeTotal+= certainCookie

    let liElem = document.createElement('li');

    liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';

    ulElem.appendChild(liElem);
  }

    let totalElem = document.createElement('li');
    totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
    ulElem.appendChild(totalElem);
  },
};
  
  lima.render();

  


