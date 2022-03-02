// search button and find images
const dataLoad = () => {
  // clear previous data
  document.getElementById("data-load-field").innerHTML = "";
  document.getElementById("details-field").innerHTML = "";
  // get input field
  const input = document.getElementById("input");
  // get api
  fetch(`https://openapi.programming-hero.com/api/phones?search=${input.value}`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

// displayData
const displayData = (items) => {
  // Warning if not match input with data
  const typeOfsearch = items[0];
  if (typeOfsearch == undefined) {
    document.getElementById("details-field").innerHTML = `
    <div class="text-center alert alert-warning alert-dismissible fade show" role="alert">
    Sorry! no phone was found with <strong>${input.value || "no"}</strong> name.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
  }
  //Clear input value
  input.value = "";
  // get div with id for loading data in this div
  const dataLoadField = document.getElementById("data-load-field");
  //Loop data
  const item20 = items.slice(0, 20);
  item20.forEach((item) => {
    // const a = item.slice(0, 20);

    //creat new div
    const div = document.createElement("div");
    div.className = "col";
    // div inner html set
    div.innerHTML = `
      <div class="card h-100 card-width">
        <img src="${item.image}" class="card-img-top mx-auto" alt="${item.slug}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.phone_name}</h5>
          <h6 class="card-title">Brand: ${item.brand}</h6>
        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-outline-primary mx-auto" type="button" onclick="getDetails('${item.slug}')">See Details</button>
        </div>
      </div>
    `;
    dataLoadField.appendChild(div);
  });
};

// Details field
const getDetails = (id) => {
  // clear previous data
  document.getElementById("details-field").innerHTML = "";

  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};

// display details
const displayDetails = (info) => {
  window.scrollTo(0, 0);
  console.log(info);
  let sensors = [];
  info.mainFeatures.sensors.forEach((sensor) => {
    sensors.push(" " + sensor);
  });
  console.log(sensors);
  const detailsField = document.getElementById("details-field");
  const div = document.createElement("div");
  div.className = "";
  // div inner html set
  div.innerHTML = `
    <div class="maxw mx-auto">
      <img src="${info.image}" alt="" class="w-100">
    </div>
    <div class="card-body text-center">
      <h2 class="card-title text-success">${info.name}</h2>
    </div>
    
    <table class="table table-bordered table-hover">
    <tbody>
        <tr>
            <th class="col-4">First Release</th>
            <td>${info.releaseDate || "Sorry, Release date not found!"}</td>
        </tr>
        <tr>
            <th class="col-4">Brand</th>
            <td>${info.brand || "Sorry, Release date not found!"}</td>
        </tr>
        <tr>
            <th class="col-4">Storage</th>
            <td>${info.storage || "Sorry, Storage information not found!"}</td>
        </tr>
        <tr>
            <th class="col-4">Chipset</th>
            <td>${
              info.mainFeatures.chipSet ||
              "Sorry, chipset information not found!"
            }</td>
        </tr>
        <tr>
            <th class="col-4">Memory</th>
            <td>${
              info.mainFeatures.memory || "Sorry, memory information not found!"
            }</td>
        </tr>
        <tr>
            <th class="col-4">Display Size</th>
            <td>${
              info.mainFeatures.displaySize ||
              "Sorry, display Size information not found!"
            }</td>
        </tr>
        <tr class="overflow-auto">
            <th class="col-4">Sensors</th>
            <td id='sens'>${
              sensors || "Sorry, sensors information not found!"
            }</td>
        </tr>
        
        <tr>
            <th colspan="2" class="col-4" class="text-center text-info">Others</th>
        </tr>
        <tr>
            <th class="col-4">WLAN</th>
            <td>${
              info?.others?.WLAN || "Sorry, WLAN information not found!"
            }</td>
        </tr>
        <tr>
            <th class="col-4">Bluetooth</th>
            <td>${
              info?.others?.Bluetooth ||
              "Sorry, Bluetooth information not found!"
            }</td>
        </tr>
        <tr>
            <th class="col-4">GPS</th>
            <td>${info?.others?.GPS || "Sorry, GPS information not found!"}</td>
        </tr>
        <tr>
            <th class="col-4">NFC</th>
            <td>${info?.others?.NFC || "Sorry, NFC information not found!"}</td>
        </tr>
        <tr>
            <th class="col-4">Radio</th>
            <td>${
              info?.others?.Radio || "Sorry, Radio information not found!"
            }</td>
        </tr>
        <tr>
            <th class="col-4">USB</th>
            <td>${info?.others?.USB || "Sorry, USB information not found!"}</td>
        </tr>
    </tbody>
</table>
  `;
  detailsField.appendChild(div);
};

/*

 <div class="card border-0">
      <img src="${info.image}" class="mx-auto" width="300">
      <div class="card-body text-center">
          <h2 class="card-title text-center text-success">${info.name}</h2>
      </div>
      <table class="table table-bordered table-hover">
          <tbody>
              <tr>
                  <th class="col-4">First Release</th>
                  <td>${
                    info.releaseDate || "Sorry, Release date not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Brand</th>
                  <td>${info.brand || "Sorry, Release date not found!"}</td>
              </tr>
              <tr>
                  <th class="col-4">Storage</th>
                  <td>${
                    info.storage || "Sorry, Storage information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Chipset</th>
                  <td>${
                    info.mainFeatures.chipSet ||
                    "Sorry, chipset information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Memory</th>
                  <td>${
                    info.mainFeatures.memory ||
                    "Sorry, memory information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Display Size</th>
                  <td>${
                    info.mainFeatures.displaySize ||
                    "Sorry, display Size information not found!"
                  }</td>
              </tr>
              <tr class="overflow-auto">
                  <th class="col-4">Sensors</th>
                  <td id='sens'>${
                    info.mainFeatures.sensors ||
                    "Sorry, sensors information not found!"
                  }</td>
              </tr>
              
              <tr>
                  <th colspan="2" class="col-4" class="text-center text-info">Others</th>
              </tr>
              <tr>
                  <th class="col-4">WLAN</th>
                  <td>${
                    info?.others?.WLAN || "Sorry, WLAN information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Bluetooth</th>
                  <td>${
                    info?.others?.Bluetooth ||
                    "Sorry, Bluetooth information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">GPS</th>
                  <td>${
                    info?.others?.GPS || "Sorry, GPS information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">NFC</th>
                  <td>${
                    info?.others?.NFC || "Sorry, NFC information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">Radio</th>
                  <td>${
                    info?.others?.Radio || "Sorry, Radio information not found!"
                  }</td>
              </tr>
              <tr>
                  <th class="col-4">USB</th>
                  <td>${
                    info?.others?.USB || "Sorry, USB information not found!"
                  }</td>
              </tr>
          </tbody>
      </table>
    </div>
    */
/*
<div class="maxw mx-auto">
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg" alt="" class="w-100">
            </div>
    <table class="table table-bordered table-hover">
      <tr>
        <th class="col-4">First Release</th>
        <td class="col-8">${
          info.releaseDate || "Sorry, Release date not found!"
        }</td>
      </tr>
      <tr>
      
        <td class="col-4">Brand</td>
        <td class="col-8">${info.brand || "Sorry, Release date not found!"}</td>
      </tr>
      <tr>
        <td class="col-4">Storage</td>
        <td class="col-8">${
          info.storage || "Sorry, Release date not found!"
        }</td>
      </tr>
      <tr>
        <td class="col-4">Chipset</td>
        <td class="col-8">${
          info.mainFeatures.chipSet || "Sorry, Release date not found!"
        }</td>
      </tr>
      <tr>
        <td class="col-4">Memory</td>
        <td class="col-8">${
          info.mainFeatures.memory || "Sorry, Release date not found!"
        }</td>
      </tr>
      <tr>
        <td class="col-4">Display Size</td>
        <td class="col-8">${
          info.mainFeatures.displaySize || "Sorry, Release date not found!"
        }</td>
      </tr>
      <tr>
        <td class="col-4">Sensors</td>
        <td class="col-8">${sensors || "Sorry, Release date not found!"}</td>
      </tr>
    </table>
*/
