function eraseData(){
    document.getElementById('t1').value = ""
  }

function area(){
    let r =  document.getElementById('t1').value
    const PI = 3.14
    let aoc = PI*r*r
    alert(aoc);
}