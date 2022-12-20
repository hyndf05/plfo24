$('loading').addClass('d');
$('.f_logo').css('opacity', '1');
$('.f_logo').addClass('ac');

$('#head').click(locMain);
$('#curMi').click(locMi);
$('#curWac').click(locWac);
$('#cur').click(locCur);
$('#goal').click(locGoal);
$('#planner').click(locPlanner);
$('#timetableWeekdays').click(locTimetableWeekdays);
$('#timetableWeekends').click(locTimetableWeekends);
$('#univ').click(locUniv);
$('#changelog').click(locChangelog);
$('#goUnivHS').click(goHS);
$('#goUnivSKNU').click(goSKNU);
$('#cometrue').click(cometrue);

var m = 'PLFO24';

function locMain() {
  loc(`/a/archive/mainp.html`);
  $('title').text(m);
}

function locMi() {
  loc(`/c/cur.html#미적분`);
  $('title').text(`${m} > CURRICULUM`);
}

function locWac() {
 loc(`/c/cur.html#확률과통계`);
  $('title').text(`${m} > CURRICULUM`);
}

function locCur() {
  loc(`/c/cur.html`);
  $('title').text(`${m} > CURRICULUM`);
}

function locGoal() {
  loc(`/c/goals.html`);
  $('title').text(`${m} > GOALS`);
}

function locPlanner() {
  loc(`/c/planner/~.html`);
  $('title').text(`${m} > PLANNER`);
}

function locTimetableWeekdays() {
  loc(`/c/timetable/weekdays/index.html`);
  $('title').text(`${m} > TIMETABLE > WEEKDAYS`);
}

function locTimetableWeekends() {
  loc(`/c/timetable/weekends/index.html`);
  $('title').text(`${m} > TIMETABLE > WEEKENDS`);
}

function locUniv() {
  loc(`/c/univ.html`);
  $('title').text(`${m} > UNIVERSITY`);
}

function locChangelog() {
  loc(`/a/archive/changelog.html`);
  $('title').text(`${m} > CHANGELOG`);
}

function goHS() {
  loc(`/entrance/hs.ac.kr/index.html`);
  $('title').text(`${m} > ENTRANCE > HS`);
}

function goSKNU() {
  loc(`/entrance/sknu.ac.kr/index.html`);
  $('title').text(`${m} > ENTRANCE > SKNU`);
}

function cometrue() {
  loc(`/cometrue/main.html`);
  $('title').text(`${m}`);
}

var xd = 0; // xhttp 한번 실행하기 위한 보충 변수
function loc(xpi) {
  $('loading').removeClass('d');
  $('.f_logo').css('opacity', '0');
  $('.f_logo').removeClass('ac');
  loadingPercentA();
  const x = new XMLHttpRequest();
  if (xd == 0) {
    xd ++;
    x.open('GET', xpi);
    x.send();
    x.onload = function() {
      var html = this.responseText;
      var local2 = html.split('</head>');
      var local3 = local2[1];
      $('body content *').remove();
      $('body content').append(html);
      $('#ma *').remove();
      $('#ma').append(`<script defer src="/a/ajax1.js"></script><script defer src="/a/zoom.js"></script>`);
      loadingPercentB();
      xd = 0;
      var tit = $('title').text();
      $('.f_logo').text(tit);
      $('loading').addClass('d');
      $('.f_logo').css('opacity', '1');
      $('.f_logo').addClass('ac');
      
    }
  }

  x.onreadystatechange = function(oEvent) {
    if (x.readyState === 4) {
      if (x.status === 200) {
      } else {
        console.log("an error occured. (xhttp)");
        xError();
      }
    }
  };
  
}

function loadingPercentA() {
  var tPerA = Math.floor(Math.random() * 81);
  $('.loadingBRXXpv .loadingIxDPcI').css('transform', `rotate(0)`);
  $('.loadingBRXXpv .loadingIxDPcI').css('transition', `.25s`);
  $('.loadingBRXXpv .loadingIxDPcI').css('width', `${tPerA}%`);
}

function loadingPercentB() {
  $('.loadingBRXXpv .loadingIxDPcI').css('width', `100%`);
  setTimeout(function(){
    loadingPercentC();
  }, 100)
}

function loadingPercentC() {
  setTimeout(function(){
    $('.loadingBRXXpv .loadingIxDPcI').css('width', '0%');
  }, 100)
}