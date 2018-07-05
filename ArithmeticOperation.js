function add(num1,num2){
var result;
if(num1.trim().length==0 ||num2.trim().length==0 ){
    document.getElementById("resultSection").innerHTML = 'please provide both numbers';
   return;
}

result =  num1+num2;
document.getElementById("resultSection").innerHTML = result;
}

function division(num1,num2){
    var result;
    document.getElementById("resultSection").innerHTML = "";
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
       return;
    }
    try
    {
        result = num1/num2;
    }
    catch(error){
        result = error.message;
    }
    document.getElementById("resultSection").innerHTML = result.toFixed(2);

}
function substract(num1,num2){ 
	var result;
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
       return;
    }
   	try{   
	result=num1-num2;
    }catch(error){
		result=error.message;
    }
    document.getElementById('resultSection').innerHTML=result;
	}

	

function multiply(num1, num2)
{
	var result= num1*num2;
    if(num1.trim().length==0 ||num2.trim().length==0 ){
        document.getElementById("resultSection").innerHTML = 'please provide both numbers';
       return;
    }
   
	document.getElementById("resultSection").innerHTML = result.toFixed(2);
}
