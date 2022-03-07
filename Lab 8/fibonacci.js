function fibo()
{
    const n=parseInt(prompt('Enter the number:'));
    let a=0,b=1,result;
    let a1="",b1=""
    for(let i=1;i<=n;i++)
    {
    console.log(a1);
    console.log(b1);
    result=a+b;
    a=b;
    b=result;
    a1=a+"<br/>";
    b1=b+"<br/>";
    }
    document.getElementById("x").innerHTML=a1;
    document.getElementById("y").innerHTML=b1;
}
