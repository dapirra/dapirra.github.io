window.addEventListener('load', function() {
	var search_bar = document.getElementById('search_bar');
	var search_clear = document.getElementById('search_clear');
	section_titles = document.querySelectorAll('.section_title');
	tiles = document.querySelectorAll('.card');
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
		var tileTitle = tile.firstElementChild.firstElementChild.textContent.toLowerCase();
		var tileParent = tile.parentElement;
		if (tileTitle.includes(searchText)) {
			tileParent.classList.remove('hidden');
		} else {
			tileParent.classList.add('hidden');
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
}
