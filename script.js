let xo = "X";
let array = [,,,,,,,,];
let x ;
let o ;
let hX = 0;
let hO = 0;
let z = 2;   // z =+ 1
function myFuc() {
    //alert(z);
if(z % 2 === 0){
    let myId = event.srcElement.id;     
    if(myId === "div1"){
        document.getElementById("d1").innerHTML = xo;
        array[0] = xo
    }

    if(myId === "div2"){
        document.getElementById("d2").innerHTML = xo;
        array[1] = xo
    }

    if(myId === "div3"){
        document.getElementById("d3").innerHTML = xo;
        array[2] = xo
    }

    if(myId === "div4"){
        document.getElementById("d4").innerHTML = xo;
        array[3] = xo
    }

    if(myId === "div5"){
        document.getElementById("d5").innerHTML = xo;
        array[4] = xo
    }

    if(myId === "div6"){
        document.getElementById("d6").innerHTML = xo;
        array[5] = xo
    }

    if(myId === "div7"){
        document.getElementById("d7").innerHTML = xo;
        array[6] = xo
    }

    if(myId === "div8"){
        document.getElementById("d8").innerHTML = xo;
        array[7] = xo
    }

    if(myId === "div9"){
        document.getElementById("d9").innerHTML = xo;
        array[8] = xo
    }

    if(xo === "X"){
        xo = "O"
    }else{
        xo = "X";
    } 

//xxxxxx

    if((array[0] === "X") && (array[1] === "X") && (array[2] === "X")){
        document.querySelectorAll('#d1,#d2,#d3').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[3] === "X") && (array[4] === "X") && (array[5] === "X")){
        document.querySelectorAll('#d4,#d5,#d6').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[6] === "X") && (array[7] === "X") && (array[8] === "X")){
        document.querySelectorAll('#d7,#d8,#d9').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[0] === "X") && (array[5] === "X") && (array[6] === "X")){
        document.querySelectorAll('#d1,#d6,#d7').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[1] === "X") && (array[4] === "X") && (array[7] === "X")){
        document.querySelectorAll('#d2,#d5,#d8').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[2] === "X") && (array[3] === "X") && (array[8] === "X")){
        document.querySelectorAll('#d3,#d4,#d9').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[0] === "X") && (array[4] === "X") && (array[8] === "X")){
        document.querySelectorAll('#d1,#d5,#d9').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }
    if((array[2] === "X") && (array[4] === "X") && (array[6] === "X")){
        document.querySelectorAll('#d3,#d5,#d7').forEach(val => val.style.color = "red")
        hX += 1
        document.getElementById("hashivX3").innerHTML = hX;
        z += 1
    }

//OOOOOOO

    if((array[0] === "O") && (array[1] === "O") && (array[2] === "O")){
        document.querySelectorAll('#d1,#d2,#d3').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[3] === "O") && (array[4] === "O") && (array[5] === "O")){
        document.querySelectorAll('#d4,#d5,#d6').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[6] === "O") && (array[7] === "O") && (array[8] === "O")){
        document.querySelectorAll('#d7,#d8,#d9').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[0] === "O") && (array[5] === "O") && (array[6] === "O")){
        document.querySelectorAll('#d1,#d6,#d7').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[1] === "O") && (array[4] === "O") && (array[7] === "O")){
        document.querySelectorAll('#d2,#d5,#d8').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[2] === "O") && (array[3] === "O") && (array[8] === "O")){
        document.querySelectorAll('#d3,#d4,#d9').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[0] === "O") && (array[4] === "O") && (array[8] === "O")){
        document.querySelectorAll('#d1,#d5,#d9').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }

    if((array[2] === "O") && (array[4] === "O") && (array[6] === "O")){
        document.querySelectorAll('#d3,#d5,#d7').forEach(val => val.style.color = "red")
        hO += 1
        document.getElementById("hashivO4").innerHTML = hO;
        z += 1
    }
}
}  

function jnjel(){

    document.querySelectorAll('#d1,#d2,#d3,#d4,#d5,#d6,#d7,#d8,#d9').forEach(val => val.innerHTML = "")
    document.querySelectorAll('#d1,#d2,#d3,#d4,#d5,#d6,#d7,#d8,#d9').forEach(val => val.style.color = "black")   
    array = [,,,,,,,,];
    if(z % 2 !== 0){
        z += 1   
    }
   
}

function anunner(){
    x = document.getElementById("anun1").value;
    o = document.getElementById("anun2").value;
    localStorage.setItem('x',x)
    localStorage.setItem('o',o)
    
}

function anun(){
    window.onload=function(){
    document.getElementById("hashivX1").innerHTML = localStorage.getItem('x')+"(X) -";
    document.getElementById("hashivO2").innerHTML = localStorage.getItem('o')+"(O) -"; 
};
}
let c = 0;
function myFuc2(){
    c += 1 
    if(c === 15){
        window.location.href = "index3.html";
        //alert("Gor Saribekyan");
        c = 0
    }
    

}


/*
function myFunction() {
    window.localStorage.clear();
    let test = 1;      
    test += 2
    localStorage.setItem('test',test);   
}
function myFunction1(){
    if(localStorage.getItem('test') > 2){
    
        window.onload=function(){
        //alert(localStorage.getItem('test'));
        let myobj;
        myobj = document.getElementById("hashivX1");
        myobj.remove();
        myobj = document.getElementById("hashivO2");
        myobj.remove();    
        myobj = document.getElementById("hashivX3");
        myobj.remove();    
        myobj = document.getElementById("hashivO4");
        myobj.remove();    
        window.localStorage.clear();
        }       
    }
}
*/
/*
    {
    var myobj = document.getElementsById("hashivX1");
    myobj.remove();
    }
function myFuc1(){   
    hO += 1
    document.getElementById("hashivX3").innerHTML = hO;        
}
myFuc1();
setTimeout(function(){
document.getElementsByClassName("hashivY2").innerHTML = "bdfhdfsj";
document.getElementsByClassName("hashivX1").innerHTML = "dfsj";    
}, 3000);
document.getElementById("d2").innerHTML = "New text!";
    setTimeout(function(){alert(o); }, 3000);
    document.getElementById("d1").innerHTML = x;
*/

