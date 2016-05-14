var attack = 0;
var health = 0;
var availableCharacters = [];
var enemies = [];

$( "#cartman" ).data( "cartman", {heroName: "Cartman", hp: 180, ap: 15, cp: 15} );
$( "#kenny" ).data( "kenny", {heroName: "Kenny", hp: 80, ap: 30, cp: 20} );
$( "#mrhat" ).data( "mrhat", {heroName: "Mr. Hat", hp: 150, ap: 10, cp: 9} );
$( "#randy" ).data( "randy", {heroName: "Randy", hp: 120, ap: 8, cp: 12} );

function hpDisplay($id,$hp) {
	return $($id).append( "<p>" + $hp + "</p>");
}

function heroNameDisplay($id,$hp) {
	return $($id).prepend( "<p>" + $hp + "</p>");
}

$( document ).ready(function() {

	var cartmanData = $( "#cartman" ).data();
	heroNameDisplay("#cartman", cartmanData.cartman.heroName);
	hpDisplay("#cartman", cartmanData.cartman.hp);

	var kennyData = $( "#kenny" ).data();
	heroNameDisplay("#kenny", kennyData.kenny.heroName);
	hpDisplay("#kenny", kennyData.kenny.hp);

	var mrhatData = $( "#mrhat" ).data();
	heroNameDisplay("#mrhat", mrhatData.mrhat.heroName);
	hpDisplay("#mrhat", mrhatData.mrhat.hp);

	var randyData = $( "#randy" ).data();
	heroNameDisplay("#randy", randyData.randy.heroName);
	hpDisplay("#randy", randyData.randy.hp);

});