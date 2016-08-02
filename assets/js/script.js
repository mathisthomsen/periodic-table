$(document).ready(function(){

    $('.element').bind('click', function(){

        var trivia=$(this).data("trivia");
        $(this).parent().next().append('<div class="inner-modal"><h2>Trivia</h2>' + trivia + '</div>');
        $('.modal').fadeToggle();

    });

    $('.modal').mousedown(function(e) {
    	var clicked = $(e.target);
    	if (clicked.is('.inner-modal') || clicked.parents().is('.inner-modal')) {
    		return;
       } else {
         $('.modal').fadeToggle(function(){

             $(this).find('.inner-modal').remove();

         });
       }
    });
});
