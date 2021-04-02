window.addEventListener('load', function() {
	var back_button = document.getElementById('back_button');
	back_button.onclick = function(e) {
		e.preventDefault();
		if (document.referrer === 'https://dapirra.github.io/' ||
		document.referrer.startsWith('http://127.0.0.1')) {
			history.back();
		} else {
			location.href = '/';
		}
		return false;
	}
}, false);
