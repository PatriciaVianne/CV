$(".education").hide();
$(".work").hide();
$(".skills").hide();


$(".button-intro").on("click", function(){


  $(".education").fadeOut();
  $(".work").fadeOut();
  $(".skills").fadeOut();

  $(".intro").fadeIn();
  $(".basic-info").fadeIn();
  $(".contact").fadeIn();
});


$(".button-education").on("click", function(){


  $(".intro").fadeOut();
  $(".basic-info").fadeOut();
  $(".contact").fadeOut();
  $(".work").fadeOut();
  $(".skills").fadeOut();

  $(".education").fadeIn();
});

$(".button-work").on("click", function(){

  $(".intro").fadeOut();
  $(".basic-info").fadeOut();
  $(".contact").fadeOut();
  $(".education").fadeOut();
  $(".skills").fadeOut();

$(".work").fadeIn();

});

$(".button-skills").on("click", function(){


  $(".intro").fadeOut();
  $(".basic-info").fadeOut();
  $(".contact").fadeOut();
  $(".work").fadeOut();

  $(".skills").fadeIn();
});
