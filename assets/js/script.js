$(document).ready(function(){

    //$('.overlay').hide();
    $('.element').bind('click', function(){

        $(this).toggleClass('flip');
        //$(this).find('.overlay').toggleClass('flip');

    });

});
