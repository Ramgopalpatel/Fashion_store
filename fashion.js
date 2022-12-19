let dark = document.getElementById("icon");
dark.onclick = function () {
  document.body.classList.toggle("mydark");
  if (document.body.classList.contains("mydark")) {
    icon.src = "./Images/darkimg/sun.png";
    secondary.classList.toggle("btn-secondary");
  } else {
    icon.src = "./Images/darkimg/moon.png";
  }
};

function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.2";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}
window.onload = loadCoupon();
//  preloader of the web page
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//  preloader of the web page

//Geo-location

let x = document.getElementById("out");
let y = document.getElementById("weather");

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}

function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  // let out = `Latitude is ${lat} & longitude is ${long}`;
  // x.innerText = out;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  ///api calling
  fetch(url, { method: "GET" })
    //return promise
    .then((res) => res.json())
    //return data
    .then((data) => {
      console.log(data);
      let city = data.city.name;
      let temp = data.list[0].temp.day;
      y.innerText = `detected location is ${city}, ${temp} °C`;
    });
}

//Geo-location
