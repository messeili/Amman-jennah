var table = document.getElementById("locations-info");
var thead = document.querySelector("thead");
var tbody = document.querySelector("tbody");
var select = document.querySelector("select");
var selectBtn = document.getElementById("admin-select");
var locName = document.getElementById("location-name");
var addForm = document.getElementById("addLocation");
var locationsArray = JSON.parse(localStorage.getItem("locations"));
console.log(locationsArray);

function generateHeader() {
  var theadInfo = `
  <tr>
    <th>Number</th>
    <th>User Name</th>
    <th>Date</th>
    <th>Visitors</th>
  </tr>
    `;
  thead.innerHTML = theadInfo;
}

generateHeader();

optionsNames();

function optionsNames() {
  for (var i = 0; i < locationsArray.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", locationsArray[i].name);
    option.textContent = locationsArray[i].name;
    select.appendChild(option);
  }
}

selectBtn.addEventListener("click", function () {
  var selectValue = select.value;
  var tempArr = JSON.parse(localStorage.getItem(selectValue));
  if (tempArr == null) {
    locName.innerHTML = `There is no record for ${selectValue}`;
    locName.style.color = "red";
    tbody.innerHTML = "";
  } else {
    tbody.innerHTML = "";
    locName.innerHTML = `Location name is ${selectValue}`;
    locName.style.color = "green";
    for (var i = 0; i < tempArr.length; i++) {
      var trow = `
                        <tr>
                        <td>${i + 1}</td>
                        <td>${tempArr[i].name}</td>
                        <td>${tempArr[i].date}</td>
                        <td>${tempArr[i].numberOfVisitors}</td>
                        </tr>
        `;
      tbody.innerHTML += trow;
    }
  }
});

addForm.addEventListener("submit", function () {
  event.preventDefault();
  var locationName = document.getElementById("locationName");
  var allImages = document.getElementById("mainImage");
  var description = document.getElementById("locationDesc");
  var map = document.getElementById("locationMap");
  var allImgesArray = createURL(allImages.files);
  new Locations(
    locationName.value,
    allImgesArray[0],
    allImgesArray.slice(1),
    description.value,
    map.value
  );

  localStorage.setItem("locations", JSON.stringify(Locations.all));
  locationName.value = "";
  allImages.value = "";
  description.value = "";
  map.value = "";
});

function createURL(array) {
  var tempArray = [];
  for (let index = 0; index < array.length; index++) {
    tempArray.push(URL.createObjectURL(array[index]));
  }
  return tempArray;
}
