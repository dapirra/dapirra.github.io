// College Projects
const flashcards_app = '/flashcards_app';
const packpackmonsters = '/packpackmonsters';
const cpu_simulator = '/cpu_simulator';
const memory_simulator = '/memory_simulator';
const minesweeper = '/minesweeper';
const iphone_memory_game = '/iphone_memory_game';

// Personal Projects
const tempbot = '/tempbot';
const apng_thing = '/apng_thing';
const autoit_multiprocessing = '/autoit_multiprocessing';
const uniform_generator = '/uniform_generator';
const edge_only_plugin = '/edge_only_plugin';
const flashcards_mockup = '/flashcards_mockup';

// Snippets
const procedurally_generated_forest = '/procedurally_generated_forest';
const filename_fixer = '/filename_fixer';
const mips_happy_birthday = '/mips_happy_birthday';

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
	'edge': edge_only_plugin,
	'plug': edge_only_plugin,
	'paint': edge_only_plugin,
	'forest': procedurally_generated_forest,
	'file': filename_fixer,
	'fix': filename_fixer,
	'happy': mips_happy_birthday,
	'birth': mips_happy_birthday
};

function guessPageDict(url, dir) {
	for (item in dir) {
		if (url.includes(item, 1)) {
			return typeof dir[item] === 'string' ?
				dir[item] : guessPageDict(url, dir[item]);
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
	edge_only_plugin,
	flashcards_mockup
];

snippets = [
	procedurally_generated_forest,
	filename_fixer,
	mips_happy_birthday
];

function populateLists(category_array, node) {
	for (var project of category_array) {
		node.insertAdjacentHTML('beforeend', '<li><a href="' + project + '">'
								+ project + '</a></li>');
	}
}

window.addEventListener('load', function() {
	document.getElementById('home').textContent = location.hostname;
	populateLists(college_projects, document.getElementById('college'));
	populateLists(personal_projects, document.getElementById('personal'));
	populateLists(snippets, document.getElementById('snippet'));
}, false);
