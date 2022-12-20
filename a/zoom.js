$('img').click(function(){
  var clicks = this.src;
  $('#imgViewer img').attr('src', clicks);
  $('#imgViewer').addClass('active');
})

$('#imgViewer:not(#imgViewer img)').click(function(){
  $('#imgViewer').removeClass('active');
})