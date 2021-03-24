window.addEventListener('load', function() {
	var search_bar = document.getElementById('search_bar');
	tiles = document.querySelectorAll('.card');
	search_bar.oninput = function() {
		filterTiles(search_bar.value);
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
		if (searchText === '') {
			document.querySelectorAll('.section_title').forEach(function (element) {
				element.classList.remove('hidden');
			});
		} else {
			document.querySelectorAll('.section_title').forEach(function (element) {
				element.classList.add('hidden');
			});
		}
	}
}
