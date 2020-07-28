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
  `<p>Located next to the Al Hussein Public Parks, the museum was established in 2003 upon King Abdullah's wishes. The museum showcases a rare collection of Jordan's vehicles ranging from Hussein bin Ali's cars that came to Amman in 1916 to modern sports cars.</p> 
  <p>The museum has the rover used in filming of Hollywood's movie The Martian, which used Jordan's UNESCO world heritage site Wadi Rum as the backdrop for the Martian scenes. The rover was gifted to Jordan in return for the hospitality with which Jordan received the movie cast and crew.</p>
  <p>There is a plethora of motorcycles, as <b>King Hussein</b> and his son, the current King Abdullah II, were motorcycle enthusiasts, many of which are rare examples of vintage US and British bikes in pristine condition.</p>
  <p> Some of the best cars.</p>
  <ol>
    <li> <a href="https://www.facebook.com/TheRoyalAutomobileMuseumJordan/photos/a.580816995331045/2790331461046243/?type=3&theater" target="_blank">AC Cobra 1990</a>  </li> 
    <li> <a href="https://www.facebook.com/TheRoyalAutomobileMuseumJordan/photos/a.580816995331045/2794314417314614/?type=3&theater" target="_blank">Sheer rover 1984</a>  </li> 
    <li> <a href="https://www.facebook.com/TheRoyalAutomobileMuseumJordan/photos/a.275438299202251/1978738765538854/?type=3&theater" target="_blank">Bugatti 1957</a>  </li> 
    <li> <a href="https://www.facebook.com/TheRoyalAutomobileMuseumJordan/photos/a.275438299202251/1851794278233304/?type=3&theater" target="_blank">Aston martin db5 1963</a>  </li>
  </ol> 
  `,
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
