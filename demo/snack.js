var pos='down',time,pos1='down';
const N=32;
window.onload=function(e){
	time=Number(e.currentTarget.location.search.slice(1));
	let num=0,x=120/time;
	let src=[],snack=[],empty=[];
	//let L=Math.floor(Math.random()*N*N);
	let L=56;
	snack.push(L);
	for(let i = 0 ;i < N*N; i++)
	{
		src.push({num:i,key:0});
		empty.push(i);
		$('.body').append('<div class="box"><div class="content stand"></div></box>');
	}
	empty=reflesh(empty,L,'');
	src=random1(src,empty);
	src[L].num=-1;
	$('.content').eq(snack[0]).addClass('red');
	setTimeout(function(){move(src,snack,empty,pos,num,x)},time);
	$('.sure').click(function(){
		window.location.reload();
	})
	$('.refuse').click(function(){
		window.location.href='../demo.html';
	})
}

$(window).keydown(function(e){
	let key=Number(e.originalEvent.keyCode);
	switch (key) {
		case 38:
			if(pos1!='down')
			pos='up';
			break;
		case 39:
			if(pos1!='left')
			pos='right';
			break;
		case 40:
			if(pos1!='up')
			pos='down';
			break;
		case 37:
			if(pos1!='right')
			pos='left';
			break;
		default:
			console.log('check your input');
			break;
	}
})


function move(arr,sna,emp,p,num,x){

	if(p=='down')
	{
		pos1='down';
		if(sna[0]+N<=63?arr[sna[0]+N].num==-1:(Math.floor(sna[0]+N)/N)>=N)
		{
			$('.all').removeClass('en');
			$('#count').text(num);
		}
		else
		{
			if(arr[sna[0]+N].key==1)
			{
				console.log('key');
				$('.content').eq(arr[sna[0]+N].num).removeClass('stand');
				$('.content').eq(arr[sna[0]+N].num).addClass('small');
				arr=random1(arr,emp);
				num+=x;
			}
			arr[sna[0]+N].num=-1;
			$('.content').eq(sna[0]).removeClass('head').addClass('red');
			sna.unshift(sna[0]+N);
			$('.content').eq(sna[0]).removeClass('green').addClass('head');
			if(arr[sna[sna.length-1]].key!=1)
			{
				arr[sna[sna.length-1]].num=sna[sna.length-1];
				$('.content').eq(sna[sna.length-1]).removeClass('red');
				empemp=reflesh(emp,sna[0],sna[sna.length-1]);
				sna.pop();
			}
			else
			{
				$('.content').eq(sna[sna.length-1]).removeClass('small').addClass('red stand');
				arr[sna[sna.length-1]].key=0;
				emp=reflesh(emp,sna[0],'');
			}
			setTimeout(function(){move(arr,sna,emp,pos,num,x)},time);
		}
	}


	if(p=='up')
	{
		pos1='up';
		if(sna[0]-N>=0?arr[sna[0]-N].num==-1:(Math.floor(sna[0]-N)/N)<0)
		{
			$('.all').removeClass('en');
			$('#count').text(num);
		}
		else
		{
			if(arr[sna[0]-N].key==1)
			{
				console.log('key');
				$('.content').eq(arr[sna[0]-N].num).removeClass('stand');
				$('.content').eq(arr[sna[0]-N].num).addClass('small');
				arr=random1(arr,emp);
				num+=x;
			}
			arr[sna[0]-N].num=-1;
			$('.content').eq(sna[0]).removeClass('head').addClass('red');
			sna.unshift(sna[0]-N);
			$('.content').eq(sna[0]).removeClass('green').addClass('head');
			if(arr[sna[sna.length-1]].key!=1)
			{
				arr[sna[sna.length-1]].num=sna[sna.length-1];
				$('.content').eq(sna[sna.length-1]).removeClass('red');
				empemp=reflesh(emp,sna[0],sna[sna.length-1]);
				sna.pop();
			}
			else
			{
				$('.content').eq(sna[sna.length-1]).removeClass('small').addClass('red stand');
				arr[sna[sna.length-1]].key=0;
				emp=reflesh(emp,sna[0],'');
			}
			setTimeout(function(){move(arr,sna,emp,pos,num,x)},time);
		}
	}
	

	if(p=='right')
	{
		pos1='right';
		if((sna[0]+1)%N!=0?arr[sna[0]+1].num==-1:true)
		{
			$('.all').removeClass('en');
			$('#count').text(num);
		}
		else
		{
			if(arr[sna[0]+1].key==1)
			{
				console.log('key');
				$('.content').eq(arr[sna[0]+1].num).removeClass('stand');
				$('.content').eq(arr[sna[0]+1].num).addClass('small');
				arr=random1(arr,emp);
				num+=x;
			}
			arr[sna[0]+1].num=-1;
			$('.content').eq(sna[0]).removeClass('head').addClass('red');
			sna.unshift(sna[0]+1);
			$('.content').eq(sna[0]).removeClass('green').addClass('head');
			if(arr[sna[sna.length-1]].key!=1)
			{
				arr[sna[sna.length-1]].num=sna[sna.length-1];
				$('.content').eq(sna[sna.length-1]).removeClass('red');
				empemp=reflesh(emp,sna[0],sna[sna.length-1]);
				sna.pop();
			}
			else
			{
				$('.content').eq(sna[sna.length-1]).removeClass('small').addClass('red stand');
				arr[sna[sna.length-1]].key=0;
				emp=reflesh(emp,sna[0],'');
			}
			setTimeout(function(){move(arr,sna,emp,pos,num,x)},time);
		}
	} 


	if(p=='left')
	{
		pos1='left';
		if((sna[0]-1)%N!=N-1?arr[sna[0]-1].num==-1:true)
		{
			$('.all').removeClass('en');
			$('#count').text(num);
		}
		else
		{
			if(arr[sna[0]-1].key==1)
			{
				console.log('key');
				$('.content').eq(arr[sna[0]-1].num).removeClass('stand');
				$('.content').eq(arr[sna[0]-1].num).addClass('small');
				arr=random1(arr,emp);
				num+=x;
			}
			arr[sna[0]-1].num=-1;
			$('.content').eq(sna[0]).removeClass('head').addClass('red');
			sna.unshift(sna[0]-1);
			$('.content').eq(sna[0]).removeClass('green').addClass('head');
			if(arr[sna[sna.length-1]].key!=1)
			{
				arr[sna[sna.length-1]].num=sna[sna.length-1];
				$('.content').eq(sna[sna.length-1]).removeClass('red');
				empemp=reflesh(emp,sna[0],sna[sna.length-1]);
				sna.pop();
			}
			else
			{
				$('.content').eq(sna[sna.length-1]).removeClass('small').addClass('red stand');
				arr[sna[sna.length-1]].key=0;
				emp=reflesh(emp,sna[0],'');
			}
			setTimeout(function(){move(arr,sna,emp,pos,num,x)},time);
		}
	}
		
}

function reflesh(a,element1,element2){
	if(a.indexOf(element1)!=-1)
	{
		for(let i=0;i<a.length;i++)
		{
			if(a[i]==element1)
			{
				a.splice(i,1);
				break;
			}
		}
	}
	else 
		console.log('error');
	if(element2!=='')
	{
		a.push(element2);
	} 
	return a;
}

function random1(s,a){
	let l=Math.floor(Math.random()*a.length);
	s[a[l]].key=1;
	$('.content').eq(a[l]).addClass('green');
	return s;
}
