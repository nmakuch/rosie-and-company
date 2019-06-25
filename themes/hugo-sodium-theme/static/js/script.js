  $(document).ready(function(){
  
  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();
  
  /*
    Work portfolio
  */
  var overlay = $(".overlay, .cross");
  var workImage = $(".workImage");
  var body = $("body");
  var hoverImageHolder = $(".hoverImage");
  var hoverImage = $(".hoverImage > img");
  var hoverTitle = $(".hoverImage > .textHolder > .title");
  var hoverDescription = $(".hoverImage > .textHolder > .description");

  workImage.click(function(){
    //Get tite and description
    var title = $(this).data('title');
    var description = $(this).data('description');

    hoverTitle.text(title);
    // hoverDescription.text(description);

    overlay.addClass("active");
    body.addClass("zoomOut");
    var imageURL = $(this).data('url');
    hoverImage.attr('src', imageURL);
    hoverImageHolder.addClass('active');
  });

  overlay.click(function(){
    $(overlay).removeClass("active");
    hoverImageHolder.removeClass('active');
    hoverImage.attr('src', '');
    body.removeClass("zoomOut");
  });

  //Smooth scroll
  $('a.smooth').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);

    $('.navbar-toggler').click();
    return false;
  });

  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    
    return false;
  });
});