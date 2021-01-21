// College Projects
const flashcards_app = 'flashcards_app.html';
const packpackmonsters = 'packpackmonsters.html';
const cpu_simulator = 'cpu_simulator.html';
const memory_simulator = 'memory_simulator.html';
const minesweeper = 'minesweeper.html';
const iphone_memory_game = 'iphone_memory_game.html';

// Personal Projects
const tempbot = 'tempbot.html';
const apng_thing = 'apng_thing.html';
const autoit_multiprocessing = 'autoit_multiprocessing.html';
const uniform_generator = 'uniform_generator.html';
const flashcards_mockup = 'flashcards_mockup.html';

// Snippets
const procedurally_generated_forest = 'procedurally_generated_forest.html';
const filename_fixer = 'filename_fixer.html';
const mips_happy_birthday = 'mips_happy_birthday.html';

directory = {
	'flash': {
		'mock': flashcards_mockup,
		'': flashcards_app
	},
	'pack': packpackmonsters,
	'cpu': cpu_simulator,
	'mem': {
		'sim': memory_simulator,
		'iphone': iphone_memory_game,
		'game': iphone_memory_game,
		'': memory_simulator,
	},
	'mine': minesweeper,
	'iphone': iphone_memory_game,
	'temp': tempbot,
	'png': apng_thing,
	'multi': autoit_multiprocessing,
	'uniform': uniform_generator,
	'mock': flashcards_mockup,
	'forest': procedurally_generated_forest,
	'file': filename_fixer,
	'fix': filename_fixer,
	'happy': mips_happy_birthday,
	'birth': mips_happy_birthday
}

function guessPageDict(url, dir) {
	for (item in dir) {
		if (url.includes(item, 1)) {
			return typeof dir[item] === 'string' ? dir[item] : guessPageDict(url, dir[item])
		}
	}
}

if (!location.pathname.startsWith('/404')) {
	var page = guessPageDict(location.pathname, directory);
	if (page !== undefined) {
		location.replace(page);
	}
}

///////////////////////////// Must be the 404 page /////////////////////////////

college_projects = [
	flashcards_app,
	packpackmonsters,
	cpu_simulator,
	memory_simulator,
	minesweeper,
	iphone_memory_game
];

personal_projects = [
	tempbot,
	apng_thing,
	autoit_multiprocessing,
	uniform_generator,
	flashcards_mockup
];

snippets = [
	procedurally_generated_forest,
	filename_fixer,
	mips_happy_birthday
];

window.onload = function() {
	const college = document.getElementById('college');
	const personal = document.getElementById('personal');
	const snippet = document.getElementById('snippet');
	for (var project of college_projects) {
		college.insertAdjacentHTML('beforeend', '<li><a href="' + project + '">' + project + '</a></li>')
	}
	for (var project of personal_projects) {
		personal.insertAdjacentHTML('beforeend', '<li><a href="' + project + '">' + project + '</a></li>')
	}
	for (var project of snippets) {
		snippet.insertAdjacentHTML('beforeend', '<li><a href="' + project + '">' + project + '</a></li>')
	}
};
