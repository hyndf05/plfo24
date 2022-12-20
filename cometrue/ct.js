setTimeout(function(){
  $('.cometruecontents .mainsection .tit.fb_pub').addClass('ac');
  setTimeout(ct2, 800);
}, 300)

// 펼쳐짐
function ct2(){
  $('.cometruecontents .mainsection .tit.fb_pub').addClass('ac2');
  setTimeout(ct3, 500);
}

// FRONT 나타남
function ct3(){
  $('.cometruecontents .mainsection .subtit.frontend').addClass('ac4');
  setTimeout(ct4, 500);
}

// FRONT 사라짐
function ct4(){
  $('.cometruecontents .mainsection .subtit.frontend').addClass('ac5');
  setTimeout(ct5, 500);
}

// DEVELOPER 나타남
function ct5(){
  $('.cometruecontents .mainsection .subtit.developer').addClass('ac6');
  setTimeout(ct7, 500);
}

// DEVELOPER 사라짐
function ct7(){
  $('.cometruecontents .mainsection .subtit.developer').addClass('ac7');
  setTimeout(ct8, 500);
}

// 텍스트 그림자 (red) 나타남
function ct8(){
  $('.cometruecontents .mainsection .tit.fb_pub').addClass('ac8');
  setTimeout(ct9, 300);
}

// 텍스트 그림자 (orange) 나타남
function ct9(){
  $('.cometruecontents .mainsection .tit.pb_pub').addClass('ac9');
  setTimeout(ct10, 300);
}

//텍스트 그림자 (yellow) 나타남
function ct10(){
  $('.cometruecontents .mainsection .tit.fb_pub').addClass('ac10');
  setTimeout(ct11, 300);
}

//텍스트 그림자 (green) 나타남 / 사라짐
function ct11(){
  $('.cometruecontents .mainsection .tit.fb_pub').addClass('ac11');
  setTimeout(ct12, 100);
}

//텍스트 그림자 (yellow) 나타남
function ct12(){
  $('.cometruecontents .mainsection .tit.ft_put').addClass('ac12');
  setTimeout(ct13, 300);
}

//텍스트 그림자 (yellow) 나타남
function ct13(){
  $('.cometruecontents .mainsection .detail').addClass('ac13');
  setTimeout(ct14, 300);
}