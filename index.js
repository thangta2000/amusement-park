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
   /*----------------------------------------------------Ticket-------------------------------------------*/
    let index = 0;
    $(".add-ticket").click((e) => {
      e.preventDefault();
      $("#ticket-number").addClass("added-ticket");
      if(e.target.innerHTML === "DELETE FROM MY VISIT"){
        e.target.innerHTML = "ADD TO MY VISIT";
        index--;
      }
      else {
        e.target.innerHTML = "DELETE FROM MY VISIT";
        index++;
      }
      if(index != 0){
        $("#ticket-number").addClass("added-ticket");
        $("#ticket-number").html(index);
      }
      else {
        $("#ticket-number").removeClass("added-ticket");
        $("#ticket-number").html("");
      }
    })
})
