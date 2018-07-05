function multiply(num1, num2)
{
	return num1*num2;
}
function substract(num1,num2){ 
	try{   
    document.getElementById('resultSection').innerHTML='';
	difference=num1-num2;
    }catch(error){
	alert(error);
    }
    document.getElementById('resultSection').innerHTML=difference;
	}

	