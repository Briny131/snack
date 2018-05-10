window.onload=()=>{
	$('.choose').eq(0).hover(function(){ //这里如果使用箭头函数，内部调用this指向的是window对象而不是调用函数对象
		$(this).toggleClass('green');
	}).click(()=>{
		window.location.href='demo/snack.html?120'
	});
	$('.choose').eq(1).hover(function(){
		$(this).toggleClass('yellow');
	}).click(()=>{
		window.location.href='demo/snack.html?60'
	});
	$('.choose').eq(2).hover(function(){
		$(this).toggleClass('red');
	}).click(()=>{
		window.location.href='demo/snack.html?30'
	});
}