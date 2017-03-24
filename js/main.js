document.addEventListener('submit', function (event) {
    event.preventDefault();


    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    console.log('The First Name is: ' + firstName);
    console.log('The Last Name is: ' + lastName);
    console.log('The Email is: ' + email);
    console.log('The message is: ' + message);

    console.log('I think your site is quite beautiful. Also, this form is great!');
});
