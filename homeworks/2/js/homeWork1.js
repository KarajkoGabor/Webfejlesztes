var tempX = 0;
  var tempY = 0;

  function getMouseXY(e) {
    if (IE) { // grab the x-y pos.s if browser is IE
      tempX = event.clientX + document.body.scrollLeft;
      tempY = event.clientY + document.body.scrollTop;
    }
    else {  // grab the x-y pos.s if browser is NS
      tempX = e.pageX;
      tempY = e.pageY;
    }  

    if (tempX < 0){tempX = 0;}
    if (tempY < 0){tempY = 0;}  

    document.getElementById('X').value = tempX;
    document.getElementById('Y').value = tempY;

    //document.Show.X.value = tempX;//X is textbox
    //document.Show.Y.value = tempY;//Y is textbox

    return true;
  }