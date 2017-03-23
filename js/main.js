document.getElementById('listener').addEventListener('click', myFunction);

var i = 1;
function myFunction() {

    var paragraphTag = document.createElement('p');
    var sentence = document.createTextNode('This is click number ' + i);


    paragraphTag.appendChild(sentence);
    var element = document.getElementById('listener');
    element.appendChild(paragraphTag);

    i++;
}
