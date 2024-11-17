// ações de navegação header-nav-menu
$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.servicos').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.horario').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(4)').click(function(){
    $('html, body').animate({scrollTop:$('footer').offset().top}, 1000)
})

/* --------------------------------- */
/*         SECTION SERVICOS          */
/* --------------------------------- */

// elementos com opacidade 0
$('div.servicos.mestre').css('opacity', 0);

$('div.servicos-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.servicos-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $(div.sobre-mestre).removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
        offset: '550px;'
})


