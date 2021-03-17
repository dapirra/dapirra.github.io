testguessPageDict = function () {
	console.assert(guessPageDict('error') === resume);
	console.assert(guessPageDict('resum') === resume);
	console.assert(guessPageDict('resume') === resume);
	console.assert(guessPageDict('flash') === flashcards_app);
	console.assert(guessPageDict('flashmock') === flashcards_mockup);
	console.assert(guessPageDict('pack') === packpackmonsters);
	console.assert(guessPageDict('mons') === packpackmonsters);
	console.assert(guessPageDict('cpu') === cpu_simulator);
	console.assert(guessPageDict('cpusim') === cpu_simulator);
	console.assert(guessPageDict('mem') === memory_simulator);
	console.assert(guessPageDict('memsim') === memory_simulator);
	console.assert(guessPageDict('memiphone') === iphone_memory_game);
	console.assert(guessPageDict('memgame') === iphone_memory_game);
	console.assert(guessPageDict('ram') === memory_simulator);
	console.assert(guessPageDict('jad') === jadvise);
	console.assert(guessPageDict('adv') === jadvise);
	console.assert(guessPageDict('mine') === minesweeper);
	console.assert(guessPageDict('iphone') === iphone_memory_game);
	console.assert(guessPageDict('temp') === tempbot);
	console.assert(guessPageDict('png') === apng_thing);
	console.assert(guessPageDict('multi') === autoit_multiprocessing);
	console.assert(guessPageDict('mon') === monitor_off);
	console.assert(guessPageDict('off') === monitor_off);
	console.assert(guessPageDict('route') === router_restarter);
	console.assert(guessPageDict('restart') === router_restarter);
	console.assert(guessPageDict('uniform') === uniform_generator);
	console.assert(guessPageDict('mock') === flashcards_mockup);
	console.assert(guessPageDict('eop') === edge_only_plugin);
	console.assert(guessPageDict('edge') === edge_only_plugin);
	console.assert(guessPageDict('plug') === edge_only_plugin);
	console.assert(guessPageDict('paint') === edge_only_plugin);
	console.assert(guessPageDict('forest') === procedurally_generated_forest);
	console.assert(guessPageDict('file') === filename_fixer);
	console.assert(guessPageDict('fix') === filename_fixer);
	console.assert(guessPageDict('happy') === mips_happy_birthday);
	console.assert(guessPageDict('birth') === mips_happy_birthday);

	// Old URL format
	console.assert(guessPageDict('/apng_thing.html') === apng_thing);
	console.assert(guessPageDict('/autoit_multiprocessing.html') === autoit_multiprocessing);
	console.assert(guessPageDict('/cpu_simulator.html') === cpu_simulator);
	console.assert(guessPageDict('/filename_fixer.html') === filename_fixer);
	console.assert(guessPageDict('/flashcards_app.html') === flashcards_app);
	console.assert(guessPageDict('/flashcards_mockup.html') === flashcards_mockup);
	console.assert(guessPageDict('/iphone_memory_game.html') === iphone_memory_game);
	console.assert(guessPageDict('/memory_simulator.html') === memory_simulator);
	console.assert(guessPageDict('/minesweeper.html') === minesweeper);
	console.assert(guessPageDict('/mips_happy_birthday.html') === mips_happy_birthday);
	console.assert(guessPageDict('/packpackmonsters.html') === packpackmonsters);
	console.assert(guessPageDict('/procedurally_generated_forest.html') === procedurally_generated_forest);
	console.assert(guessPageDict('/tempbot.html') === tempbot);
	console.assert(guessPageDict('/uniform_generator.html') === uniform_generator);

}

window.addEventListener('load', function() {
	testguessPageDict();
}, false);
