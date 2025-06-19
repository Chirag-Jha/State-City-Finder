let stateCityData = {};
let cityData ={};
fetch('cities.json')
  .then(response => response.json())  
  .then(data => {
    stateCityData = data;  
    populateStates();
    displayAllCities()
  });

function populateStates() {
  const stateSelector = document.getElementById("stateSelector");
  const stateNames = Object.keys(stateCityData).sort();

  stateSelector.innerHTML = `
    <option value="">Select State</option>
    ${stateNames.map(state => `<option value="${state}">${state}</option>`).join('')}
  `;
}

function displayAllCities() {
  const allCities = Object.values(stateCityData).flat(); // flatten all city arrays
  allCities.sort(); 
  const citySelector = document.getElementById("citySelector");
  
  citySelector.innerHTML = `
  <option value="">Select City</option>
      ${allCities.map(city => `<option value="${city}">${city}</option>`).join('')}
  `;
  
  console.log(Object.values(city));
}

document.getElementById("stateSelector").addEventListener("change", function() {
  const selectedState = this.value;
  const cities = stateCityData[selectedState];
  const cityNameDiv = document.getElementById("cityName");

if (!selectedState) {
  cityNameDiv.innerHTML = ""; // clear if "Select State" is chosen
} else if (cities && cities.length > 0) {
  cityNameDiv.innerHTML =`<ul>${cities.map(city => `<li>${city}</li>`).join('')}</ul>` ;
   }; });

document.getElementById("citySelector").addEventListener("change", function() {
  const selectedCity = this.value;
  const cityNameDiv = document.getElementById("cityList");

  if (!selectedCity) {
    cityNameDiv.innerHTML = ""; 
  } else {
    let foundState = null;
    for (const [state, cities] of Object.entries(stateCityData)) {
      if (cities.includes(selectedCity)) {
        foundState = state;
        break;
      }
    }

    cityNameDiv.innerHTML = `<b>${selectedCity} is in ${foundState}.`;

  }
});

/// CSS Stuffs 
function loadFallbackCSS() {
  const fallback = `
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
      background-color:rgb(215, 33, 33);
      color: #333;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    select {
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom: 1rem;
      width: 100%;
      max-width: 400px;
    }

    div {
      margin-top: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      padding: 0.25rem 0;
      border-bottom: 1px solid #ddd;
    }
  `;

  document.getElementById('fallback-styles').textContent = fallback;
}

