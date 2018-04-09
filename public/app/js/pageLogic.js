"use strict";

$('#menuBtn').click( function(){
	$('#menu').toggleClass("hide")
})

$('#menuClose').click( function(){
	$('#menu').toggleClass("hide")
})


$('#filterBtnContainer').click( function(){
	$('#filterContainer').toggleClass("hideFilter")
	$('#filterBtn').toggleClass("ss-dropdown")
	$('#filterBtn').toggleClass("ss-directup")
})

$(document).ready(function () {
    $(document).on("click", ".square-radio", function () {
        $(this).toggleClass("square-radio--clicked");
    });
});
