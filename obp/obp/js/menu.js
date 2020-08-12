(function() {

	const open = document.querySelector('.burger');
	const close = document.querySelector('.slide_menu-button');
	const overlay = document.querySelector('.slide_menu-overlay');
	const menu = document.querySelector('.slide_menu-wrapper');
	

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



