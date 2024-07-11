function bclick(val){
  document.getElementById('screen').value+=val

}
function sclear(){
    document.getElementById("screen").value=""

}
function equal(){
    var text =document.getElementById("screen").value
    var result =eval(text)
document.getElementById("screen").value=result
}
 