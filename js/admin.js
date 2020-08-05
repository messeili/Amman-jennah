var table = document.getElementById("locations-info");
var thead = document.querySelector("thead");
var tbody = document.querySelector("tbody");
var select = document.querySelector("select");
var selectBtn = document.getElementById("admin-select");
var locName = document.getElementById("location-name");
var addForm = document.getElementById("addLocation");
var userMassage = document.getElementById("user-massage");

var templocationArray = JSON.parse(localStorage.getItem("locations"));
console.log(templocationArray);

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
  select.innerHTML = "";
  var locationsArray = JSON.parse(localStorage.getItem("locations"));
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
  var imageArr = [];
  var locationName = document.getElementById("locationName");
  var mainImage = document.getElementById("mainImage");
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var image3 = document.getElementById("image3");
  var image4 = document.getElementById("image4");
  imageArr.push(image1.value);
  imageArr.push(image2.value);
  imageArr.push(image3.value);
  imageArr.push(image4.value);
  var description = document.getElementById("locationDesc");
  var map = document.getElementById("locationMap");
  var adminNewLlocation = new Locations(
    locationName.value,
    mainImage.value,
    imageArr,
    description.value,
    map.value
  );
  templocationArray.push(adminNewLlocation);
  localStorage.setItem("locations", JSON.stringify(templocationArray));

  locationName.value = "";
  mainImage.value = "";
  image1.value = "";
  image2.value = "";
  image3.value = "";
  image4.value = "";
  description.value = "";
  map.value = "";
  userMassage.textContent = "Your location has been added";
   userMassage.style.color = "green"; 
  optionsNames();
});
