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
      Sorry! no phone found with <strong>${input.value}</strong> name.
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
      <div class="card h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.slug}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.phone_name}</h5>
          <h6 class="card-title">Brand: ${item.brand}</h6>
        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-outline-primary" type="button" onclick="getDetails('${item.slug}')">See Details</button>
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
  console.log(info);
  const detailsField = document.getElementById("details-field");
  const div = document.createElement("div");
  div.className = "col-sm-10 col-md-8 col-lg-6 mx-auto";
  // div inner html set
  div.innerHTML = `
      <div class="card h-100 border-0">
      <img src="${info.image}" class="card-img-top img-fluid">
      <div class="card-body text-center">
          <h2 class="card-title text-success">${info.name}</h2>
      </div>
      <table class="table table-bordered table-hover">
          <tbody>
              <tr>
                  <th scope="row">First Release</th>
                  <td>${
                    info.releaseDate || "Sorry, Release date not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Brand</th>
                  <td>${info.brand || "Sorry, Release date not found!"}</td>
              </tr>
              <tr>
                  <th scope="row">Storage</th>
                  <td>${
                    info.storage || "Sorry, Storage information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Chipset</th>
                  <td>${
                    info.mainFeatures.chipSet ||
                    "Sorry, chipset information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Memory</th>
                  <td>${
                    info.mainFeatures.memory ||
                    "Sorry, memory information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Display Size</th>
                  <td>${
                    info.mainFeatures.displaySize ||
                    "Sorry, display Size information not found!"
                  }</td>
              </tr>
              <tr class="overflow-auto">
                  <th scope="row">Sensors</th>
                  <td id='sens'>${
                    info.mainFeatures.sensors ||
                    "Sorry, sensors information not found!"
                  }</td>
              </tr>
              
              <tr>
                  <th colspan="2" scope="row" class="text-center text-info">Others</th>
              </tr>
              <tr>
                  <th scope="row">WLAN</th>
                  <td>${
                    info?.others?.WLAN || "Sorry, WLAN information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Bluetooth</th>
                  <td>${
                    info?.others?.Bluetooth ||
                    "Sorry, Bluetooth information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">GPS</th>
                  <td>${
                    info?.others?.GPS || "Sorry, GPS information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">NFC</th>
                  <td>${
                    info?.others?.NFC || "Sorry, NFC information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">Radio</th>
                  <td>${
                    info?.others?.Radio || "Sorry, Radio information not found!"
                  }</td>
              </tr>
              <tr>
                  <th scope="row">USB</th>
                  <td>${
                    info?.others?.USB || "Sorry, USB information not found!"
                  }</td>
              </tr>
          </tbody>
      </table>
    </div>
  `;
  detailsField.appendChild(div);
};
