$(function(){
    "use strict"; // Start of use strict

    var currentAnchor = function(){
        var anchor = null;
        $('section').each(function(){
            var id = $(this).attr('id');
            var position = $(this).offset().top - 100;
            if(position > $(window).scrollTop()){
                return anchor;
            }
            anchor = id;
        });
        return anchor;
    };



    $('a').on('click', function (event) {
        var $anchor = $(this);
        if($anchor.attr('href') == '#'){
            var top = 0;
        } else {
            var top = $($anchor.attr('href')).offset().top - 50;
        }
        $('html, body').stop().animate({
            scrollTop: (top)
        }, 1250
            ,
            function(){
                $('nav li').each(function(){$(this).removeClass('active')});
                $("nav a[href='#"+currentAnchor()+"']").parents('li').addClass('active');
            }
        );
        event.preventDefault();
    });

    new WOW().init();

    $(window).scroll(function(){
        onScroll();
    });
    onScroll();

    $.stellar();

});

var onScroll = function(){
    if($(window).scrollTop() > 0){
        $('nav').addClass('scrolled');
    } else {
        $('nav').removeClass('scrolled');
    }
};

