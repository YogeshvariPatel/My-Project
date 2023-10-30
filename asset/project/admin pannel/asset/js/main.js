
$.get(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json",
  function (chinaJson) {
    echarts.registerMap("world", chinaJson);
  
    var chart = echarts.init(document.getElementById("main"));
    chart.setOption({
      series: [
        {
          type: "map",
          map: "world",
          data: [
            {
              name: "United States of America",
              itemStyle: {
                areaColor: "yellow"
              }
            }
          ]
        }
      ]
    });
  }
);

// jquery


$(document).ready(function () {
  $('.fa-bars-staggered').click(function () {
      // $('aside').toggleClass('.w-50');
      // $('header').toggleClass('.ml-50');
      // $('.logo1').attr('src', 'asset/images/logo-sm.png')

  })

});
// $('.nav-link').click(function () {
//    $('.dropdown').slideDown()
// });
$("h3").click(function () {
  $(this).next().slideToggle(500);
  $("div").not($(this).next()).slideDown(500);

  // how to rotate the icon JUST h3>i
  // $("i").css({'transform':'rotate(180deg)'});

});
$(window).scroll(function (){
  if (scrollY > 100) {
      
      $('#top').fadeIn(2000);
  }
  else {
    
      $('#top').fadeOut(2000);

  }
});
$('#top').click(function(){
  $('html').animate({scrollTop:0});
});









$('.fa-bars').click(function(){
  $('aside').toggleClass('ml-250');
  $('header').toggleClass('ml-0');
  $('.page-area').toggleClass('ml-0');
  

});



