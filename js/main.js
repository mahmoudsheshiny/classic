/*global $, alert ,console*/
$(function () {
    'use strict';
    // header height
    
    var myHeader = $('.header'),
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        mySlider.css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // links active
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // ِAdjust bxslider list item center
    mySlider.each(function () {
        
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    //all scroll list
    $('.links li a').click(function () {
        
        $('html ,body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    //trigger bx slider
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // testmonials slider 
    
    (function autoSlider() {
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                });
            } else {
                    
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
            }
            
        });
    }());
    
    // filter portfolio mix it up
    
    $('#container').mixItUp();
    
    // project list
    
    $('.shufle li').click(function () {
        
        $(this).addClass('select').siblings().removeClass('select');
    });
    
    $('html').niceScroll({
        
        cursorcolor : '#1abc9c',
        cursorwidth : '10px',
        cursorborder: '#1abc9c',
        cursorborderradius: "2px"
        
    });

    
});