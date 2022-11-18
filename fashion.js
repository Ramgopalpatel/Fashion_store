const changeMode = () => {
  let mybody = document.body;
  mybody.classList.toggle("mydark");
};

function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.2";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}
let random1 = Math.ceil(Math.random() * 4);
let randomsource1 = "./Images/" + "coupon/" + "coupon" + random1 + ".jpg";
let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomsource1);
