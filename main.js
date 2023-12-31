const loginForm = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const users = [
    {name: 'andy123', password: 'andy1234'},
    {name: 'bobby123', password: 'bobby2345'},
    {name: 'candy123', password: 'candy3456'}
];


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
                    for(let i = 0; i < users.length; i++) {
                        if(user === users[i].name) {
                            stateUsername = true; // Username is true
                        }
                    }
                } else {
                    alert('First char of username is a number');
                    console.log('First char of username is a number');
                }
            } else {
                alert('username has space');
                console.log('username has space');
            }
        } else {
            alert('username must more than 3 character');
            console.log('username must more than 3 character');
        }
    } else {
        alert('Username has empty!');
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
                    for(let i = 0; i < users.length; i++) {
                        if(pass === users[i].password) {
                            statePassword = true; // Password is true
                        }
                    }
                } else {
                    alert('The password must contain a string and number');
                    console.log('The password must contain a string and number');
                }
            } else {
                alert('password has space');
                console.log('password has space');
            }
        } else {
            alert('The password must more than 4 character');
            console.log('The password must more than 4 character');
        }
    } else {
        alert('Password has empty!');
        console.log('Password has empty!');
    }

    // Role Check
    let stateRole = false;
    if(role != ''){
        stateRole = true;
    } else {
        alert('Please Select Role!');
        console.log('Please Select Role!');
    }

    // Validate
    let access = false;

    if(stateUsername == true && statePassword == true && stateRole == true) {
        for(let i = 0; i < users.length; i++) {
            if(user == users[i].name && pass == users[i].password) {
                access = true;
            }
        }
        if(access == true) {
            location.assign('https://www.example.com');
        }else{
            alert('username or password invalid');
        }
    } else {
        if(stateUsername == false) {
            username.style.color = 'red';
            check += 1;
        } else {
            username.style.color = 'black';
        }
        if(statePassword == false) {
            password.style.color = 'red';
            check += 1;
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


