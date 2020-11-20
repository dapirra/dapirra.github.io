window.onload = function () {
	// Variables
	const page_container = document.getElementById('page_container');
	const image_container = document.getElementById('image_container');
	const full_image = document.getElementById('full_image');
	let isImageShown = false;

	function gallery_close() {
		image_container.style.visibility = 'hidden';
		page_container.style.filter = 'brightness(1)';
		isImageShown = false;
	}

	document.body.onclick = function () { // Close the image when clicking away
		if (isImageShown) {
			gallery_close();
		}
	};

	document.body.onkeyup = function (e) { // Close the image when Esc is pressed
		if (isImageShown && e.key === 'Escape') {
			gallery_close();
		}
	};

	full_image.onclick = function (e) {
		e.stopPropagation(); // Stop the image from closing when clicking on it
	};

	document.getElementById('image_gallery').childNodes.forEach(function (image_link) {
		image_link.onclick = function (e) {
			e.preventDefault();
			if (!isImageShown) {
				e.stopPropagation();
				page_container.style.filter = 'brightness(0.5)';
				full_image.src = image_link.href;
				image_container.style.visibility = 'visible';
				isImageShown = true;
			}
		};
	});
};
