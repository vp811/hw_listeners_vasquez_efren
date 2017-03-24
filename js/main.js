/*---------------------Element One---------------*/
/*---------------------Listens for mouse click---------------*/
/*---------------------Changes background Color---------------*/

var x = document.getElementById('elementOne');
x.addEventListener('click', backgroundColor);

function backgroundColor() {
    x.style.backgroundColor = 'red';
}

/*---------------------Element Two--------------*/
/*---------------------Listens for mouse hover---------------*/
/*---------------------Changes background Color, font color, and font size---------------*/
var y = document.getElementById('elementTwo');
y.addEventListener('mouseover', font);

function font() {
    y.style.color = 'yellow';
    y.style.backgroundColor = 'blue';
    y.style.fontSize = '1.3em';
}

/*---------------------Element Three--------------*/
/*---------------------Listens for double click---------------*/
/*---------------------Changes the text align to right---------------*/
var z = document.getElementById('elementThree');
z.addEventListener('dblclick', padding);

function padding() {
    z.style.textAlign = 'right';
}
