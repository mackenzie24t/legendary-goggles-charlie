$(document).ready(function(){
  
  //TODO: if position is on the far right, tell user they won

  console.log("Top: " + $("img").position().top + " Left" + $("img").position().left);

  $("img").draggable({

    stop: function() {
      console.log("Stopping?????");
      let dogeLeft = $("img").position().left;
      if(dogeLeft > 500){

        console.log("we above 500");
        $('h4').text("You won!! WOW!!! Good job!");
        $('img').attr("src", "https://static.independent.co.uk/2021/05/24/20/doge.jpg");
      }
      else{
        console.log("we under 500");
      }
    }
  });
});