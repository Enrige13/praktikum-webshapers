//Button to Top
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
      }
  });
  $('#scroll').click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});

//Gallery
$(document).ready(function() {
  $('#lightgallery').lightGallery({
      pager: true
  });
});

//Preloader abschalten
$(function() { // this replaces document.ready
  setTimeout(function() {
      $('#loaderSvgWrapper').fadeOut('slow', function() {
          $(this).remove();
      });
  }, 2000);
});

// capture scroll
$(window).scroll(function() {
  var top = $(window).scrollTop(),
      docHeight =

      $(document).height(),
      winHeight = $(window).height();
  var scroll = (top / (docHeight - winHeight)) * 100;

  $('.scroll').css('width', (scroll + '%'));
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });