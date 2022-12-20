var univHS = ['적정', '2.99', '학생부우수자전형'];
var univYongin = ['적정', '3.1', '학생부우수자전형'];
var univSKNU = ['적정', '979.92', '학생부교과전형']

$('img').on('load', function(){


$('#univ-na-hs #univ-d').text(univHS[0]);
$('#univ-na-hs #univ-a').text(univHS[1]);
$('#univ-na-hs #univ-c').text(univHS[2]);

$('#univ-na-yongin #univ-d').text(univYongin[0]);
$('#univ-na-yongin #univ-a').text(univYongin[1]);
$('#univ-na-yongin #univ-c').text(univYongin[2]);

$('#univ-na-sknu #univ-d').text(univSKNU[0]);
$('#univ-na-sknu #univ-a').text(univSKNU[1]);
$('#univ-na-sknu #univ-c').text(univSKNU[2]);

  
})