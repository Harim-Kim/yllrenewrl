// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.min
//= require tether.min
//= require bootstrap.min
//= require jqBootstrapValidation
//= require contact_me
//= require agency.min
//= require_tree .
$(function(){
  $(".typed").typed({
    strings: ["LIKELION","YONSEI UNIVERSITY", "Yonsei X Likelion"],
    typeSpeed: 80
  });
});

	$(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
	});
	var countDownDate = new Date("Mar 11, 2017 00:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();
            
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element with class="count"
            var elements = document.getElementsByClassName("count");

            for (var i = 0; i < elements.length; i++) {
              elements[i].innerHTML = days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초 ";
            }
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                
                for (var i = 0; i < elements.length; i++) {
                  elements[i].innerHTML = "00일 00시간 00분 00초";
                }
            }
        }, 1000);