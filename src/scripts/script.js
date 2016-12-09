(function($){
   
   'use strict';
   
   $(document).ready(function(){
       
   });
   
})(jQuery);

$(document).ready(function(){

	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
		});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

	})(jQuery);

});

$(document).ready(function(){
     		$('#slider').bxSlider({
    		ticker: true,
    		tickerSpeed: 5000,
			tickerHover: true
  		});
  		});

//TIMELINE GUILINE
jQuery(document).ready(function($){
	var timelineBlocks = $('.guidelines-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.guidelines-img, .guidelines-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.guidelines-img').hasClass('is-hidden') ) && $(this).find('.guidelines-img, .guidelines-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});


//TESTIMONIAL
var testimonials = {};

testimonials.slider = (function(){
  var currentItemIndex = 0,
      prevBtn = $('.prev-testimonial'),
      nextBtn = $('.next-testimonial'),
      items = (function(){
        var items = [];
        $('.testimonial').each(function(){
          items.push($(this));
        });
        return items;
      })();
  
  function getCurrent(){
    $('.testimonial').each(function(index){
      $(this).removeClass('current');
    });
    $('.testimonial').eq(currentItemIndex).addClass('current');
  }
  
  function greyOut(prevBtn, nextBtn){
    if($(prevBtn).hasClass('grey-out')){
      $(prevBtn).removeClass('grey-out');
    }
    if($(nextBtn).hasClass('grey-out')){
      $(nextBtn).removeClass('grey-out');
    }
    if(currentItemIndex == 0){
      $(prevBtn).addClass('grey-out');
    }
    if(currentItemIndex == items.length -1){
      $(nextBtn).addClass('grey-out');
    }
  }

  	return{
    init: function(prevBtn, nextBtn){
      items[currentItemIndex].addClass('current');
      greyOut(prevBtn, nextBtn);
      $(prevBtn).click(function(){
        if(currentItemIndex > 0){
          currentItemIndex--;
        }
        getCurrent();
        greyOut(prevBtn, nextBtn);
      });
      $(nextBtn).click(function(){
        if(currentItemIndex < items.length - 1){
          currentItemIndex++;
        }
        getCurrent();
        greyOut(prevBtn, nextBtn);
      });
    }
  };
  
})();

testimonials.slider.init('.prev-testimonial', '.next-testimonial');