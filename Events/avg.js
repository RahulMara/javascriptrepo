function doAvg(){
    let a= document.getElementById('t1').value
    let b= document.getElementById('t2').value
    let c= document.getElementById('t3').value
    let d= document.getElementById('t4').value
    let sum = eval(a) + eval(b) + eval(c) + eval(d)
    let avg = sum/4
    alert(avg);
}

function eraseData(){
    document.getElementById('t1').value = ""
    document.getElementById('t2').value = ""
    document.getElementById('t3').value = ""
    document.getElementById('t4').value = ""
  }