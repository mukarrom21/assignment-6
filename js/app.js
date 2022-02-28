const dataLoad = () => {
  const input = document.getElementById("input");
  fetch(`https://openapi.programming-hero.com/api/phones?search=${input.value}`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const displayData = (data) => {
    
  console.log(data);
};
