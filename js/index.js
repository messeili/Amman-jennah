var slides = document.getElementsByClassName("mySlides");
var myIndex = 0;
var adminForm = document.getElementById("admin-form");
var logBtn = document.querySelector(".static");
var stButton = document.getElementById("static-graph");
var imgContainer = document.getElementById("location-container");
var chart = document.getElementById("chartContainer");
var ctx = document.getElementById("myChart");
var locationsArray = JSON.parse(localStorage.getItem("locations"));

stButton.addEventListener("click", generate);
ctx.addEventListener("click", () => {
  chart.style.display = "none";
  window.location.hash = "#nav-items";
});

var admin = {
  userName: "admin1",
  password: "12345",
};

localStorage.setItem("adminInfo", JSON.stringify(admin));

var visitorsArr = [];
var randomColors = [];
var sumArr = [];

autoSlides();

function autoSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(autoSlides, 4000);
}

generateLocationsImages();

function generateLocationsImages() {
  for (var i = 0; i < locationsArray.length; i++) {
    var content = `
      <div class="location-picture ">
          <!-- Image of the location -->
          <a href="../html/location.html"
            ><img src="${locationsArray[i].mainImg}" alt="${locationsArray[i].name}@${i}"
          /></a>
          <div class="location-info">
            <!-- Here is the infromation about the location -->
            <img src="../img/pin.png" alt="sheta@0" />
            <h3>${locationsArray[i].name}</h3>
          </div>
        </div>
      `;
    imgContainer.innerHTML += content;
  }
}

imgContainer.addEventListener("click", () => {
  var clickedID = event.target.id;
  console.log(event.target.alt);
  //if clickID"the event click" not equal;"doesnt touch" the imgcontaine"locationcontainer=>the whole div
  if (clickedID != imgContainer.id) {
    //event.target.id =} give me the id||class||alt||anything i can target of the thing i clciked on
    var id = event.target.alt.split("@")[1];
    console.log(event.target.alt.split("@"));
    localStorage.setItem("clicked", id);
  }
});

var formContainer = document.getElementById("form-container");
var closeTheForm = document.querySelector("#closeform");
var btnCancel = document.getElementById("btn-cancel");

function openForm() {
  formContainer.style.display = "block";
  closeTheForm.addEventListener("click", closeForm);
  window.addEventListener("click", closeForm);
  btnCancel.addEventListener("click", closeForm);
}

function closeForm() {
  if (
    event.target == formContainer ||
    event.target == closeTheForm ||
    event.target == btnCancel
  ) {
    formContainer.style.display = "none";
  }
}

function adminValidate() {
  var admin = JSON.parse(localStorage.getItem("adminInfo"));
  var userN = document.querySelector("input[type='text']");
  var pass = document.querySelector("input[type='password']");
  if (userN.value == admin.userName && pass.value == admin.password) {
    return true;
  } else {
    // Change it to P with color red
    document.querySelector(".form-container p").style.display = "block";
    return false;
  }
}

function generate() {
  loadLocationArray();
  getNumberOfVisitors();
  generateChartMain();

  if (chart.style.display === "none") {
    chart.style.display = "block";
  } else {
    chart.style.display = "none";
  }
  window.location.hash = "#chartContainer";
}

function loadLocationArray() {
  for (var i = 0; i < locationsArray.length; i++) {
    locationsArray[i].usersArray =
      JSON.parse(localStorage.getItem(locationsArray[i].name)) || [];
  }
}

function getNumberOfVisitors() {
  sumArr = [];
  for (let index = 0; index < locationsArray.length; index++) {
    var sumOfNumbers = 0;
    for (var i = 0; i < locationsArray[index].usersArray.length; i++) {
      sumOfNumbers += parseInt(
        locationsArray[index].usersArray[i].numberOfVisitors
      );
    }
    sumArr.push(sumOfNumbers);
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";

  for (var j = 0; j < locationsArray.length; j++) {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    randomColors.push(color);
  }
}

function generateChartMain() {
  getRandomColor();

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: locationNames,
      datasets: [
        {
          label: "locationName",
          data: sumArr,
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
  myChart.canvas.parentNode.style.height = "50%";
  myChart.canvas.parentNode.style.width = "50%";
}
