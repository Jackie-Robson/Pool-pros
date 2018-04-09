"use strict";

var dealers;
var values = [];
var selector;
var selected;


$( '.option' ).click( function() {
	var selector = $( 'input:checkbox' ).map( function() {
		return this.checked ? ' ' + this.id : '';
	} ).get().join( '' );
	console.log( selector );
} );

function generateCards() {

	selected = $( '[name="checkbox"]:checked' );
	for ( let i = 0; i < selected.length; i++ ) {
		values.push( selected[ i ].value );
	};
	$.getJSON( "app/dealers.json", function( i ) {
		var data = i.dealers;
		var content = '';
		var dealers = data;
		for ( var i = 0; i < dealers.length; i++ ) {
			var dealer = dealers[ i ][ 'data' ];
			var sat = ( dealer.weekHours.sat ) ? ( dealer.weekHours.sat == 'On Call' ) ? '- On Call' : dealer.weekHours.sat : '- CLOSED';
			var sun = ( dealer.weekHours.sun ) ? ( dealer.weekHours.sun == 'On Call' ) ? '- On Call' : dealer.weekHours.sun : '- CLOSED';
			var certifications = dealer.certifications;

			function getCertifications() {
				var certs = [];
				for ( var i = 0; i < certifications.length; i++ ) {
					certs.push( '<li data-cert="' + certifications[ i ] + '"><img src="../assets/img/' + certifications[ i ] + '.png">' + certifications[ i ] + '</li>' );
				};
				return certs.join( '' );
			}

			var mobilePhone = dealer.phone1.replace( /-/g, '.' );
			var result = '<li> \n\
				<div class="title"> \n\
					<h2>' + dealer.name + '</h2> \n\
				</div> \n\
				<div class="desktopNumber"> \n\
					<img src="../assets/img/phone-icon-desktop.png" alt="phone" /><span >' + dealer.phone1 + '</span> \n\
				</div> \n\
				<div class="mobileNumber"> \n\
					<a  href="tel:' + dealer.phone1 + '"><img src="../assets/img/phone-icon-mobile.png" alt="phone" />Tap to call <span>' + mobilePhone + '</span></a> \n\
				</div>\n\
				<p>Can\'t talk now? Click below to send an email.</p> \n\
				<div class="emailContact" ><a href="#"><img src="../assets/img/email-icon.png" alt="Email" />Contact this Pro</a></div> \n\
				<div class="businessHours"><h5>Business Hours</h5>Weekdays ' + dealer.weekHours.mon + '<br/>Saturdays ' + sat + '<br/>Sundays ' + sun + '</div>\n\
				<div class="certifications"><ul>' + getCertifications() + '</ul></div> \n\
			  </li>'

			content += result;
		}
		$( '#dealerCount' ).html( '<span>' + dealers.length + ' dealers in 28226</span>' );
		$( '#results' ).html( content );
	} );
};

generateCards()
$( '.option' ).change( generateCards )
