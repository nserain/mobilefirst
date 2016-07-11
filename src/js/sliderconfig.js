/**
 * Created by nico on 08/07/2016.
 */
$(document).ready(function(){

    $('#slider1').bxSlider({
        mode:'horizontal',
        auto: true,
        pause: 2000,
        pager: false,
        controls: false,
        autoControls:false,
        minSlides:1,
        maxSlides:1
    });
    $('#slider2').bxSlider({
        mode:'horizontal',
        auto: true,
        pause: 2000,
        pager: false,
        controls: false,
        autoControls:false

    });
    $('#slider3').bxSlider({
        mode:'vertical',
        auto: true,
        pause: 2000,
        pager: false,
        controls: false,
        autoControls:false,
        adaptiveHeight:true
    });



});