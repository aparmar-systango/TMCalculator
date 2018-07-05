<<<<<<< HEAD
function add(num1,num2){
var result;
result =  num1+num2;
document.getElementById("resultSection").innerHTML = result;
=======

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

function multiply(num1, num2)
{
	var result= num1*num2;
	document.getElementById("resultSection").innerHTML = result;
>>>>>>> d29ee64a156a74cc02e557518829ddea07fe6a8b
}

