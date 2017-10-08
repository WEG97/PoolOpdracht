var Gui = function () {
   var btnBall = document.getElementById('btnBall'); 
   if (debug) document.getElementById('statsDisplay').appendChild(stats.domElement);
}

Gui.addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

Gui.removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

Gui.prototype.show = function (node) {
    Gui.removeClass(node, 'hide');
};

Gui.prototype.hide = function (node) {
    Gui.addClass(node, 'hide');
};

Gui.prototype.playGame = function () {
    ballGame = new BallGame();
};

Gui.prototype.setGameHud = function() {
    this.hide(document.getElementById('mainMenu'));
    this.show(document.getElementById('controlsHud'));
};

Gui.prototype.updateTurn = function (str) {
    Gui.removeClass(document.getElementsByClassName('player1')[0], 'active');
    Gui.removeClass(document.getElementsByClassName('player2')[0], 'active');
    Gui.addClass(document.getElementsByClassName(str)[0], 'active');
};

Gui.prototype.updateBalls = function(ballArr, p1side, p2side) {
    p1side = p1side == '?' ? 'unknown' : p1side;
    p2side = p2side == '?' ? 'unknown' : p2side;
  
    Gui.removeClass(document.getElementsByClassName('player1')[0], 'solid');
    Gui.removeClass(document.getElementsByClassName('player2')[0], 'solid');
    Gui.removeClass(document.getElementsByClassName('player1')[0], 'striped');
    Gui.removeClass(document.getElementsByClassName('player2')[0], 'striped');
    Gui.removeClass(document.getElementsByClassName('player1')[0], 'unknown');
    Gui.removeClass(document.getElementsByClassName('player2')[0], 'unknown');
    Gui.addClass(document.getElementsByClassName('player1')[0], p1side);
    Gui.addClass(document.getElementsByClassName('player2')[0], p2side);
  
    if (p1side == 'unknown') {
      return;
    }
  
    var elem = document.createElement('ul');
    for (var i=1;i<8;i++) {
      var el = document.createElement('li');
      el.textContent = i;
      if (ballArr.indexOf(i) > -1) {
  
      } else {
        Gui.addClass(el, 'pocketed');
      }
  
      elem.appendChild(el);
    }
    document.getElementsByClassName(p1side == 'solid' ? 'player1' : 'player2')[0].replaceChild(elem, document.getElementsByClassName(p1side == 'solid' ? 'player1' : 'player2')[0].children[1]);
    elem = document.createElement('ul');
    for (var i=9;i<16;i++) {
      var el = document.createElement('li');
      el.textContent = i;
      if (ballArr.indexOf(i) > -1) {
  
      } else {
        Gui.addClass(el, 'pocketed');
      }
  
      elem.appendChild(el);
    }
    document.getElementsByClassName(p1side == 'striped' ? 'player1' : 'player2')[0].replaceChild(elem, document.getElementsByClassName(p1side == 'striped' ? 'player1' : 'player2')[0].children[1]);
  };
  
  Gui.prototype.showEndGame = function(str) {
    document.getElementById("gameover").children[0].textContent = str + " wint!";
    this.show(document.getElementById('gameover'));
  }
  