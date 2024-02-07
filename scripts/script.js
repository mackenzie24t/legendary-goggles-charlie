$(document).ready(function(){

  // Shows position of doge in the console
  console.log("Top: " + $("img").position().top + " Left" + $("img").position().left);

  // Makes doge draggable
  $("img").draggable({

    stop: function() {
    console.log("Stopping?????");
      let dogeLeft = $("img").position().left;
      if(dogeLeft > 500){

        // Winning!!
        // Displays winning message to user and changes doge
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
