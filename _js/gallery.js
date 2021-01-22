window.onload = function () {
	document.body.insertAdjacentHTML('afterbegin',
	'<div id="image_container" ' +
		'style="visibility: hidden;">' +
		'<img id="full_image" />' +
		'<div id="image_prev" class="gallery_button">&lt;</div>' +
		'<div id="image_next" class="gallery_button">&gt;</div>' +
		'<div id="image_close" class="gallery_button">X</div>' +
	'</div>');

	const page_container = document.getElementById('page_container');
	const image_container = document.getElementById('image_container');
	const image_gallery = document.getElementById('image_gallery');
	const full_image = document.getElementById('full_image');
	const image_prev = document.getElementById('image_prev');
	const image_next = document.getElementById('image_next');
	let isImageShown = false;
	HTMLCollectionToArray = x => [].slice.call(x);
	all_image_links = [];
	currentImage = 0;

	function gallery_close() {
		image_container.style.visibility = 'hidden';
		page_container.style.filter = 'brightness(1)';
		isImageShown = false;
	}

	function gallery_prev() {
		if (currentImage === 0) return;
		full_image.src = all_image_links[--currentImage];
		image_gallery.children[currentImage].scrollIntoView({block: 'nearest'});
	}

	function gallery_next() {
		if (currentImage === all_image_links.length - 1) return;
		full_image.src = all_image_links[++currentImage];
		image_gallery.children[currentImage].scrollIntoView({block: 'nearest'});
	}

	document.body.onclick = function () { // Close the image when clicking away
		if (isImageShown) {
			gallery_close();
		}
	};

	document.body.onkeyup = function (e) { // Close the image when Esc is pressed
		if (isImageShown) {
			switch (e.key) {
				case 'Escape':
					gallery_close();
					break;
				case 'ArrowLeft':
					gallery_prev();
					break;
				case 'ArrowRight':
					gallery_next();
			}
		}
	};

	image_gallery.onmousewheel = function (e) {
		e.preventDefault();
		if (e.deltaY > 0) {
			image_gallery.scrollLeft += 50;
		} else {
			image_gallery.scrollLeft -= 50;
		}
	};

	full_image.onclick = function (e) {
		e.stopPropagation(); // Stop the image from closing when clicking on it
		if (e.clientX < window.innerWidth / 2) {
			gallery_prev();
		} else {
			gallery_next();
		}
	};

	image_prev.onclick = function (e) {
		e.stopPropagation();
		gallery_prev();
	};

	image_next.onclick = function (e) {
		e.stopPropagation();
		gallery_next();
	};

	HTMLCollectionToArray(document.getElementById('image_gallery').children).forEach(function (image_link, index) {
		image_link.setAttribute('index', index);
		all_image_links.push(image_link.href);

		image_link.onclick = function (e) {
			e.preventDefault();
			if (!isImageShown) {
				e.stopPropagation();
				page_container.style.filter = 'brightness(0.5)';
				full_image.src = e.currentTarget.href;
				image_container.style.visibility = 'visible';
				isImageShown = true;
				currentImage = Number(e.currentTarget.getAttribute('index'));
			}
		};
	});

	if (all_image_links.length <= 1) { // Hides prev/next buttons when only 1 image
		image_prev.style.display = 'none';
		image_next.style.display = 'none';
		image_gallery.firstElementChild.firstElementChild.style.maxWidth = '100%';
		image_gallery.onmousewheel = null;
	}
};
