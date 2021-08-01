console.log("hello");
var random;
var score = 0;
function start(){
    time = 6;
    document.getElementById('secondDiv').style.backgroundColor = 'teal';
    document.getElementById('guessDiv').style.display = 'block';
    document.getElementById('reset').style.display = 'flex';
    document.getElementById('flex-boxes').style.display = 'flex';
    document.getElementById('start-btn').style.display = 'none';
    random = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('guessDiv').innerHTML = "#" + random;
    document.getElementById('btn-box1').style.backgroundColor = "#" + random;

    document.getElementById('btn-box2').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('btn-box3').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('btn-box4').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('btn-box5').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    document.getElementById('btn1').style.order =Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn2').style.order = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn3').style.order =Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn4').style.order =Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn5').style.order = Math.floor(Math.random() * 10 + 1);
    setTime = setInterval(timer,1000);
}
var setTime;
var time = 5;
function hextorgb(x)
{
    var aRgbHex = x.match(/.{1,2}/g);  //# 6  d5  9''

      var aRgb = [
          parseInt(aRgbHex[0], 16),
          parseInt(aRgbHex[1], 16),
          parseInt(aRgbHex[2], 16)
      ];
      return aRgb;
}
console.log(hextorgb('61d529'));
function timer(){
        time--;
        document.getElementById('timer-para').innerHTML =  time;
        if(time < 1){
        clearTimeout(setTime);
        document.getElementById('timeout').style.display = 'block';
        document.getElementById('flex-boxes').style.display = 'none';
        document.getElementById('show-result').style.display = 'none';
        }
        
} 
function box1(){

    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box1').style.backgroundColor;
    var clr = hextorgb(random);
    random = "rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();

    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "orange";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
    
}
function box2(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box2').innerHTML;
    var curr = document.getElementById('btn-box1').style.backgroundColor;
    var clr = hextorgb(random);
    random = "rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "orange";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
  
}
function box3(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box3').innerHTML;
    var curr = document.getElementById('btn-box1').style.backgroundColor;
    var clr = hextorgb(random);
    random = "rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "orange";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
}
function box4(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box4').innerHTML;
    var curr = document.getElementById('btn-box1').style.backgroundColor;
    var clr = hextorgb(random);
    random = "rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "orange";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
   
}
function goBack(){
    document.getElementById('flex-boxes').style.display = 'flex';
    start();
}


