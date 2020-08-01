var clickedLocation = localStorage.getItem("clicked");

var formSubmit = document.querySelector("form");
var chartContainer = document.getElementById("chartContainer");

var locationsArray = JSON.parse(localStorage.getItem("locations"));

var counter = 0;
var imagesContainer = document.getElementsByClassName("images");
var ctx = document.getElementById("myChart");

function generateImages() {
  for (var i = 0; i < imagesContainer.length; i++) {
    for (var j = 0; j < imagesContainer[i].children.length; j++) {
      var oldImage = imagesContainer[i].children[j].attributes[0];
      var newImage = `../img/${locationsArray[clickedLocation].pathArr[counter]}`;
      oldImage.value = newImage;
      counter++;
    }
  }
}

function generateDescription() {
  var desc = document.getElementById("description");
  var newDesc = locationsArray[clickedLocation].description;
  desc.innerHTML = newDesc;
}

function generateMap() {
  var maps = document.getElementById("Map");
  var newMap = locationsArray[clickedLocation].location;
  maps.innerHTML = newMap;
}

function generateTitle() {
  var locationName = document.getElementById("location-name");
  var title = document.querySelector("title");
  var newName = locationsArray[clickedLocation].name;
  locationName.innerHTML = newName;
  title.innerHTML = newName;
}

function generateBackground() {
  var backGround = document.getElementById("img-background");
  var newBackGround = locationsArray[clickedLocation].mainImg;
  backGround.style.backgroundImage = `url('${newBackGround}')`;
}

function loadLocationArray() {
  for (var i = 0; i < locationsArray.length; i++) {
    locationsArray[i].usersArray =
      JSON.parse(localStorage.getItem(locationsArray[i].name)) || [];
  }
}

function loadArary() {
  Locations.all[clickedLocation].usersArray =
    JSON.parse(localStorage.getItem(locationsArray[clickedLocation].name)) ||
    [];
}

function generate() {
  loadLocationArray();
  generateImages();
  generateDescription();
  generateTitle();
  generateBackground();
  loadArary();
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
});
