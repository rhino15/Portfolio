//variables and containers for the game

var heroAttack = 0;
var heroHealth = 0;
var attackCounter = 0;
var enemyDivId = "";
var villainAttack = 0;
var villainHealth = 0;
var heroClicked = false;

$( "#cartman" ).data({divId: "cartman", heroName: "Cartman", hp: 180, ap: 15, cp: 15} );
$( "#kenny" ).data({divId: "kenny", heroName: "Kenny", hp: 80, ap: 30, cp: 20} );
$( "#mrhat" ).data({divId: "mrhat", heroName: "Mr. Hat", hp: 150, ap: 10, cp: 9} );
$( "#randy" ).data({divId: "randy", heroName: "Randy", hp: 120, ap: 8, cp: 12} );

//functions for game
function hpDisplay($id,$hp) {
	return $($id).html( "<p>" + $hp + "</p>");
}

function heroNameDisplay($id,$heroName) {
	return $($id).html( "<p>" + $heroName + "</p>");
}

function updateValues() {
	var cartmanData = $( "#cartman" ).data();
	hpDisplay("#cartmanHp", cartmanData.hp);

	var kennyData = $( "#kenny" ).data();
	hpDisplay("#kennyHp", kennyData.hp);

	var mrhatData = $( "#mrhat" ).data();
	hpDisplay("#mrhatHp", mrhatData.hp);

	var randyData = $( "#randy" ).data();
	hpDisplay("#randyHp", randyData.hp);
}

function reset() {
	
}


//jquery functions for click events and assigning
$( document ).ready(function() {
	updateValues();

	var heroData, enemyData;

	var captureHeroImage;
	$(".character").on("click", function() {
		// this is the elment that got clicked

		if (heroClicked) { 
			// attach to villain 
			$("#defender").append(this);
			enemyData = $(this).data();
			enemyDivId = "#" + enemyData.divId;

		} else { 
			// attach to hero 
			$("#pickedCharacter").append(this);
			$(".characterList .character").addClass("villains");
			heroData = $(this).data();
			heroClicked = true;
			$("#" + heroData.divId).off("click");
			attackCounter = heroData.ap;
		}
		updateValues();

	});

	$("#attack").on("click", function() {
		heroData.hp -= enemyData.cp;
		enemyData.hp -= heroData.ap;
		heroData.ap += attackCounter;
		updateValues();
		if (enemyData.hp <= 0) {;
			$(enemyDivId).hide();
			
		}

	});
});