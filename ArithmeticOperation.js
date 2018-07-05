function division(num1,num2){
    var result;
    try
    {
        result = num1/num2;
    }
    catch(error){
        result = error.message;
    }
    document.getElementById("").innerHTML = result;
}