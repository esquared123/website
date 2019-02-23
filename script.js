$('#landing-button').on('click', function(){
	const nextPage = $('#intro-container').offset().top;

	$('html, body').animate({ scrollTop: nextPage }, 1000);
});

$('#intro-button').on('click', function(){
	const nextPage = $('#info-container').offset().top;

	$('html, body').animate({ scrollTop: nextPage }, 1000);
});

$('#info-button').on('click', function(){
	const nextPage = $('#product-container').offset().top;

	$('html, body').animate({ scrollTop: nextPage }, 1000);
});

$('#product-button1').on('click', function(){
	const nextPage = $('#product-text2').offset().top;

	$('html, body').animate({ scrollTop: nextPage }, 1000);
});


window.onscroll = function(){ scrollFunction(); };
$('window').on('reload', scrollFunction());

function scrollFunction(){
	
	if((document.body.scrollTop > $('#intro-container').offset().top) || (document.documentElement.scrollTop> $('#intro-container').offset().top)){
		
		document.getElementById("info-background-image").style.display = "inline";
		
	} else{
		
		document.getElementById("info-background-image").style.display = "none";
	
	}
}