function onMouseMove()
{
    var s = 'X=' + window.event.clientX +  ' Y=' + window.event.clientY ;
    document.getElementById('divCoord').innerText = s;

}

document.addEventListener('DOMContentLoaded', onMouseMove);