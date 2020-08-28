

(function() {

	const open = document.querySelector('.icon__open');
	const close = document.querySelector('.icon__close');
	const overlay = document.querySelector('.slide-menu-overlay-wrapper');
	const menu = document.querySelector('.slide-menu-overlay');
	



	overlay.style.height = window.innerHeight +'px';
	menu.style.height =  window.innerHeight  + 'px';

	window.addEventListener('resize', function() {
		if (window.innerHeight > 600) {

			overlay.style.height = window.innerHeight + 'px';
			menu.style.height =  window.innerHeight  + 'px';
		} else {
			overlay.style.height = '650px';
			menu.style.height = '650px';
		}
		
	});
		


	open.addEventListener('click', function(e) {
		overlay.style.display = 'block';
		
		setTimeout(function() {
			menu.style.left = '0%';
			overlay.style.opacity = 1;
		}, 1);
	});


	close.addEventListener('click', function(e) {
		menu.style.left = '-30%';
		overlay.style.opacity = 0;
		
		setTimeout(function() {
			overlay.style.display = 'none';
		}, 300);
	});


	overlay.addEventListener('click', function(e) {
		if (e.target == overlay) {
			menu.style.left = '-30%';
			overlay.style.opacity = 0;
			
			setTimeout(function() {
				overlay.style.display = 'none';
			}, 300);
		}
	});

})();