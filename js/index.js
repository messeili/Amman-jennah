var slides = document.getElementsByClassName("mySlides");
var myIndex = 0;
var adminForm = document.getElementById("admin-form");
var admin = {
  userName: "admin1",
  password: "12345",
};

localStorage.setItem("adminInfo", JSON.stringify(admin));
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

var imgContainer = document.getElementById("location-container");

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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function adminValidate() {
  var admin = JSON.parse(localStorage.getItem("adminInfo"));
  var userN = document.querySelector("input[type='text']");
  var pass = document.querySelector("input[type='password']");
  if (userN.value == admin.userName && pass.value == admin.password) {
    return true;
  } else {
    // Change it to P with color red
    alert("Your UserName/Password is wrong");
    return false;
  }
}
