
var Seeit="";

$(document).ready(function() {
$('#CircleB').css({ opacity: 0, display:'inline-block' });
$('#Phoenix').css({ opacity: 0, display:'inline-block' });
$('.menuaction1').css({ opacity: 0, display:'inline-block' });
$('.menuaction2').css({ opacity: 0, display:'none' });
$('.home-content').hide();
$('.pocket').hide();
$('#CircleO').css({ opacity: 1, display:'inline-block', left:165, top:165, width:0, height:0});
$('.circleblack').css({ opacity: 0, top: 77, display:'inline-block'});
$('.phoenix').css({ top:140});
$('.circleblack').animate({ opacity:1}, 300);
$('#CircleB').delay(400).animate({ opacity:1}, 300);
$('#Phoenix').delay(700).animate({ opacity:1}, 500);

//Rotate
RoundBaby2(); 
$("#CircleB, #Phoenix, .circleblack, .circleobl").hover(function () {
if(Seeit==""){
GoUp();
}else{
if(Firildak=="Nop"){RoundBaby();} 
}}
);

//On mouse over 
$(".menuaction1").hover(function () {
});

$(".menuaction1").click(function () {
GoUpUp();
});

$(".menuaction2").click(function () {
OpenMenu();
});
});

function RoundBaby2(){
basladi();
  $("#CircleB").rotate({
      angle:0,
      animateTo:360,
	  duration:1500,
	  callback:bitti
  });
}

function RoundBaby(){
basladi();
   $("#CircleB").rotate({
      angle:0,
      animateTo:360,
	  duration:2000,
	  callback:bitti
  });
     $("#CircleO").rotate({
      angle:0,
      animateTo:-360,
	  duration:2000,
	  callback:bitti
  });
}

function bitti(){
Firildak="Nop";
}

function basladi(){
Firildak="Yes";
}

function GoUp(){
	
	if(Seeit != "Nop"){
	$('.circleblack').animate({ top:77}, 700);
	$('.phoenix').animate({ top:140}, 700, function() {GoUpUp();});
	$('#CircleO').delay(0).animate({ left:0, top:0, width:320, height:320},{duration:1800 ,easing: "easeOutElastic"});
	$('.menubg').delay(500).animate({ height:0,top:-250}, 700);
	Seeit="Yes";}
}

function GoUpUp(){
$('.menuaction1').animate({ opacity:0}, 500);
$('.menuaction2').css({ opacity: 1, display:'inline-block' }, 3000);
$('.circleblack').delay(1000).animate({ top:-170}, 700);
$('#CircleO').delay(0).animate({ top:-237}, 700);
$('.phoenix').delay(1000).animate({ top:-15}, 700);
$('.menubg').delay(10).animate({  height:311,top:-140}, 1000, function() {ShowNow();});

}
 
function OpenMenu(){
$('.menuaction1').animate({ opacity:1, display:'inline-block'}, 200);
$('.menuaction2').css({ opacity: 0, display:'none' }, 200);
$('.menubg').delay(0).animate({  height:311,top:16}, 500);
}

function ShowNow(){
	$('.home-content').show();
	$('.pocket').show();
	}
