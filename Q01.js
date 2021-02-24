//js for Question 1

var arr=[]
var x= 1
var y= 100

function evennumbers(){
	if(x%2 === 1){
		x++
	}
	
	for(var i=x; i<=y; i+=2){
	 	arr.push(i)
	}

	arr.sort(function(x, y){
	 	return y - x
	 	}
	)
	
	console.log(arr)
}

evennumbers(arr)