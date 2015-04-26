var cpt = 2;

$(function(){
      $("#nb_description").typed({
        strings: ["Passionné", "Créatif", "Artisan du Web"],
        typeSpeed: 100
      });
});

function changeBG(){
	$(".splash-container").removeClass("bg1");
	$(".splash-container").removeClass("bg2");
	$(".splash-container").removeClass("bg3");
	$(".splash-container").removeClass("bg4");
	$(".splash-container").removeClass("bg5");
	
	$(".colorfu").removeClass("cf1");
	$(".colorfu").removeClass("cf2");
	$(".colorfu").removeClass("cf3");
	$(".colorfu").removeClass("cf4");
	$(".colorfu").removeClass("cf5");
	
	$(".splash-container").addClass("bg"+(cpt)+"");
	$(".colorfu").addClass("cf"+(cpt)+"");
	
	cpt++;
	if(cpt == 6){
		cpt = 1;
	}
}
  
$(document).ready(function(){ 
	//init blue bg
	$(".splash-container").addClass("bg1");
	$(".colorfu").addClass("cf1");
	//handling scroll to
	$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
	});
	
	$('.skype_tooltip').tooltipster({
		 animation: 'fade',
		 delay: 200,
	     theme: 'tooltipster-shadow',
	     touchDevices: false,
	     trigger: 'hover'
	});
	
	$('.tooltip').tooltipster({
		 animation: 'fade',
		 delay: 200,
	     theme: 'tooltipster-shadow',
	     touchDevices: false,
	     trigger: 'hover'
	});
	
	$('#arrow_up').click(function() {
		$('html,body').animate({scrollTop: 0}, 'slow');
	});

	$(window).scroll(function(){
		 if($(window).scrollTop() == 0){
			$('#arrow_up').fadeOut('slow');
		 }else{
			$('#arrow_up').fadeIn('slow');
		 }
	});
	
	//changing bg color
	setInterval(changeBG, 5000); 
	
	//get the tour
	$('#get_tour').click(function(){
		$('html, body').animate( { scrollTop: $('#services').offset().top }, 1000 ).delay(10000);
		
		setTimeout(function() {
			$('#surmesure_box').addClass('b_highlight');
		}, 2000);
		
		setTimeout(function() {
			$('#surmesure_box').removeClass('b_highlight');
			$('#flexibilite_box').addClass('b_highlight');
		}, 4000);
		
		setTimeout(function() {
			$('#flexibilite_box').removeClass('b_highlight');
			$('#qualite_box').addClass('b_highlight');
		}, 6000);
		
		setTimeout(function() {
			$('#qualite_box').removeClass('b_highlight');
			$('#multiplateforme_box').addClass('b_highlight');
		}, 8000);
		
		setTimeout(function() {
			$('#multiplateforme_box').removeClass('b_highlight');
			$('html, body').animate( { scrollTop: $('#jesuis').offset().top }, 1000 ).delay(1000);
		}, 11000);
		
		setTimeout(function() {
			$('#my_pic').addClass('doit').delay(1000).addClass('doit2');
		}, 12000);
	
		setTimeout(function() {
			$('html, body').animate( { scrollTop: $('#contact').offset().top }, 1000 );
		}, 15000);
		
		setTimeout(function() {
			//$('html, body').animate( { scrollTop: $('#accueil').offset().top }, 1000 ).delay(2000);
		}, 34000);
	
	});
});