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

function guessPage(url) {
	if (url.includes('flash')) {
		if (url.includes('mock')) {
			return flashcards_mockup;
		} else {
			return flashcards_app;
		}
	} else if (url.includes('pack')) {
		return packpackmonsters;
	} else if (url.includes('cpu')) {
		return cpu_simulator;
	} else if (url.includes('mem')) {
		if (url.includes('sim')) {
			return memory_simulator;
		} else if (url.includes('iphone') ||
					url.includes('game')) {
			return iphone_memory_game;
		} else {
			return memory_simulator;
		}
	} else if (url.includes('mine')) {
		return minesweeper;
	} else if (url.includes('iphone')){
		return iphone_memory_game;
	} else if (url.includes('temp')) {
		return tempbot;
	} else if (url.includes('png')) {
		return apng_thing;
	} else if (url.includes('autoit') && url.includes('multi')) {
		return autoit_multiprocessing;
	} else if (url.includes('uniform')) {
		return uniform_generator;
	} else if (url.includes('mock')) {
		return flashcards_mockup;
	} else if (url.includes('forest')) {
		return procedurally_generated_forest;
	} else if (url.includes('file') || url.includes('fix')) {
		return filename_fixer;
	} else if (url.includes('happy') || url.includes('birth')) {
		return mips_happy_birthday;
	}
}

if (!location.pathname.startsWith('/404')) {
	var page = guessPage(location.pathname);
	if (page !== undefined) {
		location.replace(page);
	}
}
