function sum()
{
    let a,b,result;
    a=parseInt(prompt("Enter the 1st value"))
    b=parseInt(prompt("Enter the 2nd value"))
    result=a+b;

    document.getElementById("b").innerHTML=b;
    document.getElementById("a").innerHTML=a;
    document.getElementById("r").innerHTML=result;
}
function print()
{
    let a;
    let x=""
    a=parseInt(prompt("Enter the value"))
    for(let i=1;i<=a;i++)
    {
     x=x+i+"<br/>";
    }
    document.getElementById("n").innerHTML=x;
}
