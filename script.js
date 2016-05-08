var firstNumber, secondNumber, result;
var warningMessage, warningMessage1, warningMessage2;

function checkValid(number)
{
    if (number == 1) {
        firstNumber = document.getElementById("firstNumber").value;
        
        if (isNaN(firstNumber))
            warningMessage1 = "Giá trị nhập ở ô <span class='error-element'>Số thứ nhất</span> không phải là số";
        else
            warningMessage1 = "";
        
        warningMessage = warningMessage1;
        
        document.getElementById("warning-message").innerHTML = warningMessage;
    }
    
    if (number == 2) {
        secondNumber = document.getElementById("secondNumber").value;
        
        if (isNaN(secondNumber))
            warningMessage2 = "Giá trị nhập ở ô <span class='error-element'>Số thứ hai</span> không phải là số";
        else
            warningMessage2 = "";
        
        if (warningMessage1 != "" && warningMessage2 != "")
            warningMessage = warningMessage1 + "<br>" + warningMessage2;
        else
            warningMessage = warningMessage1 + warningMessage2;
        
        document.getElementById("warning-message").innerHTML = warningMessage;
    }
}

function doOperation() {
    
    checkValid(1);
    checkValid(2);
    
    if (warningMessage != "") {
        document.getElementById("warning-message").innerHTML = warningMessage;
        return;
    }
    
    if (firstNumber == "" || secondNumber == "") {
        if (warningMessage != "")
            warningMessage += "<br>";
        warningMessage += "Vui lòng điền đủ 2 số";
        document.getElementById("warning-message").innerHTML = warningMessage;
        return;
    }
    
    
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    
    if (document.getElementById("add").checked)
        result = firstNumber + secondNumber;
    else if (document.getElementById("subtract").checked)
        result = firstNumber - secondNumber;
    else if (document.getElementById("multi").checked)
        result = firstNumber * secondNumber;
    else if (document.getElementById("divide").checked)
        result = firstNumber / secondNumber;
    else {
        if (warningMessage != "")
            warningMessage += "<br>";
        warningMessage += "Vui lòng chọn phép toán muốn thực hiện";
        document.getElementById("warning-message").innerHTML = warningMessage;
        return;
    }
    
    document.getElementById("warning-message").innerHTML = "";
    document.getElementById("result").value = result;
}