// College Projects
const flashcards = '/flashcards';
const packpackmonsters = '/packpackmonsters';
const cpu_simulator = '/cpu_simulator';
const memory_simulator = '/memory_simulator';
const jadvise = '/jadvise';
const minesweeper = '/minesweeper';
const iphone_memory_game = '/iphone_memory_game';

// Personal Projects
const long_island_job_filter = '/long_island_job_filter';
const tempbot = '/tempbot';
const autoit_multiprocessing = '/autoit_multiprocessing';
const monitor_off = '/monitor_off';
const router_restarter = '/router_restarter';
const uniform_generator = '/uniform_generator';
const edge_only_plugin = '/edge_only_plugin';
const flashcards_mockup = '/flashcards_mockup';

// Exercises
const miwok = '/miwok';

// Snippets
const procedurally_generated_forest = '/procedurally_generated_forest';
const filename_fixer = '/filename_fixer';
const apng_thing = '/apng_thing';
const mips_happy_birthday = '/mips_happy_birthday';

// Other
const resume = '/David%20Pirraglia%20Resume.pdf';

const directory = {
	'resu': resume,
	'flash': {
		'mock': flashcards_mockup,
		'': flashcards
	},
	'pack': packpackmonsters,
	'mons': packpackmonsters,
	'ppm': packpackmonsters,
	'cpu': cpu_simulator,
	'mem': {
		'sim': memory_simulator,
		'iphone': iphone_memory_game,
		'game': iphone_memory_game,
		'': memory_simulator,
	},
	'ram': memory_simulator,
	'jad': jadvise,
	'adv': jadvise,
	'mine': minesweeper,
	'iphone': iphone_memory_game,
	'lijf': long_island_job_filter,
	'long': long_island_job_filter,
	'temp': tempbot,
	'mon': monitor_off,
	'off': monitor_off,
	'screen': monitor_off,
	'eop': edge_only_plugin,
	'edge': edge_only_plugin,
	'plug': edge_only_plugin,
	'paint': edge_only_plugin,
	'multi': autoit_multiprocessing,
	'route': router_restarter,
	'restart': router_restarter,
	'uniform': uniform_generator,
	'miw': miwok,
	'wok': miwok,
	'mock': flashcards_mockup,
	'forest': procedurally_generated_forest,
	'file': filename_fixer,
	'fix': filename_fixer,
	'png': apng_thing,
	'happy': mips_happy_birthday,
	'birth': mips_happy_birthday
};

function guessPageDict(url, dir=directory, _couldBeDupChars=true) {
	console.log('test: ' + url);
	for (item in dir) {
		if (url.includes(item)) {
			return typeof dir[item] === 'string' ?
				dir[item] : guessPageDict(url, dir[item], _couldBeDupChars);
		}
	}

	if (_couldBeDupChars) { // Remove duplicate characters and try again
		return guessPageDict(url.replace(/(.)\1+/g, '$1'), dir, false);
	}
}

if (!location.pathname.startsWith('/404')) {
	var page = guessPageDict(location.pathname.toLowerCase());
	if (page !== undefined) {
		location.replace(page);
	}
}

// if (!location.pathname.startsWith('/404')) {
// 	var userURL = location.pathname.toLowerCase();
// 	var guessedURL = guessPageDict(userURL);
// 	if (guessedURL !== undefined) {
// 		location.replace(guessedURL);
// 	}
// }

///////////////////////////// Must be the 404 page /////////////////////////////

college_projects = [
	flashcards,
	packpackmonsters,
	cpu_simulator,
	memory_simulator,
	jadvise,
	minesweeper,
	iphone_memory_game
];

personal_projects = [
	long_island_job_filter,
	tempbot,
	monitor_off,
	autoit_multiprocessing,
	edge_only_plugin,
	router_restarter,
	uniform_generator,
	flashcards_mockup
];

exercises = [
	miwok
];

snippets = [
	procedurally_generated_forest,
	filename_fixer,
	apng_thing,
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
	populateLists(exercises, document.getElementById('exercises'));
	populateLists(snippets, document.getElementById('snippet'));
}, false);
