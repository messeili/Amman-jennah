var table = document.getElementById("locations-info");
var thead = document.querySelector("thead");
var tbody = document.querySelector("tbody");

function generateHeader() {
  var theadInfo = `
  <tr>
    <th>Location Name</th>
    <th>User Name</th>
    <th>Date</th>
    <th>Visitors</th>
  </tr>
    `;
  thead.innerHTML = theadInfo;
}

generateHeader();

// generateTableBody();

// generateLocationsNames();
generateTableBody();

function generateTableBody() {
  var trow = "";
  for (var i = 0; i < Locations.all.length; i++) {
    var tempArr = JSON.parse(localStorage.getItem(locationNames[i]));
    console.log(tempArr);
    if (tempArr == null) {
      continue;
    } else {
      for (var j = 0; j < tempArr.length; j++) {
        trow = `    
                      <td>${locationNames[i]}</td>
                      <td>${tempArr[j].name}</td>
                      <td>${tempArr[j].date}</td>
                      <td>${tempArr[j].numberOfVisitors}</td>
                  
                  `;
        tbody.innerHTML += trow;
      }
    }
  }
}

function generateLocationsNames() {
  var tr = "";
  for (var i = 0; i < Locations.all.length; i++) {
    var tempArr = JSON.parse(localStorage.getItem(locationNames[i]));
    console.log(tempArr);
    if (tempArr == null) {
      tr = `<tr>
        <td>${locationNames[i]}</td>
      </tr>`;
      tbody.innerHTML += tr;
      continue;
    } else {
      var tr = `
        <tr>
            <td>${locationNames[i]}</td>
       </tr>
      `;
      tbody.innerHTML += tr;
    }
  }
}
