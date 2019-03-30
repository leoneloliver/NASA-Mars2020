const mapHeight = 500;
const mapWidth = 600;
const marginBody = 20;
const squareSize = 20;
const maxX = 24;
const maxY = 29;
const minXY = 0;
const timetoRemove = 3000;
let howManyExploded = 0;
const msg = ['X should be between ' + minXY + ' and ' + maxX + ' and Y between ' + minXY + ' and ' + maxY + ''];
const msgDanger = ['has been destroyed it was driven off the plateau.','rover(s) available.','need to be landed first!',' landed!'];
const msgEnd = ['You failed on the Rover Mars Mission.'];

const rover = document.getElementsByClassName('rover');
const map = document.getElementById('map');
let guyLeft = marginBody;
let guyTop = marginBody;
const direction = document.getElementById('direction');
const cX = document.getElementById('cX');
const cY = document.getElementById('cY');
const btnLand = document.getElementById('btn-land');
const btnMove = document.getElementById('btn-move');

map.style.height = mapHeight + 'px';
map.style.width = mapWidth + 'px';

Array.from(rover).forEach(function (element) {
  element.style.height = squareSize + 'px';
  element.style.width = squareSize + 'px';
});

const btnRover = document.getElementsByClassName("brnRover");
Array.from(btnRover).forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < btnRover.length; i++) {
      btnRover[i].classList.remove("active");
    }
    this.classList.add('active');
    getRoverSelected();
  });
});

function move() {
  let selectedEl = "";
  for (let i = 0; i < btnRover.length; i++) {
    if (btnRover[i].classList.contains('active')) {
      selectedEl = i;
    }
  }
  let c = selectedEl;
  roverTop = rover[c].offsetTop;
  roverLeft = rover[c].offsetLeft;
  if (rover[c].classList.contains('right')) {
    if (roverLeft >= mapWidth) {
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function () {
        rover[c].remove();
        if(howManyExploded < 4){
          btnRover[c].remove();
          for (let i = 0; i < btnRover.length; i++) {
            btnRover[0].classList.add("active");
          }
          btnMove.classList.remove('disabled');
          getRoverSelected();
        }  
      }, timetoRemove);
      printConsole("<span class='danger'><a>[" + idRover + "]</a> "+msgDanger[0]+ " " + (4 - howManyExploded) + " "+msgDanger[1]+"</span>");
    } else {
      roverLeft += squareSize;
      rover[c].style.left = roverLeft + 'px';
    }
  } else if (rover[c].classList.contains('left')) {
    if (roverLeft <= marginBody) {
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function () {
        rover[c].remove();
        if(howManyExploded < 4){
          btnRover[c].remove();
          for (let i = 0; i < btnRover.length; i++) {
            btnRover[0].classList.add("active");
          }
          btnMove.classList.remove('disabled');
          getRoverSelected();
        }  
      }, timetoRemove);
      printConsole("<span class='danger'><a>[" + idRover + "]</a> "+msgDanger[0]+ " " + (4 - howManyExploded) + " "+msgDanger[1]+"</span>");
    } else {
      roverLeft -= squareSize;
      rover[c].style.left = roverLeft + 'px';
    }
  } else if (rover[c].classList.contains('down')) {
    if (roverTop >= mapHeight) {
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function () {
        rover[c].remove();
        if(howManyExploded < 4){
          btnRover[c].remove();
          for (let i = 0; i < btnRover.length; i++) {
            btnRover[0].classList.add("active");
          }
          btnMove.classList.remove('disabled');
          getRoverSelected();
        }  
      }, timetoRemove);
      printConsole("<span class='danger'><a>[" + idRover + "]</a> "+msgDanger[0]+ " " + (4 - howManyExploded) + " "+msgDanger[1]+"</span>");
    } else {
      roverTop += squareSize;
      rover[c].style.top = roverTop + 'px';
    }
  } else if (rover[c].classList.contains('up')) {
    if (roverTop <= marginBody) {
      btnMove.classList.add('disabled');
      rover[c].classList.add('explode');
      howManyExploded++;
      let idRover = rover[c].id;
      setTimeout(function () {
        rover[c].remove();
        if(howManyExploded < 4){
          btnRover[c].remove();
          for (let i = 0; i < btnRover.length; i++) {
            btnRover[0].classList.add("active");
          }
          btnMove.classList.remove('disabled');
          getRoverSelected();
        }  
      }, timetoRemove);
      printConsole("<span class='danger'><a>[" + idRover + "]</a> "+msgDanger[0]+ " " + (4 - howManyExploded) + " "+msgDanger[1]+"</span>");
    } else {
      roverTop -= squareSize;
      rover[c].style.top = roverTop + 'px';
    }
  } else {
    let idRover = rover[c].id;
    printConsole("<span class='danger'><a>[" + idRover + "]</a> "+msgDanger[2]+"</span>");
  }
}

