$(document).ready(function(){
  var $sections = $('.left-subtitle');
  var previousSection = $sections[0];


  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop() + (window.innerWidth > 900 ? 160 : 80);
    var $currentSection
    
    $sections.each(function(){
      var divPosition = $(this).offset().top;
      
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);  
      }
      
      if ($currentSection != previousSection) {
      	$('.offer-menu-item').removeClass('offer-menu-item__active');
   	    var sect = $currentSection || $sections;
   	    $("a[data-name='"+sect[0].innerHTML+"']").addClass('offer-menu-item__active');
   	  	previousSection = $currentSection;
   	  }
    });
  });



  const items = [].slice.call(document.querySelectorAll('.offer-menu-item'));
	items.forEach((item, idx) => {

		item.addEventListener('click', (e) => {

			items.forEach( el => el.classList.remove('offer-menu-item__active') );

			e.preventDefault();

			let name = 'h2[data-name="' + item.text + '"]';


			const pos = $(name).offset().top -  (window.innerWidth > 900 ? 160 : 80);
			const speed = Math.min( Math.abs($(window).scrollTop() - pos), 900 );

			$('html, body').animate({
				scrollTop: pos,
			}, speed);

			item.classList.add('offer-menu-item__active');

		});
	});
});