if(window.Candy === undefined)
	Candy = {}

var RANDOMNAMES = ["obama",
	"bush",
	"cheney",
	"ford",
	"nixon",
	"reagan",
	"clinton",
	"carter",
	"washington",
	"taft",
	"madison",
	"anonymous",
	"coward",
	"lurker",
	"lincoln",
	"adams",
	"jefferson",
	"monroe",
	"quincyadams",
	"jackson",
	"vanburen",
	"harrison",
	"tyler",
	"polk",
	"taylor",
	"fillmore",
	"pierce",
	"buchanan",
	"johnson",
	"grant",
	"hayes",
	"garfield",
	"arthur",
	"cleveland",
	"mckinley",
	"roosevelt",
	"wilson",
	"harding",
	"coolidge",
	"hoover",
	"truman",
	"eisenhower",
	"kennedy"	 
];

var randomInt =  function(num) {
	return Math.floor(Math.random() * num) + 1;
};

Candy.generateRandomNick = function() {
	return RANDOMNAMES[randomInt(RANDOMNAMES.length) - 1] + (randomInt(900) + 100)
};
