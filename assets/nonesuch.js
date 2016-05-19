$(window).ready(function() {
  sortCollapse();
  navToggle();
  giftOptionsToggle();
  utilityNavSlide();
  productGallery();
  if ($(window).width() > 770) {
    productImageZoom();
    resetProductImageZoom();

  } else {
     mobileSidebarToggle();
  }
  $('.body-overlay').fadeIn();
  $('.body-overlay').click(function(){
    $(this).fadeOut();
    $('body').css({'overflow-y':'auto'});
  });

})

$(window).on('resize', function() {
  $('.zoomContainer').remove();
  productImageZoom();
})


google.maps.event.addDomListener(window, 'load', mapInitialize);

function sortCollapse() {
  $('.filter-by h3').on('click', function() {

    $('.types').slideToggle('slow', function() {
      $('.filter-by').toggleClass('open')
    });

  })
}

function divEqualizer(divSelector) {
    var maxHeight = 0;
    divSelector.each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    divSelector.height(maxHeight);
  }

  function mapInitialize() {
  var myOptions = {
    zoom: 14,
    scaleControl: false,
    scrollwheel: false,
    zoomControl: false,
    panControl:false,
    streetViewControl: false,
    mapTypeControl:false,
    center: new google.maps.LatLng(33.997832, -81.003528),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  var image = new google.maps.MarkerImage('https://cdn.shopify.com/s/files/1/0985/8124/files/map-marker.png?2974338200582710948');
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: image,
    labelClass: 'pin'
  });
}

function navToggle() {
  $('.nav-toggle').on('click', function() {
    console.log('click');
    $('.mobile-nav').toggleClass('open');
    $('#PageContainer').toggleClass('open');
  })
}


function giftOptionsToggle() {
  $('.gift-option-toggle input').on('click',  function() {
    $(this).closest($('.properties')).find($('.gift-options.hidden')).slideToggle();
    // $('.gift-options.hidden').slideToggle();
    $('.gray-box.registry').fadeToggle();
  })
}


function utilityNavSlide() {
  $('.utility-nav .icon').on("mouseenter", function() {
    $(this).find('span').animate({width:'toggle'},350);
    // $(this + ' *').css('color', '#3b3837');
  })
  $('.utility-nav .icon').on("mouseleave", function() {
    $(this).find('span').animate({width:'toggle'},350);
     // $(this).css('color', 'initial');
  })
}

// adds zoom container to product images
function productImageZoom() {
  var elevateZoom = function(element) {
    element.elevateZoom({
      zoomType  : "lens",
      lensShape : "square",
      lensSize : 300,
      borderSize: 0,
      lensBorder: 1,
      containLensZoom: true,
      constrainType: "width",
      constrainSize: 300,
      onZoomedImageLoaded: function() {
        var width = $('.images').width();
        $('.zoomContainer').css('width', width);
      }
      });
  }
  elevateZoom($('.product-single .images #ProductPhotoImg'));
}

function productGallery() {
  $(".thumbnails a").on('click', function(e) {
    e.preventDefault();
    $('.images img#ProductPhotoImg').attr('src',$(this).attr('href'));
  })
}

//removes old zoomcontainer and adds new one when product image changes
function resetProductImageZoom() {
  $('.product-single .images #ProductPhotoImg').load(function() {
    $('.zoomContainer').remove();
    productImageZoom();
  })
}



function mobileSidebarToggle() {
  $('.sidebar h3').on('click', function() {
    $(this).next($('ul')).slideToggle();
  })
}
