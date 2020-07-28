var clickedLocation = localStorage.getItem("clicked");

var formSubmit = document.querySelector("form");
var chartContainer = document.getElementById("chartContainer");

console.log(chartContainer);

var counter = 0;
var dateArr = [];
var visitorsArr = [];
var randomColors = [];
var imagesContainer = document.getElementsByClassName("images");
var ctx = document.getElementById("myChart");

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

  if (Locations.all[clickedLocation].usersArray.length > 0) {
    chartContainer.style.display = "block";
    gitChartData();
    generateChart();
  }
}

function gitChartData() {
  dateArr = [];
  visitorsArr = [];
  var tempArr = Locations.all[clickedLocation].usersArray;
  for (let index = 0; index < tempArr.length; index++) {
    dateArr.push(tempArr[index].date);
    visitorsArr.push(tempArr[index].numberOfVisitors);
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";

  for (var j = 0; j < Locations.all[clickedLocation].usersArray.length; j++) {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    randomColors.push(color);
  }
}

function generateChart() {
  getRandomColor();
  console.log(randomColors);
  var locationName = Locations.all[clickedLocation].name;
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dateArr,
      datasets: [
        {
          label: locationName,
          data: visitorsArr,
          backgroundColor: randomColors,

          borderColor: "#000000",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  myChart.canvas.parentNode.style.height = "400px";
  myChart.canvas.parentNode.style.width = "900px";
}

function generate() {
  generateImages();
  generateDescription();
  generateTitle();
  generateBackground();
  loadLocationArray();
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
  chartContainer.style.display = "block";
});
