$(document).ready(function(){

    //$('.overlay').hide();
    $('.element').bind('click', function(){

        $(this).find('.card').toggleClass('flip');
        $(this).find('.overlay').toggleClass('flip');

    });

});
