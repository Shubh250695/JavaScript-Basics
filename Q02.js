//js for Question 2

var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function findnum(newarr, val){
	var newind= -1
	newarr.forEach(function(item, index){
		if(item==val){
			newind=index
		}
	}
    )
    
	return newind
}

var opnum=findnum(arr,20)

console.log(opnum)