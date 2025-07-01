var submitButton = document.querySelector(".btn");

var flexMain = document.querySelector(".flex-main");

var icon = document.querySelector(".icon");

var h1 = document.querySelector("h1");

var message = document.getElementById("message");

var rating = document.querySelectorAll(".rating");

var flexNums = document.querySelector(".flex-nums");

var finalRating = document.querySelector("#final-rating");

var selectedRating = null;

var ratingState = document.querySelector(".rating-state");

var thankYouState = document.querySelector(".thank-you-state");

var alert = document.querySelector(".alert");
var closeBtn = document.querySelector(".close-btn");

for ( var i = 0; i< rating.length; i++) {
  rating[i].addEventListener("click", function () {
    rating.forEach( function (el) {
      el.classList.remove("pressed");
    });
      this.classList.add("pressed");
      selectedRating = this.dataset.value;
      console.log(selectedRating);
  });
}


submitButton.addEventListener("click", function () {
  /*flexMain.style.textAlign = "center";*/
  
  /*icon.setAttribute("src", "images/illustration-thank-you.svg");*/
  
  
  
  if (selectedRating !== null) {
  
  /*icon.classList.remove("icon");
  
  icon.classList.add("icon-thanks");
  
  
  h1.innerHTML = "Thank you!";
  
  message.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  
  rating.forEach(el => el.remove());
  
  submitButton.remove();*/
  
  finalRating.textContent = selectedRating;
  
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");
  
  } else {
    alert.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  alert.style.display = "none";
});
