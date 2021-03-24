window.addEventListener('load', function() {
	var search_bar = document.getElementById('search_bar');
	var search_clear = document.getElementById('search_clear');
	section_titles = document.querySelectorAll('.section_title');
	tiles = document.querySelectorAll('#homepage_content_container > a');
	search_bar.oninput = function() {
		filterTiles(search_bar.value);
	}
	search_clear.onclick = function() {
		search_bar.value = '';
		filterTiles('');
	}

}, false);

function filterTiles(searchText) {
	searchText = searchText.trim().toLowerCase();

	for (const tile of tiles) {
		var tileText = tile.textContent.replaceAll(/\s/g, '').toLowerCase();
		if (tileText.includes(searchText)) {
			tile.classList.remove('hidden');
		} else {
			tile.classList.add('hidden');
		}
	}

	if (searchText === '') {
		for (const element of section_titles) {
			element.classList.remove('hidden');
		}
	} else {
		for (const element of section_titles) {
			element.classList.add('hidden');
		}
	}

	// Special case for searching Java to hide JavaScript projects
	if (searchText === 'java') {
		for (const tile of tiles) {
			var tileText = tile.textContent.replaceAll(/\s/g, '').toLowerCase();
			if (tileText.includes('javascript')) {
				tile.classList.add('hidden');
			}
		}
	}
}
