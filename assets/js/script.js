$(document).ready(function(){

    /*alert('dies ist kein Spam!!!');
    alert('Wirklich! Glauben Sie mir! Ich will nur, dass Sie ganz viel Geld gewinnen!');
    alert('... und vielleicht eine Penispumpe...');
    var name = prompt('Wie ist Ihr Name?');
    console.log(name);
    if (name === 'annika') {
        console.log(name);
        return;
    }
    else {
        name=prompt('Nein wirklich jetzt! Wie ist Ihr Name?');
        console.log(name);
    }
    console.log(name);*/


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
