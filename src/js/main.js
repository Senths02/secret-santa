$( document ).ready(function() {

  if($(".start-screen active")){

    $("#start-button").click(function(){
        $(".start-screen").hide();
        $(".start-screen").removeClass("active");
        $(".game").addClass("active");
        $(".game").show();
        $("#snowman-head").draggable({containment:'.game'});
        $("#snowman-body").draggable({containment:'.game'});
        $("#snowman-right-eye").draggable({containment:'.game'});
        $("#snowman-left-eye").draggable({containment:'.game'});
        $("#snowman-scarf").draggable({containment:'.game'});
        $("#snowman-nose").draggable({containment:'.game'});
        $("#snowman-hat").draggable({containment:'.game'});
    }); 
  }
});