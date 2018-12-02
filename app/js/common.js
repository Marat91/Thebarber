$(function(){
	$('#my-menu').mmenu({
		"pageScroll": true,
		extensions: [ 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/222.png" alt="Barber"',
		},
		offCanvas: {
			position: "right"
		 }
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
	//carousel
	var owl = $('.slider');
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		navText: false
	});

	$('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [1000]);
  	});

 	$('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [1000]);
 	 });
 			//scroll
		$(window).scroll(function() {
			if ($(this).scrollTop() > $(this).height()){
				$('.top').addClass('active');
			} else {
				$('.top').removeClass('active');
			}
		});
		//scroll active
		$('.top').click(function(){
			$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});
});