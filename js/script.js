// event pada saat link di klik
$('.page-scroll').on('click', function(event){

    //ambil isi href
    var href = $(this).attr('href');
    //tangkap elemen ybs
    var elemenHref = $(href);
    
    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 40
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});