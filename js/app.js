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

var map = [
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3021289593544!2d35.83670461511518!3d31.89838748124615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7bde71f2a01%3A0xd07164a2ff8fe26b!2z2YjYp9iv2Yog2KfZhNi02KrYpyB3YWRpIGFsc2hldGE!5e0!3m2!1sen!2sjo!4v1595958845411!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.079959334107!2d35.80200901511529!3d31.904424781244195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca5b5329bdc11%3A0xa9a6d4b9b833f022!2zQmFoYXRoIFBhcmsgYW5kIFJlc3RhdXJhbnQg2YXZhtiq2LLZhyDZiNmF2LfYudmFINmG2KjYuSDYp9mE2KjYrdin2Ks!5e0!3m2!1sen!2sjo!4v1595959059219!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1909073608035!2d35.82417501511731!3d31.98283988121908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca229b2067e73%3A0xfbb235e88924929f!2sThe%20Royal%20Automobile%20Museum!5e0!3m2!1sen!2sjo!4v1595959140730!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27014.6349889561!2d35.80424974093901!3d32.181875543952444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c84af1a7543f1%3A0xb6e103c95c9e26ca!2sKing%20Talal%20Dam!5e0!3m2!1sen!2sjo!4v1595959157359!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.9316530735464!2d35.69503281512784!3d32.39419378108926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c625be315cc21%3A0x537333d80bbf9195!2z2YjYp9iv2Yog2KfZhNix2YrYp9mG!5e0!3m2!1sen!2sjo!4v1595959245592!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
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
  `<p>Wadi Al-Sheta is a winding valley located in Wadi Al-Seer district within the Amman Governorate, and it is a valley connecting the Iraq al-Amir region (from the west) and Marj Al-Hamam region (from the east).</p>
  <p> The area is characterized by valleys and hills overlooking the Dead Sea and the city of Jerusalem, with its spring weather and mild winters, and is located 13 km from the seventh circle at the foot of the valley within a land area of 50 dunums planted with vegetables and fruit trees and interspersed with fresh water springs and an area has been prepared for walking and hiking through trees.</p>
  <p> In general, the area is characterized by fresh air and a calm atmosphere, which gives psychological and physical comfort to the resident, as the place provides all means of recovery and recuperation.</p>`,
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
function Locations(name, mainImg, pathArr, description, location) {
  this.name = name;
  this.mainImg = `../img/${mainImg}`;
  this.pathArr = pathArr;
  this.description = description;
  this.location = location;
  this.usersArray = [];
  Locations.all.push(this);
}

//this for loop creates objects from the consructor
for (let index = 0; index < locationNames.length; index++) {
  new Locations(
    locationNames[index],
    locationImg[index][0],
    locationImg[index],
    paragArray[index],
    map[index]
  );
}
console.log(Locations.all);

console.log(Locations.all[0].pathArr);

function FormInfo(name, date, numberOfVisitors) {
  this.name = name;
  this.date = date;
  this.numberOfVisitors = numberOfVisitors;
}
