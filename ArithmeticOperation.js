
function division(num1,num2){
    var result;
    try
    {
        result = num1/num2;
    }
    catch(error){
        result = error.message;
    }
    document.getElementById("resultSection").innerHTML = result;

}
function substract(num1,num2){ 
	var result;
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
	document.getElementById("resultSection").innerHTML = result;
}

