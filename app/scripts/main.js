var selector = '.nav li a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});