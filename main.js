var s=[]
function submit(){
n1=document.getElementById("i1").value
n2=document.getElementById("i2").value
n3=document.getElementById("i3").value
n4=document.getElementById("i4").value
s.push(n1)
s.push(n2)
s.push(n3)
s.push(n4)
document.getElementById("display").innerHTML=s
document.getElementById("sub").style.display="none"
document.getElementById("sor").style.display="inline-block"
}
function sorted(){
s.sort()
document.getElementById("display").innerHTML=s



}
