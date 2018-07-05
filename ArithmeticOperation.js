function multiply(num1, num2)
{
	return num1*num2;
}
function substract(num1,num2){ 
	var result;
	try{   
	result=num1-num2;
    }catch(error){
		result=error.message;
    }
    document.getElementById('resultSection').innerHTML=difference;
	}

	