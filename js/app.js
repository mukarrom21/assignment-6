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
  //Clear input value
  input.value = "";
  // get div with id for loading data in this div
  const dataLoadField = document.getElementById("data-load-field");
  //Loop data
  items.forEach((item) => {
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
  document.getElementById("data-load-field").innerHTML = "";
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
  div.className = "w-50 mx-auto";
  // div inner html set
  div.innerHTML = `
    <div class="card h-100">
      <img src="${info.image}" class="card-img-top img-fluid">
      <div class="card-body text-center">
        <h5 class="card-title">${info.name}</h5>
        <h6 class="card-title">Brand: ${info.brand}</h6>
        <p class="text-info">Release Date: ${
          info.releaseDate || "Sorry, Release date not found!"
        } </p>
      </div>
    </div>
  `;
  detailsField.appendChild(div);
};
