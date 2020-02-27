$(document).ready(function() {
	// page sections scrolling
	$(".navbar a[href^='#'], .scroll-link").on('click', function(event) {
        // make sure this.hash has a value
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // smooth scrolling animation
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1300, 'swing', function(){
                    window.location.hash = hash;
            });
        }
    });

    let welcomeCarousel = $('#mainCarousel');
    // let welcomeCarouselInterval = 10000;
    let welcomeCarouselInterval = 10000000;

    function toggleCaption() {
        let caption = welcomeCarousel.find('.active').find('.carousel-caption');
        caption.delay(1000).fadeIn(1500);
    }

    welcomeCarousel.carousel({
        pause: false,
        interval: welcomeCarouselInterval,
	});

    welcomeCarousel.on('slide.bs.carousel', function() {
			            $('.carousel-caption').fadeOut();
			        }).on('slid.bs.carousel', toggleCaption);

	$('.jarallax').jarallax({
	    speed: 0.7,
	});

	// AOS animations
	AOS.init({
		disable: 'mobile',
	});

	// view port checker
	$('.section-statistics .content').viewportChecker({
		offset: 150,
		callbackFunction: function(elem, action){
			$('.counter').each(function () {
			    $(this).prop('Counter',0).animate({
			        Counter: $(this).data('value')
			    }, {
			        duration: 2000,
			        easing: 'swing',
			        step: function (now) {
			            $(this).text(Math.ceil(now));
			        }
			    });
			});
		},
	});

	// open street maps
	var map = L.map('map-footer', {
		zoomControl: false,
		dragging: false,
	}).setView([48.1566336,17.1255593], 12.5);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
});
