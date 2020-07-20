
$(document).ready(function(){
	$('.burger').click(function(event){
		$('.burger, .nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
$('.slider').slick({
		arrows: false,
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		centerMode: true,
	});
});