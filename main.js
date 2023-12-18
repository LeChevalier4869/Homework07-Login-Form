const loginForm = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const validateInput = (inputObj) => {
    const user = inputObj.username.trim().replace(' ', '');
    const pass = inputObj.password.trim().replace(' ', '');
    const role = inputObj.role;

    // Username Check
    let stateUsername = false;
    if(user != '') {
        if(user.length > 3) {
            if(!user.includes(' ')) {
                if(user[0] != Number(user[0])) {
                    stateUsername = true; // Username is true
                } else {
                    console.log('First char of username is a number');
                }
            } else {
                console.log('username has space');
            }
        } else {
            console.log('username must more than 3 character');
        }
    } else {
        console.log('Username has empty!');
    }

    // Password Check
    let statePassword = false;
    let numberCheck = false;
    let stringCheck = false;
    if(pass != '') { 
        if(pass.length > 4) {
            if(!pass.includes(' ')) {
                for(let i=0; i < pass.length; i++) {
                    if(pass[i] == Number(pass[i])) {
                        numberCheck = true;
                    } else {
                        stringCheck = true;
                    }
                }
                //console.log('num = '+ numberCheck);
                //console.log('string = '+ stringCheck);
                if(numberCheck == stringCheck) { 
                    statePassword = true; // Password is true
                } else {
                    console.log('The password must contain a string and number');
                }
            } else {
                console.log('password has space');
            }
        } else {
            console.log('The password must more than 4 character');
        }
    } else {
        console.log('Password has empty!');
    }

    // Role Check
    let stateRole = false;
    if(role != ''){
        stateRole = true;
    } else {
        console.log('Please Select Role!');
    }

    // Validate
    if(stateUsername == true && statePassword == true && stateRole == true) {
        location.assign('https://www.example.com');
    } else {
        if(stateUsername == false) {
            username.style.color = 'red';
        } else {
            username.style.color = 'black';
        }
        if(statePassword == false) {
            password.style.color = 'red';
        } else {
            password.style.color = 'black';
        }
    }
}

const hdLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements;
    let inputObj = {};
    for(let el of allInput){
        inputObj[el.id] = el.value;
    }
    console.log(inputObj);
    validateInput(inputObj);
    // console.log(username.value);
    // console.log(password.value);
}

loginForm.addEventListener('submit', hdLogin);


