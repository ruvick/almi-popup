$(document).ready(function() {
  $('#myLinkModalS').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModalS') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#close, #myOverlay').click( function(){
    $('#myModalS').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});


$(document).ready(function() {
  $('#myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});


function getFileName() {
    var file = document.getElementById('myfile').value;
    file = file.replace(/\\/g, '/').split('/').pop();
    document.getElementById('file-name').innerHTML = '' + file;

    var file = document.getElementById('myfiles').value;
    file = file.replace(/\\/g, '/').split('/').pop();
    document.getElementById('file-names').innerHTML = '' + file;
}













