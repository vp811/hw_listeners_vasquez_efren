/*---------------------Element One--------------*/

var x = document.getElementById('elementOne');
x.addEventListener('click', backgroundColor);

function backgroundColor() {
    x.style.backgroundColor = 'red';
}

/*---------------------Element Two--------------*/
var y = document.getElementById('elementTwo');
y.addEventListener('mouseover', font);

function font() {
    y.style.color = 'yellow';
}

/*---------------------Element Three--------------*/
var z = document.getElementById('elementThree');
z.addEventListener('dblclick', padding);

function padding() {
    z.style.textAlign = 'right';
}
