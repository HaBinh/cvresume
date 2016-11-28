// // my-skills Script 
// var percent;
// var bar;
// bar = document.querySelectorAll('.bar');
// percent = document.querySelectorAll('.bar-percent');

// percent.forEach(function(item,index){
// 	var content = item.parentElement.nextElementSibling.innerHTML;
// 	var ball = item.nextElementSibling;
// 	var len = (Number(content[0])*10+Number(content[1]))/100;
// 	len *= bar[index].clientWidth;
// 	len -= ball.clientWidth/2;
// 	item.style.width = content;
// 	ball.style.left = len+'px';
// });

$(function() {
  $('.project').each(function() {
    var $projectBar = $(this).find('.bar');
    var $projectPercent = $(this).find('.percent');
    var $projectRange = $(this).find('.ui-slider-range');
    $projectBar.slider({
      range: "min",
      animate: true,
      value: 1,
      min: 0,
      max: 100,
      step: 1,
      slide: function(event, ui) {
        $projectPercent.val(ui.value + "%");
      }
    });
  })
})

var link = document.querySelectorAll('a[href="#"]');
function PreventDefault(e){
	e.preventDefault();
}
link.forEach(function(item,index){
	item.addEventListener('click',PreventDefault);
});

//Menu Toggle Script 
$(document).ready(function(){
    $("#sidebar-wrapper .sidebar-nav").height($('#wrapper').height()-$('#portrait').height());
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $content = $("#header");//document.getElementById("content-header");
        $txt = $content.html();
        $("#wrapper").addClass("toggled");
        $content.prepend('<a class="btn glyphicon glyphicon-menu-hamburger" href="#"></a>');
        $content.find("h5:eq(1)").hide();
        $content.find("h1:eq(0)").addClass("name").text("Al Rayhan");
        $content.find("h5:eq(0)").addClass("name").text("#Ui/ux Expert   |   #Graphic Designer");
    });

    $(document).on('click','a.btn',function(e){
        e.preventDefault();
        $("#wrapper").removeClass("toggled");
        $content.html($txt);
    });
})
