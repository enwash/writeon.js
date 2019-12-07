var h = document.querySelector("[data-writeon]");
var states = h.getAttribute("data-states").split('//');
var useCursor = true;
if (h.getAttribute("data-cursor")) {
  useCursor = h.getAttribute("data-cursor") == "1";
}

var typeState = function(s) {
  h.innerHTML += s[0];
  if (s.length > 1) {
    setTimeout(function() {
      typeState(s.substr(1));
    }, 100);
  }
};

var resetState = function() {
  if (h.innerHTML.length < 1) {
    h.innerHTML = "";
  }
  if (h.innerHTML != "") {
    h.innerHTML = h.innerHTML.substring(0, h.innerHTML.length - 1);
    setTimeout(function() {
      resetState();
    }, 100);
  }
};

var idle = function(s) {
  // Input even number, if even no | if odd then yes |
  if (s % 2 == 0 && useCursor) {
    h.innerHTML += " |";
  } else {
    if (useCursor) {
      h.innerHTML = h.innerHTML.substring(0, h.innerHTML.length - 2);      
    }
    else {
      h.innerHTML = h.innerHTML.substring(0, h.innerHTML.length);
    }
  }
  if (s > 1) {
    setTimeout(function() {
      idle(s - 1);
    }, 500);
  } else {
    resetState();
  }
};

var cState = -1;
var writeon = function() {
  cState = (cState + 1) % states.length;
  typeState(states[cState]);
  setTimeout(function() {
    idle(6);
  }, 100 * states[cState].length + 100);
  setTimeout(function() {
    writeon();
  }, 200 * (states[cState].length - 1) + 500 * 6);
};

setTimeout(function() {
  writeon();
}, 300);