function land() {
  let selectedEl = "";
  for (let i = 0; i < btnRover.length; i++) {
    if (btnRover[i].classList.contains('active')) {
      selectedEl = i;
    }
  }
  let c = selectedEl;
  let classIt = direction.value;
  let a = cX.value;
  let b = cY.value;
  if ((a < minXY || a > maxX) || (b < minXY || b > maxY)) {
    printConsole("<span class='danger'>" + msg[0] + "</span>");
  } else {
    rover[c].classList.remove('up', 'down', 'left', 'right', 'initial');
    rover[c].classList.add(classIt);
    let h = (mapHeight - squareSize);
    let x = h - (a * squareSize);
    let y = b * squareSize;
    rover[c].style.top = x + marginBody + 'px';
    rover[c].style.left = y + marginBody + 'px';
    let idRover = rover[c].id;
    printConsole("<span><a>[" + idRover + "]</a> "+msgDanger[3]+"</span>");
  }
  getRoverSelected();
}

function isNumber(evt) {
  let iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) return false;
  return true;
}

function rotate(p) {
  let selectedEl = "";
  for (let i = 0; i < btnRover.length; i++) {
    if (btnRover[i].classList.contains('active')) {
      selectedEl = i;
    }
  }
  let isInitial = rover[selectedEl].classList.contains('initial');
  if (!isInitial) {
    const elClass = rover[selectedEl];
    let updateClass = "";
    if (p == 'L') {
      if (elClass.classList.contains("up")) {
        updateClass = "left";
      } else if (elClass.classList.contains("left")) {
        updateClass = "down";
      } else if (elClass.classList.contains("down")) {
        updateClass = "right";
      } else {
        updateClass = "up";
      }
    } else {
      if (elClass.classList.contains("up")) {
        updateClass = "right";
      } else if (elClass.classList.contains("right")) {
        updateClass = "down";
      } else if (elClass.classList.contains("down")) {
        updateClass = "left";
      } else {
        updateClass = "up";
      }
    }
    rover[selectedEl].classList.remove('up', 'down', 'left', 'right');
    rover[selectedEl].classList.add(updateClass);
  }
}

const btnSolil = document.getElementById("showSoil");
btnSolil.addEventListener("click", function () {
  document.body.classList.toggle('mars');
  btnSolil.classList.toggle('click');
});
const btnCamera = document.getElementById("showCamera");
btnCamera.addEventListener("click", function () {
  document.getElementById("camera").classList.toggle('show');
  btnCamera.classList.toggle('click');
});

function printConsole(text) {
  const console = document.getElementById('console');
  const controls = document.getElementById('controls');
  if (howManyExploded >= 4) {
    console.innerHTML = "<p> >_ " + text + "</p>";
    controls.innerHTML = "<div class='container-xy'><p class='bye-msg'>"+msgEnd[0]+"</p><div class='fail'><img src='images/astronaut.gif'></div><div>";
  } else if (howManyExploded == 3) {
    console.innerHTML = "<p class='blink'> >_ " + text + "</p>";
  } else {
    console.innerHTML = "<p> >_ " + text + "</p>";
  }
}

function getRoverSelected() {
  let selectedEl = "";
  for (let i = 0; i < btnRover.length; i++) {
    if (btnRover[i].classList.contains('active')) {
      selectedEl = i;
    }
    rover[i].classList.remove('moving');
  }
  rover[selectedEl].classList.add('moving');
}

function start() {
  rover[0].style.top = squareSize + 'px';
  rover[0].style.left = '-' + squareSize + 'px';
  rover[1].style.top = squareSize + 'px';
  rover[1].style.left = '-' + squareSize + 'px';
  rover[2].style.top = squareSize + 'px';
  rover[2].style.left = '-' + squareSize + 'px';
  rover[3].style.top = squareSize + 'px';
  rover[3].style.left = '-' + squareSize + 'px';
}
start();
