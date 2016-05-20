//variables and containers for the game

var attack = 0;
var health = 0;
var availableCharacters = [];
var enemies = [];
var hasPickedCharacter = false;

$( "#cartman" ).data( "cartman", {divId: "cartman", heroName: "Cartman", hp: 180, ap: 15, cp: 15} );
$( "#kenny" ).data( "kenny", {divId: "kenny", heroName: "Kenny", hp: 80, ap: 30, cp: 20} );
$( "#mrhat" ).data( "mrhat", {divId: "mrhat", heroName: "Mr. Hat", hp: 150, ap: 10, cp: 9} );
$( "#randy" ).data( "randy", {divId: "randy", heroName: "Randy", hp: 120, ap: 8, cp: 12} );

//functions for game
function hpDisplay($id,$hp) {
	return $($id).append( "<p>" + $hp + "</p>");
}

function heroNameDisplay($id,$heroName) {
	return $($id).prepend( "<p>" + $heroName + "</p>");
}

//jquery functions for click events and assigning
$( document ).ready(function() {

	var cartmanData = $( "#cartman" ).data();
	availableCharacters.push(cartmanData);
	heroNameDisplay("#cartman", cartmanData.cartman.heroName);
	hpDisplay("#cartman", cartmanData.cartman.hp);

	var kennyData = $( "#kenny" ).data();
	availableCharacters.push(kennyData);
	heroNameDisplay("#kenny", kennyData.kenny.heroName);
	hpDisplay("#kenny", kennyData.kenny.hp);

	var mrhatData = $( "#mrhat" ).data();
	availableCharacters.push(mrhatData);
	heroNameDisplay("#mrhat", mrhatData.mrhat.heroName);
	hpDisplay("#mrhat", mrhatData.mrhat.hp);

	var randyData = $( "#randy" ).data();
	availableCharacters.push(randyData);
	heroNameDisplay("#randy", randyData.randy.heroName);
	hpDisplay("#randy", randyData.randy.hp);

	var captureImage;
	$(".image").on('click', function() {
		captureImage = $(this).detach();
		$(this).addClass("hero");
		(captureImage).appendTo("#pickedCharacter");
		$(".hero").off("click");
		$(".image").siblings().addClass("villains");
		$(".villains").detach().appendTo("#enemies");		
	});
});