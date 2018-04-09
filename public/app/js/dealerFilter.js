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
		var generatedModals ='';
		 dealers = data;
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


			var nameStr = dealer.name.replace( /\s+/g, '' );
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
				<div class="emailContact" ><a id="dealer-' + i+ '"><img src="../assets/img/email-icon.png" alt="Email" />Contact this Pro</a></div> \n\
				<div class="businessHours"><h5>Business Hours</h5>Weekdays ' + dealer.weekHours.mon + '<br/>Saturdays ' + sat + '<br/>Sundays ' + sun + '</div>\n\
				<div class="certifications"><ul>' + getCertifications() + '</ul></div> \n\
			  </li>';

			var modal = '<li id="modal-'+i+'" class="modal hide">\n\
					<div class="modalContainer">\n\
						<div class="modalTop">\n\
							<p>EMAIL</p>\n\
							<a id="close-'+i+'"class="ss-delete"></a>\n\
							<h2>' + dealer.name + '</h2> \n\
						</div>\n\
						<div>\n\
							<p>Fill out the form below and '+dealer.name+' will get in touch.</p>\n\
						</div>\n\
						<form> \n\
							<label>\n\
								first and last name \n\
								<input type="text" autocomplete="name">\n\
							</label>\n\
							<label>\n\
								Phone number \n\
								<input type="number" autocomplete="tel">\n\
							</label> \n\
							<label>\n\
								Email adress \n\
								<input type="text" autocomplete="email">\n\
							</label> \n\
							<label>\n\
								Comments or questions \n\
								<textarea></textarea>\n\
							</label>\n\
							<div class="poolRadio-lg" > \n\
							<p> Do you currently own a Pool or Spa</p> \n\
							<label class="container">\n\
								<input type="radio" name="radio">\n\
								<span class="checkmark">yes</span>\n\
							</label>\n\
							<label class="container">\n\
								<input type="radio" name="radio">\n\
								<span class="checkmark">no</span>\n\
							</label>\n\
						</div> \n\
						<div class="poolRadio-sm">\n\
						<p> Do you currently own a Pool or Spa</p> \n\
							<label class="container">Yes\n\
  							<input type="radio" checked="checked" name="radio">\n\
  							<span class="checkmark"></span>\n\
							</label>\n\
							<label class="container">No\n\
  							<input type="radio" name="radio">\n\
  							<span class="checkmark"></span>\n\
							</label>\n\
						</div>\n\
						<hr> \n\
						<div class="send">\n\
							<p>Send<span> my email </span></p>\n\
							<a><img src="../assets/img/next-arrow.png"></a>\n\
							</div> \n\
						</form> \n\
						<div class="terms" >\n\
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."</p>\n\
						</div>\n\
				</div> \n\
				<div>\n\
			</li> \n\
			'

			content += result;

			generatedModals += modal;



		}


		$( '#dealerCount' ).html( '<span>' + dealers.length + ' dealers in 28226</span>' );
		$( '#results' ).html( content );
		$('#modals').html( generatedModals);

			for (var a = 0; a < dealers.length; a++) {
				let i = a;
				$('#dealer-'+ (i)).click(function(){
						$('#modal-'+(i)).toggleClass("hide");
						console.log('dealer'+(i));
					})
			}


			for (var a = 0; a < dealers.length; a++) {
				let i = a;
				$('#close-'+ (i)).click(function(){
						$('#modal-'+(i)).toggleClass("hide");
						console.log('dealer'+(i));
					})
			}



	} );



};



generateCards()



$( '.option' ).change( generateCards )
