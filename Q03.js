//js for Question 3

//3.1
function mo1(){
    document.getElementById("root").style.color = "red"
}
function mt1(){
	document.getElementById("root").style.color = "black"
}

//3.2
var bodyRef = document.getElementsByClassName('blue-white')
function mo2(){
	bodyRef[0].addEventListener('mouseover', function(){
		bodyRef[0].style.color = 'white';
		bodyRef[0].style.backgroundColor = 'blue'
	})
	bodyRef[1].addEventListener('mouseover', function(){
		bodyRef[1].style.color = 'white';
		bodyRef[1].style.backgroundColor = 'blue'
	})
}
  
function mt2(){
	bodyRef[0].addEventListener('mouseout', function(){
		bodyRef[0].style.color = 'black';
		bodyRef[0].style.backgroundColor = 'white'
	})
	bodyRef[1].addEventListener('mouseout', function(){
		bodyRef[1].style.color = 'black';
		bodyRef[1].style.backgroundColor = 'white'
	})
}

//3.3
var paraRef = document.getElementsByTagName('p')
function mo3(){
	paraRef[1].addEventListener('mouseover', function(){
		paraRef[1].style.fontSize = '50px'
	})
}
  
function mt3(){
	paraRef[1].addEventListener('mouseout', function(){
		paraRef[1].style.fontSize = 'medium'
	})	
}