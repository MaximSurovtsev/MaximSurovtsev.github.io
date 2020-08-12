(function() {

	function getCoords(elem) {
		let box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	}
	
	const sticky = document.querySelector('.nav-wrapper');
	const button = document.querySelector('.js-button');

	let sticky_pos = getCoords(sticky).top;

	window.addEventListener('scroll', function(e) {
		if (window.pageYOffset > sticky_pos - 80 && window.innerWidth > 900) {
			button.style.opacity = '1';
			button.style.width = '250px';
			button.style.marginLeft = '30px';
			sticky.classList.add('sticky');
		} else if (window.pageYOffset < sticky_pos - 200) {
			button.style.opacity = '0';
			button.style.width = '0px';
			button.style.marginLeft = '0px';
			sticky.classList.remove('sticky');
		}
	});

})();