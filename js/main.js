var obj = {};

$("#add").click(function(e){
  $( "input" ).each(function() {
      var value = $( this ).val();
      var res = value.split(",");
      var player = res[0];
      var points = parseInt(res[1]);
      var currentScore =  obj[player];
      var playerId = player.split(" ");


      if ( player in obj ){
        currentScore = (currentScore + points);
        obj[player] = currentScore;
        $( "#" + playerId + "").replaceWith( "<li score='" + currentScore + "' id='" + playerId + "'>" + player + ", " +  currentScore +" pts" + "</li>" );
      } else {
        currentScore = 0 + points;
        obj[player] = currentScore;
        $( "ul" ).append( "<li score='" + currentScore + "' id='" + playerId + "'>" + player + ", " +  currentScore + " pts" + "</li>" );
     }
  $('input').val('');
  });

  $(function(){
    var elems = $('#rankings').children('li').remove();
    elems.sort(function(a,b){
        return parseInt(a.getAttribute('score')) < parseInt(b.getAttribute('score'));
    });
    $('#rankings').append(elems);
  });
  $("li").each(function(){
  });
});




$("#clear").click(function(e){
  location.reload();
});
