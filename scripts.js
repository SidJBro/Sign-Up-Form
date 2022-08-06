


function checkPasswords() {

    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (password.length < 8) {
        return alert('Password must be at least 8 characters long.')
    }

    if (password !== confirm) {
        return alert('Passwords do not match.')
    }
 
    alert('Your account was succesfullly created. (Not really.)');
}

document.querySelector('.my-button').addEventListener('click', function () {

    const inputs = Array.from(document.querySelectorAll('input'));

    let allFieldsFilled = true;

    inputs.forEach(input => {
        if (input.value.length < 1) {
            return allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
       checkPasswords();
    } 
    else {
        alert('Please make sure that all form fields are filled.');
    }
});