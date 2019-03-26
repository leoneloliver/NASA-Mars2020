const mapHeight = 500;
const mapWidth = 600;
const marginBody = 20;
const squereSize = 20;
const maxX = 24;
const maxY = 29;
const minXY = 0;
const timetoRemove = 3000;
let howManyExploded = 0;
const msg = ['X should be between '+minXY+' and '+maxX+' and Y between '+minXY+' and '+ maxY+'', ''];
const rover = document.getElementsByClassName('rover');
const map = document.getElementById('map');
let guyLeft = marginBody;
let guyTop = marginBody;
const direction = document.getElementById('direction');
const cX = document.getElementById('cX');
const cY = document.getElementById('cY');
const btnLand = document.getElementById('btn-land');
const btnMove = document.getElementById('btn-move');

map.style.height = mapHeight+'px';
map.style.width = mapWidth+'px';

Array.from(rover).forEach(function(element){
  element.style.height = squereSize+'px';
  element.style.width = squereSize+'px';
});

let sectedRover = "";
const btnRover = document.getElementsByClassName("brnRover");
Array.from(btnRover).forEach(function(element){
  element.addEventListener("click", function(){
    for(let i = 0; i < btnRover.length; i++ ){
      btnRover[i].classList.remove("active");
    }
    this.classList.add('active');
    sectedRover = this.id;
  });
});

function move(){
  let selectedEl = "";
  for(let i = 0; i < btnRover.length; i++ ){
     if(btnRover[i].classList.contains('active')){
       selectedEl = i;
     }
   }
  let c = selectedEl;
  roverTop = rover[c].offsetTop;
  roverLeft = rover[c].offsetLeft;
  if(rover[c].classList.contains('right')){
    if(roverLeft >= mapWidth){
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function(){ 
        rover[c].remove(); 
        btnRover[c].remove();
        for(let i = 0; i < btnRover.length; i++ ){
          btnRover[0].classList.add("active");
        }
        btnMove.classList.remove('disabled');
      }, timetoRemove);
      printConsole("<span class='danger'><a>["+idRover+"]</a> has been destroyed - Only "+(4-howManyExploded)+" rover(s) avalible.</span>");
    }else{
      roverLeft+=20;
		  rover[c].style.left = roverLeft + 'px';
    }
	}else if(rover[c].classList.contains('left')){
    if(roverLeft <= marginBody){
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function(){ 
        rover[c].remove(); 
        btnRover[c].remove();
        for(let i = 0; i < btnRover.length; i++ ){
          btnRover[0].classList.add("active");
        }
        btnMove.classList.remove('disabled');
      }, timetoRemove);
      printConsole("<span class='danger'><a>["+idRover+"]</a> has been destroyed - Only "+(4-howManyExploded)+" rover(s) avalible.</span>");
    }else{
      roverLeft-=20;
		  rover[c].style.left = roverLeft + 'px';
    }
	}else if(rover[c].classList.contains('down')){
    if(roverTop >= mapHeight){
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function(){ 
        rover[c].remove(); 
        btnRover[c].remove();
        for(let i = 0; i < btnRover.length; i++ ){
          btnRover[0].classList.add("active");
        }
        btnMove.classList.remove('disabled');
      }, timetoRemove);
      printConsole("<span class='danger'><a>["+idRover+"]</a> has been destroyed - Only "+(4-howManyExploded)+" rover(s) avalible.</span>");
    }else{
      roverTop+=20;
      rover[c].style.top = roverTop + 'px';
    }
	}else if(rover[c].classList.contains('up')){
    if(roverTop <= marginBody){
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function(){ 
        rover[c].remove(); 
        btnRover[c].remove();
        for(let i = 0; i < btnRover.length; i++ ){
          btnRover[0].classList.add("active");
        }
        btnMove.classList.remove('disabled');
      }, timetoRemove);
      printConsole("<span class='danger'><a>["+idRover+"]</a> has been destroyed - Only "+(4-howManyExploded)+" rover(s) avalible.</span>");
    }else{
      roverTop-=20;
      rover[c].style.top = roverTop + 'px';
    }
	}else{
    let idRover = rover[c].id;
    printConsole("<span class='danger'><a>["+idRover+"]</a> need to be landed first!</span>");
  }
}
function land(){
  let selectedEl = "";
  for(let i = 0; i < btnRover.length; i++ ){
     if(btnRover[i].classList.contains('active')){
        selectedEl = i;
     }
   }
  let c = selectedEl;
  let classIt = direction.value;
  let a = cX.value;
  let b = cY.value;
  if((a < minXY || a > maxX) || (b < minXY || b > maxY)){
    printConsole("<span class='danger'>"+msg[0]+"</span>");
  }else{
    rover[c].classList.remove('up', 'down', 'left', 'right', 'initial');
    rover[c].classList.add(classIt);
    let h = (mapHeight-20);
    let x = h - (a*20);
    let y = b*20;
    rover[c].style.top = x+marginBody+'px';
    rover[c].style.left = y+marginBody+'px';
    let idRover = rover[c].id;
    printConsole("<span><a>["+idRover+"]</a> landed!</span>");
  }
}

function isNumber(evt) {
  let iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) return false;
  return true;
}

function rotate(p){
  let selectedEl = "";
  for(let i = 0; i < btnRover.length; i++ ){
     if(btnRover[i].classList.contains('active')){
       selectedEl = i;
     }
   }
  let isInitial = rover[selectedEl].classList.contains('initial');
  if(!isInitial){
    const elClass = rover[selectedEl].classList[1];
    let updateClass = "";
    if(p == 'L'){
      if(elClass == "up"){
        updateClass = "left";
      }else if(elClass == "left"){
        updateClass = "down";
      }else if(elClass == "down"){
        updateClass = "right";
      }else{
        updateClass = "up";
      }
    }else{
      if(elClass == "up"){
          updateClass = "right";
        }else if(elClass == "right"){
          updateClass = "down";
        }else if(elClass == "down"){
          updateClass = "left";
        }else{
           updateClass = "up";
        }
    }
    rover[selectedEl].classList.remove('up', 'down', 'left', 'right');
    rover[selectedEl].classList.add(updateClass);
  }
}

const btnSolil = document.getElementById("showSoil");
btnSolil.addEventListener("click", function(){
  document.body.classList.toggle('mars');
  btnSolil.classList.toggle('click');
});
const btnCamera = document.getElementById("showCamera");
btnCamera.addEventListener("click", function(){
  document.getElementById("camera").classList.toggle('show');
  btnCamera.classList.toggle('click');
});

function printConsole(text){
  const console = document.getElementById('console');
  const controls = document.getElementById('controls');
  if(howManyExploded>=4){
    console.innerHTML = "<p> >_ "+text+"</p>";
    controls.innerHTML = "<div class='container-xy'><p class='bye-msg'>Youfailed on the Rover Mars Mission =( </p><div>";
  }else if(howManyExploded==3){
    console.innerHTML = "<p class='blink'> >_ "+text+"</p>";   
  }else{
    console.innerHTML = "<p> >_ "+text+"</p>";    
  }
  
}

function start(){
  rover[0].style.top = squereSize+'px';
  rover[0].style.left = '-'+squereSize+'px';
  rover[1].style.top = squereSize+'px';
  rover[1].style.left = '-'+squereSize+'px';
  rover[2].style.top = squereSize+'px';
  rover[2].style.left = '-'+squereSize+'px';
  rover[3].style.top = squereSize+'px';
  rover[3].style.left = '-'+squereSize+'px';
}
start();
