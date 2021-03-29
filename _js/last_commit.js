window.addEventListener('load', function() {
	var lastCommitCheck = sessionStorage.getItem('lastCommitCheck');
	if (lastCommitCheck && (new Date().getTime() - lastCommitCheck < 300000)) { // 300000 = 5 minutes
		console.log('Loading Last Commit Time');
		setUpdatedValue(sessionStorage.getItem('lastCommit'));
	} else {
		console.log('Downloading Last Commit Time');
		downloadLastCommitTime();
	}
}, false);

function downloadLastCommitTime() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var date = new Date(JSON.parse(this.responseText).commit.committer.date)
				.toLocaleString('en-US', {timeZone: 'America/New_York'}).replace(',', '');

			setUpdatedValue(date);

			sessionStorage.setItem('lastCommit', date);
			sessionStorage.setItem('lastCommitCheck', new Date().getTime());
		}
	};

	xhttp.open(
		'GET',
		'https://api.github.com/repos/dapirra/dapirra.github.io/commits/master',
		true
	);

	xhttp.send();
}

function setUpdatedValue(date) {
	var element = document.querySelector('.footer_right').firstElementChild;
	// element.innerText = (window.innerWidth > 400 ? 'Last Commit: ' : '') + date;
	element.innerText = 'Updated: ' + date;
	if (window.innerWidth < 400) {
		document.querySelector('.footer_left').textContent = 'Created by David Pirraglia';
	}
}
