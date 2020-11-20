window.onload = function () {
	const page_container = document.getElementById('page_container');
	const image_container = document.getElementById('image_container');
	const full_image = document.getElementById('full_image');
	let isImageShown = false;

	document.body.onclick = function () { // Close the image when clicking away
		if (isImageShown) {
			image_container.style.visibility = 'hidden';
			page_container.style.filter = 'brightness(1)';
			isImageShown = false;
		}
	};

	// Stop the image from closing when clicking on it
	full_image.onclick = function (e) {
		e.stopPropagation();
	};

	document.getElementById('images').childNodes.forEach(function (image) {
		image.onclick = function (e) {
			e.preventDefault();
			if (!isImageShown) {
				e.stopPropagation();
				page_container.style.filter = 'brightness(0.5)';
				full_image.src = image.firstElementChild.src;
				image_container.style.visibility = 'visible';
				isImageShown = true;
			}
		};
	});
};
