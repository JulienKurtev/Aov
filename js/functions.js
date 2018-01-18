;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$(window).load(function() {
		
		var $container = initIsotope();

		$('.list-grids a.list-view').on('click', function (event) {
			$container.isotope('destroy');
		})

		$('.list-grids a.grid-view').on('click', function(){
			$container = initIsotope();
		})
	});

	$doc.ready(function() {
		
		
		
		
			(function(){
    // This class will be added to the expanded item
    var activeItemClass = 'accordion-expanded';
    var accordionItemSelector = '.accordion-section';
    var toggleSelector = '.accordion-head';
 
    $(toggleSelector).on('click', function() {
 
        $(this)
            .closest(accordionItemSelector) // go up to the accordion item element
            .toggleClass(activeItemClass)
                .siblings()
                .removeClass(activeItemClass);
    });
 
})();

		//Typed plugin	
		$(function(){
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
             typeSpeed: 60,
            backDelay: 500,
            loop: true
        });
    });
		
		// Show/Hide Section Head
		$('.info a').on('click', function (event) {

			$(this).toggleClass('active');

			$('.section .section-head').slideToggle();
			event.preventDefault();
		});

		//Play video
		$('.btn-play').on('click', function (e) {
            playVideo($(this).parents('.section-video').addClass('active')
               .find('iframe'));
		           e.preventDefault();
		});
		       
        function playVideo($iframe) {
            var src = $iframe.data('video-url');
            $iframe.attr('src', src+'?autoplay=1&loop=1&rel=0&controls=0&showinfo=0&wmode=transparent');
        };

		// Change List Gallery Grid
		$('.list-grids a').on('click', function (event) {

			var parent = $(this).parent()

			if(!parent.hasClass('clicked')){

				parent.toggleClass('active clicked');
				parent.siblings().removeClass('active clicked');

				var viewClass = $(this).data('class')
				$('.list-gallery').children().attr('class', viewClass)
			}



			event.preventDefault();
		});

		// MagnificPopup Gallery
		$('.list-gallery ul').magnificPopup({
           delegate: '.grid-item a',
           type: 'image',
           closeOnContentClick: true,
           closeBtnInside: false,  
	       gallery: { enabled:true },
		});


		// Scroll button
       $(function() {
           $('.btn-down').on('click', function(e) {
               e.preventDefault();
               $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
           });
       });

       // Scroll Grid button
       $(function() {
           $('.list-grids a').on('click', function(e) {
               e.preventDefault();
               $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
           });
       });

       // Tabs
       var activeTabClass = 'current';
          
        $('.tabs-nav a').on('click', function(event) {
	        var $tabLink = $(this);
	        var $targetTab = $($tabLink.attr('href'));
	   
	        $tabLink
	            .parent() // go up to the <li> element
	            .add($targetTab)
	            .addClass(activeTabClass)
	                .siblings()
	                .removeClass(activeTabClass);
	          
	        event.preventDefault();
      	});

	});

	function initIsotope() {
		return $('.list-gallery').isotope({
			itemSelector: '.list-gallery li',
			layoutMode: 'masonry'
		});		
	}
	


})(jQuery, window, document);
