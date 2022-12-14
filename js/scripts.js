window.onload = init();

const color = ["Red","Green","Blue","Yellow", "Purple", "Orange", "Black", "White", "Aqua", "Lime", "Brown", "Pink", "Gray", "Hot Pink"];
const colorCode = ["#C82525", "#07A40B", "#0657E6", "#F3CC19", "#7D3C98", "#F39C12", "#000000", "#FFFFFF", "#00FFFF", "#BFFF00", "#784212", "#FFC0CB", "#555555", "#FF69B4"];

const randomBtn = [".color-one", ".color-two", ".color-tree", ".color-four"];

let score = 0;

let timeLeft = 14;

let elem = document.getElementById('some_div');

let timerId = setInterval(countdown, 1000);

let seleced;

let newColor = colorCode.slice();
let nameColor = color.slice();

let randomNumber = 0;

let b = "";

let i = 0;

function init(){
    console.log("Hello world");
    
}


randomBtnColor.call();

function randomColor(){
    let selecedcolor = color[Math.round((color.length -1) * Math.random())];
    const colorName = document.querySelector(".color-name");
    colorName.innerHTML = selecedcolor;
    seleced = colorCode[color.indexOf(selecedcolor)];
}

function randomBtnColor(){

    randomColor();

    randomNumber = Math.round(3 * Math.random());
    newColor.splice(newColor.indexOf(seleced), 1);

    btnColor(".color-one");
    btnColor(".color-two");
    btnColor(".color-tree");
    btnColor(".color-four");


    randomRightBtn(randomBtn[randomNumber]);
    
    
}

function btnColor(e){
    selecedcolor = newColor[Math.round((nameColor.length - 1) * Math.random())];
    btn = document.querySelector(e);
    btn.style.background = selecedcolor;
    newColor.splice(newColor.indexOf(selecedcolor), 1);
    nameColor.splice(nameColor.indexOf(selecedcolor), 1);
}

function randomRightBtn(e){

    let btn = document.querySelector(e);

    btn.style.backgroundColor = seleced;

}

function rightColor(e){

    const scoreDisplay = document.querySelector(".score");

    let btn = document.querySelector(e);
    let b = rgbToHexConverter(btn.style.backgroundColor);
    

    if(b === seleced){
        rightAnimation();

        score += 1;
        timeLeft = 15;

        scoreDisplay.innerHTML = "Score: " + score;

        newColor = colorCode.slice();
        nameColor = color.slice();

        
        randomBtnColor();
        
    }
    else{
        document.location.href = "gameover.html";
    }

      
}

function rightAnimation(){
    let bodyBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#46C731";
    delay(400).then(() => document.body.style.backgroundColor = bodyBackgroundColor);

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  

function rgbToHexConverter(e){
    let a = e.split("(")[1].split(")")[0];
    a = a.split(",");
    b = a.map(function(x){             
        x = parseInt(x).toString(16).toUpperCase();      
        return (x.length==1) ? "0"+x : x;  
    });
    b = "#" + b.join("");
    return b;
}


function countdown() {
    if (timeLeft == -1) {
    document.location.href = "gameover.html";
    clearTimeout(timerId);
    

    } 
    else {
    elem.innerHTML = ' Time: ' + timeLeft +  ' Sec ';
    timeLeft--;
    
    }
}

