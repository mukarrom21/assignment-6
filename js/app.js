// search button and find images
const dataLoad = () => {
  // get input field
  const input = document.getElementById("input");
  // get api
  fetch(`https://openapi.programming-hero.com/api/phones?search=${input.value}`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
// search button and find information
const infoLoad = (id) => {};
// display data in new function
const displayData = (items) => {
  // get div with id for loading data in this div
  const dataLoadField = document.getElementById("data-load-field");
  //Loop data
  items.forEach((item) => {
    // get api
    fetch(`https://openapi.programming-hero.com/api/phone/${item.slug}`)
      .then((res) => res.json())
      .then((data) => {
        const phoneId = data.data;
        console.log(phoneId);
      });
    //creat new div
    const div = document.createElement("div");
    div.className = "col";
    // div inner html set
    div.innerHTML = `
        <div class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="${item.slug}">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${item.phone_name}</h5>
                <h6 class="card-title">Brand: ${item.brand}</h6>
                <p class="card-text">This is a wider card with supporting text below as a natural
                    lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" type="button">See Details</button>
            </div>
        </div>
`;
    dataLoadField.appendChild(div);
  });
};
