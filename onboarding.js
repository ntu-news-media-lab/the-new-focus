let showing = 0;
let slides = $(".dot");
nextSlide();

function nextSlide() {
  if (showing == 2) {
    $("#skip").hide();
    // $("#next-circle").text("Let's go");
  }  
  let target = slides[showing];
  $(target)
  .addClass('fill')
  .siblings("div")
  .removeClass("fill");
  
  var margin = -100 * showing 
  $('.slider').css("margin-left", margin + "%");
}

function goHome() {
  console.log('Go home');
  chrome.browserAction.setPopup({ popup: "home.html" });
  window.location.href = "home.html";
}

$("#next-circle").click(function() {
  showing += 1;
  if (showing >= 3) {
    goHome()
  } else {
    console.log(showing);
    nextSlide();
  }
});


$("#skip").click(function() {
  goHome()
});

$('#close-icon').click(function() {
  console.log('close');
  window.close();
})