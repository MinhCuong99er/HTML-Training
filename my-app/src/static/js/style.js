//var function init call
var initReady = function(){
  //function run
  calMatchHeight();
  tkMenuMobileExpand();
  tkSliderOwl();
  tkSliderJudgeOwl();
  tkSliderNewsOwl();
  tkLogoOwl();
  tkTimeCount();
  tkSliderPartnerOwl();
  tkSmoothScroll();
};
var initLoad = function(){
  //function run
};
var initResize = function(){
  //function run
};

//document ready before js
$(document).ready(function(){

  //js autoload when document ready
  initReady();

});

//window load all before js
$(window).on("load", function (e) {

  //js autoload when window load
  initLoad();

});

//window resize before js
$(window).resize(function() {

  //js autoload when window resize
  initResize();

});