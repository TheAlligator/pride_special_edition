$(document).ready(function(){
    // hide divs
    function hideAll() {
        $('#HomeText').hide();
        $('#artist').hide();
        $('#dev').hide();
        $('#StudentText').hide();
        $('#CoupleText').hide();
        $('#AlumsText').hide();
        $('#PlayerText').hide();
        $('#KnightText').hide();
        $('#UCText').hide();
        $('#PSUText').hide();
        $('#HistoryText').hide();
        $('#OBColumnText').hide();
        $('#PlaylistText').hide();
        $('#ResourcesText').hide();
      }

    //hide divs on start
    hideAll();
    //show home page
    $('#HomeText').show();
    $('#artist').show();
    $('#dev').show();
  
    $('#Home').click(function(){
      hideAll();
      $('#HomeText').show();
      $('#artist').show();
      $('#dev').show();
    });

    $('#Student').click(function(){
      hideAll();
      $('#StudentText').show();
    });

    $('#Couple').click(function(){
      hideAll();
      $('#CoupleText').show();
    });

    $('#Alums').click(function(){
      hideAll();
      $('#AlumsText').show();
    });

    $('#Player').click(function(){
      hideAll();
      $('#PlayerText').show();
    });

    $('#Knight').click(function(){
      hideAll();
      $('#KnightText').show();
    });

    $('#UC').click(function(){
      hideAll();
      $('#UCText').show();
    });

    $('#PSU').click(function(){
      hideAll();
      $('#PSUText').show();
    });

    $('#History').click(function(){
      hideAll();
      $('#HistoryText').show();
    });

    $('#OBColumn').click(function(){
      hideAll();
      $('#OBColumnText').show();
    });

    $('#Playlist').click(function(){
      hideAll();
      $('#PlaylistText').show();
    });

    $('#Resources').click(function(){
      hideAll();
      $('#ResourcesText').show();
    });

});