function doSum(){
    //Getting value from t1
 let x= document.getElementById('t1').value
 //Getting value from t2
 let y= document.getElementById('t2').value
 let sum =eval(x) + eval(y)
 //Setting value to alert
 alert(sum)
}

function doSub(){
    let x= document.getElementById('t1').value
    //Getting value from t2
    let y= document.getElementById('t2').value
    let subtract = eval(x) - eval(y)
    alert(subtract);
}

function mul(){
    let x= document.getElementById('t1').value
    //Getting value from t2
    let y= document.getElementById('t2').value
    let multiplication = eval(x) * eval(y)
    alert(multiplication);
}

function div(){
    let x= document.getElementById('t1').value
    //Getting value from t2
    let y= document.getElementById('t2').value
    let div = eval(x) / eval(y)
    alert(div);
}

function mod(){
    let x= document.getElementById('t1').value
    //Getting value from t2
    let y= document.getElementById('t2').value
    let mod = eval(x) % eval(y)
    alert(mod);
}


function eraseData(){
  document.getElementById('t1').value = ""
  document.getElementById('t2').value = ""
}