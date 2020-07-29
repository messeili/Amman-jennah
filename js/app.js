//this array contain all newly created objects
Locations.all = [];

//this array contain all location names
var locationNames = [
  "THE WINTER VALLY",
  "AL-BAHHATH SPRING",
  "ROYAL Car MUSEUM",
  "King Talal Dam",
  "Alrayyan Vally",
];

//this array contains the nextention names for each image
var locationImg = [
  ["sheta-1.jpg", "sheta-2.jpg", "sheta-3.jpg", "sheta-4.jpg", "sheta-5.jpg"],
  ["bahat-1.jpg", "bahat-2.jpg", "bahat-3.jpg", "bahat-4.jpg", "bahat-5.jpg"],
  ["car-1.jpg", "car-2.jpg", "car-3.jpg", "car-4.jpg", "car-5.jpg"],
  [
    "sadTalal-1.jpg",
    "sadTalal-2.jpg",
    "sadTalal-3.jpg",
    "sadTalal-4.jpg",
    "sadTalal-5.jpg",
  ],
  ["rayyan-1.jpg", "rayyan-2.jpg", "rayyan-3.jpg", "rayyan-4.jpg"],
];
//this  array contains locations description
var paragArray = [
  "first location paragraph",
  "second location paragraph",
  "third location paragraph",
  "fourth location paragraph",
  "fifth location paragraph",
];

//constructor
function Locations(name, mainImg, pathArr, description) {
  this.name = name;
  this.mainImg = `../img/${mainImg}`;
  this.pathArr = pathArr;
  this.description = description;
  this.usersArray = [];
  Locations.all.push(this);
}

//this for loop creates objects from the consructor
for (let index = 0; index < locationNames.length; index++) {
  new Locations(
    locationNames[index],
    locationImg[index][0],
    locationImg[index],
    paragArray[index]
  );
}
console.log(Locations.all);

console.log(Locations.all[0].pathArr);

function FormInfo(name, date, numberOfVisitors) {
  this.name = name;
  this.date = date;
  this.numberOfVisitors = numberOfVisitors;
}
