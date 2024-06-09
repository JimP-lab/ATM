<html>
<head> 
<title>Atm</title>
</head>
<body> 
<script>
console.log('ola ok trexo');
var rightpassword;
rightpassword = 'Saek123';
var remainingbalance = 1000;
var endprogram = false;
var PasswordFlag = false
var userauth1;
do{
userauth1 = prompt("Login")
console.log("userauth1="+userauth1);
if(userauth1 == rightpassword)
{
    console.log("Successfully Registered");
    PasswordFlag = true;
}
else
{
    console.log("Wrong Password");
    PasswordFlag = false;
}
}
while(PasswordFlag == false);
var optionsflag = false
var userauth2;

do{
userauth2 = prompt("Select 1:Deposit, 2:withdraw");
var userauth2Integer;
userauth2Integer = parseInt(userauth2);
console.log("userauth2="+userauth2);
console.log("userauth2Integer="+userauth2Integer);
if(userauth2Integer == 1)
{
    optionsflag = true;
    console.log("correct option: 1:deposit");
}
else if (userauth2Integer == 2)
{
    options = true;
    console.log("correct option 2:withdraw");
}
else 
{
    console.log("failed transaction");
}

var userauth3;
userauth3 = prompt("Enter amount");
var userauth3Float;
userauth3Float = parseFloat(userauth3);
console.log("userauth3="+userauth3);
console.log("userauth3Float="+userauth3Float);
if(userauth2Integer ==1){
    console.log("Select: 1: deposit");
    remainingbalance = remainingbalance + userauth3Float;

} else if (userauth2Integer ==2){
    console.log("Select: 2: withdraw");
    if(remainingbalance>=userauth3Float){
        remainingbalance = remainingbalance - userauth3Float;
    }

}

console.log("remaining balance:"+remainingbalance);
var userauth4;
userauth4 = prompt("Press 1 to finish your transaction");
var userauth4Integer = parseInt(userauth4);
if(userauth4Integer ==1){
    endprogram = true;
}
}while(endprogram == false);
</script>
</body>
</html>
