$(document).ready(function(){

    $('.overlay').hide();
    $('.element').bind('click', function(){

        $(this).find('.overlay').fadeToggle(500);

    });

});
