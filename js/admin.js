var table = document.getElementById("locations-info");
var thead = document.querySelector("thead");
var tbody = document.querySelector("tbody");
var select = document.querySelector("select");
var selectBtn = document.getElementById("admin-select");
var locName = document.getElementById("location-name");
console.log(locName);
var locationsArray = JSON.parse(localStorage.getItem("locations"));

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

// function generateTableBody() {
//   var trow = "";
//   for (var i = 0; i < locationsArray.length; i++) {
//     var tempArr = JSON.parse(localStorage.getItem(locationNames[i]));
//     if (tempArr == null) {
//       continue;
//     } else {
//       for (var j = 0; j < tempArr.length; j++) {
//         trow = `
//                       <td>${locationNames[i]}</td>
//                       <td>${tempArr[j].name}</td>
//                       <td>${tempArr[j].date}</td>
//                       <td>${tempArr[j].numberOfVisitors}</td>

//                   `;
//         tbody.innerHTML += trow;
//       }
//     }
//   }
// }

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
