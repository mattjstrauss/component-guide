$(document).ready(function(){

	svg4everybody();

	$('html').addClass('js');

	// Tool menu
	$('.tool-menu-button').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-tool-nav');
	});

	// Tool template header
	$('.tool-header-trigger').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-tool-header');
	});

	// Header headroom.js
	if ( $(window).width() >= 992 ) {
		$("#header").headroom({
			tolerance : {
				up : 0,
				down : 5
			}
		});
	}

	// Mobile menu
	$('.menu-button').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('active-nav');
	});

	// Mobile dropdown toggle
	if ( $(window).width() <= 992 ) {
		$('.sub-menu').each(function(){
			$(this).css('height', 0);
		});
		$('.main-menu a').each(function(){
			$(this).addClass('closed');
		});
		$(".main-menu a").click(function(){
		
			var $this = $(this),
			$content = $this.next('.sub-menu');;

			if(!$this.hasClass("closed")){
				TweenLite.to($content, 0.2, {height:0})
				$this.addClass("closed")
			} else {
				//to open
				// - temporarilty set height:auto
				// - tween from height:0
				TweenLite.set($content, {height:"auto"})
				TweenLite.from($content, 0.2, {height:0})
				$this.removeClass("closed");
			}
		});
	}
	
	// Remove loading
	$('body').removeClass('loading');

	// Hides alerts
	if ( $('.alert').length ) {
		$('.alert .close-button').on('click', function(e){
			e.preventDefault();
			$(this).closest('p').slideUp();
		});
	};

	// Appends Google Maps API
	if ( $('.map-card').length ) {
		$('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgCzwn7i1OWIvUL9I-Dtv-AEKfWNMBbjc&callback=initMap" async defer></script>');
	}

	// Table toggles
	if ( $('.table-wrapper').length ) {
		if ( $(window).width() <= 760 ) {
			$('tr').on('click', function() {
				$(this).toggleClass('active');
			})
		}
	}


	// Card feature carousels
	$('.card.carousel').each(function(){
		$this = $(this);

		// Image carousel inside of this card carousel
		$('.img-wrap-carousel',$this).slick({
			asNavFor: $('.copy-wrap-carousel',$this),
			appendArrows: $('.arw-nav',$this),
			dots: false,
			prevArrow: '<i class="icon icon-arrow"><svg><use xlink:href="/img/spritemap.svg#icon-arrow-left"></use><svg></i>',
			nextArrow: '<i class="icon icon-arrow"><svg><use xlink:href="/img/spritemap.svg#icon-arrow-right"></use><svg></i>',
			fade: true
		});

		// Copy carousel inside of this card carousel
		$('.copy-wrap-carousel',$this).slick({
			arrows: false,
			appendDots: $('.dot-nav',$this),
			asNavFor: $('.img-wrap-carousel',$this),
		  	dots: true,
		});
	});

	// Accordion
	$('.button-accordion').on('click',function(e){
		e.preventDefault();
		var $this = $(this),
				$accordion = $this.closest('.accordion-wrap').find('.accordion-content'),
				$buttonText = $this.find('.text');

		if($this.hasClass('open')){
		  TweenLite.to($accordion, 0.2, {height:0})
		  $this.removeClass('open');

		  TweenLite.to($this.find('.icon-arrow'),0.2,{
		  	ease: Power2.easeOut,
		  	rotation: 0,
		  	transformOrigin: 'center center'
		  });

		  // Set text back to expand
		  $buttonText.text('click to expand');
		}else{
		  TweenLite.set($accordion, {height:"auto"})
		  TweenLite.from($accordion, 0.2, {height:0})
		  $this.addClass('open');

		  TweenLite.to($this.find('.icon-arrow'),0.2,{
		  	ease: Power2.easeOut,
		  	rotation: 45,
		  	transformOrigin: 'center center'
		  });

		  // Set text to close
		  $buttonText.text('click to close');
		}
	});

	// $('#tool-sidebar li a').on('click', function(){
	// 	$('#tool-sidebar li a').removeClass('active');
	// 	$(this).addClass('active');
	// 	window.history.pushState(null, null, $(this).attr('href'));
	// });

	// Scroll watch
	var $content = $('#tool-container');
	var $header = $('#tool-header');
	var $sidebar = $('#tool-sidebar');
	var $footer = $('#tool-footer');

	var contentWatcher = scrollMonitor.create( $content );
	var headerWatcher = scrollMonitor.create( $header );

	// watch an area above the footer as tall as the scoreboard and header
	var footerWatcherTop = $sidebar.height() + $header.height() + 50;
	var footerWatcher = scrollMonitor.create( $footer, {top: footerWatcherTop} );
	var overviewHeight = $('#overview').outerHeight() /2;

	// the elements these two watch are going to have position: fixed.
	// we need to be sure that it always watches their original location.
	contentWatcher.lock();
	headerWatcher.lock();
	$sidebar.css({'top': -overviewHeight});
	contentWatcher.visibilityChange(function() {
		$content.toggleClass('fixed-sidebar', !contentWatcher.isInViewport);
	});
	headerWatcher.visibilityChange(function() {
		$content.toggleClass('fixed-sidebar', !headerWatcher.isInViewport);
		if($content.hasClass('fixed-sidebar')){
			$sidebar.css({'top': overviewHeight})
		} else {
			$sidebar.css({'top': -overviewHeight});
		}
	});

	footerWatcher.fullyEnterViewport(function() {
		if (footerWatcher.isAboveViewport) {
			$content.removeClass('fixed-sidebar')
			       .addClass('hug-footer')
			$sidebar.css({'top': 'auto'});
		}
	});
	footerWatcher.partiallyExitViewport(function() {
		if (!footerWatcher.isAboveViewport) {
			$content.addClass('fixed-sidebar')
			       .removeClass('hug-footer');
			$sidebar.css({'top': overviewHeight})
		}
	});

	if (footerWatcher.isAboveViewport) {
		$content.removeClass('fixed-sidebar')
		    .addClass('hug-footer')
	}

	$('.example-block').each(function(index, section) {
				
		var sectionWatcher = scrollMonitor.create(section);
		var sectionHash = $(this).attr('id');
		
		sectionWatcher.stateChange( function() {
			
			if (!sectionWatcher.isInViewport) {
			 	section.className = 'example-block';
			} else if (sectionWatcher.isInViewport && sectionWatcher.isAboveViewport) {
				
				section.className = 'example-block active';

				$('#tool-sidebar li a').each(function(){
					if($(this).attr('href') == "#"+sectionHash) {
						$('#tool-sidebar li a').removeClass('active');
						$(this).addClass('active');
					}
				});
				window.history.pushState(null, null, '#'+sectionHash);
				

			} else if (sectionWatcher.isAboveViewport) {
				section.className = 'example-block bottom';
			} else {
			 	section.className = 'example-block';
			}
			
		} )
	})

	// Scroll to links that don't have URL
	$('a[href*=\\#]:not([href=\\#])').on("click", function(e) {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top + 20
				}, 800);
				return false;
			}
		}
	});
	
});