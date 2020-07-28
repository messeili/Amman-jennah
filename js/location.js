var clickedLocation = localStorage.getItem("clicked");

var formSubmit = document.querySelector("form");

var counter = 0;

var imagesContainer = document.getElementsByClassName("images");

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
});
