function calculate(amount,rate,year){
    var p=parseInt(amount);
    var r=parseFloat(rate);
    var n=parseInt(year);

    var m_i=rate/100/12
    var t=n*12

    var x=Math.pow(1+m_i,t)
    var monthly=(p*x*m_i)/(x-1)

    var emi=monthly.toFixed(2);
    var totalpayment=(emi*t);
    var totalIntereset=(totalpayment-p);
    document.getElementById("demo").innerHTML="Loan EMI: " +"<br>"+emi+   
}
