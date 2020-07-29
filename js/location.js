var clickedLocation = localStorage.getItem("clicked");

var formSubmit = document.querySelector("form");
var chartContainer=document.getElementById("chartContainer");

var counter = 0;
var dateArr=[];
var visitorsArr=[];
var imagesContainer = document.getElementsByClassName("images");
var ctx = document.getElementById('myChart');

function generateImages() {
  for (var i = 0; i < imagesContainer.length; i++) {
    for (var j = 0; j < imagesContainer[i].children.length; j++) {
      var oldImage = imagesContainer[i].children[j].attributes[0];
      var newImage = `../img/${Locations.all[clickedLocation].pathArr[counter]}`;
      oldImage.value = newImage;
      counter++;
    }
  }
}

function generateDescription() {
  var desc = document.getElementById("description");
  var newDesc = Locations.all[clickedLocation].description;
  desc.innerHTML = newDesc;
}

function generateMap() {
  var maps = document.getElementById("Map");
  var newMap = Locations.all[clickedLocation].location;
  maps.innerHTML = newMap;
}

function generateTitle() {
  var locationName = document.getElementById("location-name");
  var title = document.querySelector("title");
  var newName = Locations.all[clickedLocation].name;
  locationName.innerHTML = newName;
  title.innerHTML = newName;
}

function generateBackground() {
  var backGround = document.getElementById("img-background");
  var newBackGround = Locations.all[clickedLocation].mainImg;
  backGround.style.backgroundImage = `url('${newBackGround}')`;
}

function loadLocationArray() {
  Locations.all[clickedLocation].usersArray =
    JSON.parse(localStorage.getItem(Locations.all[clickedLocation].name)) || [];
}

function gitChartData(){
  dateArr=[];
  visitorsArr=[];
  var tempArr=Locations.all[clickedLocation].usersArray;
for (let index = 0; index <tempArr.length ; index++) {
  dateArr.push(tempArr[index].date);
  visitorsArr.push(tempArr[index].numberOfVisitors);

}

}


function generateChart() {
  
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: dateArr,
          datasets: [{
              label: '###',
              data: visitorsArr,
              backgroundColor: 
                  '#f73859',

              
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
          ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  myChart.canvas.parentNode.style.height = '400px';
myChart.canvas.parentNode.style.width = '900px';
}

function generate() {
  generateImages();
  generateDescription();
  generateTitle();
  generateBackground();
  loadLocationArray();
  generateMap();
}

generate();


formSubmit.addEventListener("submit", function () {
  event.preventDefault();
  var name = document.querySelector("input[type='text']");
  var nameValue = name.value;
  var date = document.querySelector("input[type='date']");
  var dateValue = date.value;
  var numberOfVisitors = document.querySelector("input[type='number']");
  var numberValue = numberOfVisitors.value;

  var Info = new FormInfo(nameValue, dateValue, numberValue);
  Locations.all[clickedLocation].usersArray.push(Info);
  localStorage.setItem(
    Locations.all[clickedLocation].name,
    JSON.stringify(Locations.all[clickedLocation].usersArray)
  );
  name.value = "";
  date.value = "";
  numberOfVisitors.value = "";
  gitChartData();
 
  generateChart();
});
