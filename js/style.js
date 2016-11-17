var percent;
var bar;
bar = document.querySelectorAll('.bar');
percent = document.querySelectorAll('.bar-percent');

percent.forEach(function(item,index){
	var content = item.parentElement.nextElementSibling.innerHTML;
	var ball = item.nextElementSibling;
	var len = (Number(content[0])*10+Number(content[1]))/100;
	len *= bar[index].clientWidth;
	len -= ball.clientWidth/2;
	item.style.width = content;
	ball.style.left = len+'px';
});

var link = document.querySelectorAll('a[href="#"]');
function PreventDefault(e){
	e.preventDefault();
}
link.forEach(function(item,index){
	item.addEventListener('click',PreventDefault);
});