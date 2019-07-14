// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery.min
//= require queryloader2.min
//= require modernizr
//= require bootstrap.min
//= require plugins
//= require jquery.tweet.min
//= require jquery.themepunch.revolution.min
//= require jquery.themepunch.tools.min
//= require main
//= require turbolinks
//= require_tree .

(function () {
    "use strict";

    if (document.getElementById("map") && typeof google === "object") {
        var locations = [
            ['<div class="map-info-box"><ul class="contact-info-list"><li><span><i class="fa fa-home fa-fw"></i></span> Mimar Sinan Mh., Konak/İzmir, Türkiye</li><li><span><i class="fa fa-phone fa-fw"></i></span> +90 0 (232) 324 11 83</li></ul></div>', 38.396652, 27.090560, 9],
            ['<div class="map-info-box"><ul class="contact-info-list"><li><span><i class="fa fa-home fa-fw"></i></span> Kültür Mh., Konak/İzmir, Türkiye</li><li><span><i class="fa fa-phone fa-fw"></i></span> +90 0 (538) 324 11 84</li></ul></div>', 38.432742, 27.159140, 8]
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: new google.maps.LatLng(38.414592, 27.143122),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();


        var marker, i;

        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'images/pin.png',
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
    }

}());

$(function() {
    // Slider Revolution for Home Section
    jQuery('#revslider').revolution({
        delay:9000,
        startwidth: 1140,
        startheight: 600,
        onHoverStop:"true",
        hideThumbs:0,
        lazyLoad:"on",
        navigationType:"none",
        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,
        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:0,
        soloArrowLeftVOffset:0,
        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:0,
        soloArrowRightVOffset:0,
        touchenabled:"on",
        stopAtSlide:-1,
        stopAfterLoops:-1,
        dottedOverlay:"none",
        spinned:"spinner5",
        shadow:0,
        hideTimerBar: "off",
        fullWidth:"off",
        fullScreen:"on",
        navigationStyle:"preview4"
      });
});
