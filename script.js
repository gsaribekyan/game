let xo = "X";
let array = [,,,,,,,,];
let x ;
let o ;
let hX = 0;
let hO = 0;
let z = 2;   // z =+ 1
let x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0, x8 = 0, x9 = 0 ;
function myFuc() {    
if(z % 2 === 0){
    let myId = event.srcElement.id;     
    if(myId === "div1"){
        if(x1 === 0){               
            document.getElementById("d1").innerHTML = xo;        
            array[0] = xo
            x1 += 1
           
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;
        }
    }

    if(myId === "div2"){
        if(x2 === 0){
            document.getElementById("d2").innerHTML = xo;
            array[1] = xo
            x2 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }

    if(myId === "div3"){
        if(x3 === 0){
            document.getElementById("d3").innerHTML = xo;
            array[2] = xo
            x3 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }

    if(myId === "div4"){
        if(x4 === 0){
            document.getElementById("d4").innerHTML = xo;
            array[3] = xo
            x4 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }

    if(myId === "div5"){
        if(x5 === 0){
            document.getElementById("d5").innerHTML = xo;
            array[4] = xo
            x5 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }
    
    if(myId === "div6"){
        if(x6 === 0){
            document.getElementById("d6").innerHTML = xo;
            array[5] = xo
            x6 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }
    
    if(myId === "div7"){
        if(x7 === 0){
            document.getElementById("d7").innerHTML = xo;
            array[6] = xo
            x7 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }    

    if(myId === "div8"){
        if(x8 === 0){
            document.getElementById("d8").innerHTML = xo;
            array[7] = xo
            x8 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
    }
    if(myId === "div9"){
        if(x9 === 0){
            document.getElementById("d9").innerHTML = xo;
            array[8] = xo
            x9 += 1   
            if(xo === "X"){
                xo = "O"
            }else{
                xo = "X";
            } 
            document.getElementById("xoro").innerHTML = xo;                       
        }     
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
    x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0, x8 = 0, x9 = 0
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

/*xi es kods kardum :)*/
