$(function(){

    //When the user clicks on the hamburger menu
    $('#hamburger').click(function() {

    //get the element #mymenu
    var element = $('#mymenu');

    //check to see if it already has the responsive class assigned
    if(element.hasClass('responsive')) {
        element.removeClass('responsive');
    } else {
        element.addClass('responsive');
    }

  });
});
