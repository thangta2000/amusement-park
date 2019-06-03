$(window).scroll(function(){
	if ($(window).scrollTop() >= 50){
		$('#second-header').addClass("fixed-header")
    	$('#first-header').addClass("visible-title");
	}
	else {
		$('#second-header').removeClass("fixed-header");
    	$('#first-header').removeClass("visible-title");
	}
});
$(function(){
  $(".carousel-indicator-item-1").addClass("active-item");
  $(".carousel-indicator-item-2").addClass("disable-item");
  $(".carousel-indicator-item-3").addClass("disable-item");
  $(".carousel-indicator-item-1").click(function(){
	$("#carousel").carousel(0);
  });
  $(".carousel-indicator-item-2").click(function(){
    $("#carousel").carousel(1);
  });
  $(".carousel-indicator-item-3").click(function(){
    $("#carousel").carousel(2);
  });
  $("#carousel").on('slide.bs.carousel', function (e){
  	var index=e.to+1;
   	if(index==1){
   		$(".carousel-indicator-item-1").addClass("active-item");
   		$(".carousel-indicator-item-2").removeClass("active-item");
   		$(".carousel-indicator-item-3").removeClass("active-item");
   		$(".carousel-indicator-item-1").removeClass("disable-item");
   		$(".carousel-indicator-item-2").addClass("disable-item");
   		$(".carousel-indicator-item-3").addClass("disable-item");
   	}
   	else if(index==2){
   		$(".carousel-indicator-item-2").addClass("active-item");
   		$(".carousel-indicator-item-1").removeClass("active-item");
   		$(".carousel-indicator-item-3").removeClass("active-item");
   		$(".carousel-indicator-item-2").removeClass("disable-item");
   		$(".carousel-indicator-item-1").addClass("disable-item");
   		$(".carousel-indicator-item-3").addClass("disable-item");
   	}
   	else if(index==3){
   		$(".carousel-indicator-item-3").addClass("active-item");
   		$(".carousel-indicator-item-2").removeClass("active-item");
   		$(".carousel-indicator-item-1").removeClass("active-item");
   		$(".carousel-indicator-item-3").removeClass("disable-item");
   		$(".carousel-indicator-item-2").addClass("disable-item");
   		$(".carousel-indicator-item-1").addClass("disable-item");
   	}
  });
})
