// $(document).ready(function(){

//       var percent = 0, bar = $('.progress-bar'), crsl = $('#demo');
// 			function progressBarCarousel() {
//                 console.log({width:percent+'%'});
// 			  bar.css({width:percent+'%'});
// 			 percent = percent +0.1;
// 			  if (percent>100) {
// 			      percent=0;
// 			      crsl.carousel('next');
// 			  }      
// 			}
// 			crsl.carousel({
// 			    interval: false,
//                 pause: true,
//                 autoplay:false,
                
// 			}).on('slide.bs.carousel', function () {});var barInterval = setInterval(progressBarCarousel, 30);
// 			crsl.hover(
// 			    function(){
// 			        clearInterval(barInterval);
// 			    },
//             function(){
//                 barInterval = setInterval(progressBarCarousel, 30);
//           })
//     });


    //Init the carousel
initSlider();

function initSlider() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar
  });
}

function startProgressBar() {
  // apply keyframe animation
  $(".progress-bar").css({
    width: "100%",
    transition: "width 5000ms"
  });
}

function resetProgressBar() {
  $(".progress-bar").css({
    width: 0,
    transition: "width 0s"
  });
}

// Header fixing
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('.main-header').addClass('fixed-header');       
  }
  else {
      $('.main-header').removeClass('fixed-header');
  }
});




//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;  
  document.documentElement.scrollTop = 0;
}