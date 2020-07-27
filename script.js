// Dom Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


console.log(name);
console.log(time);
// options
const showAmPm = true;
// show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //  12 hour format
    hour = hour % 12 || 12;

    // output the time
    time.innerHTML = `${hour}<span>:</span> ${addZero(min)}<span>:</span> ${addZero(sec)} ${showAmPm ? 'am' : 'pm'}`;

    setTimeout(showTime, 1000);
}


// add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set Background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // morning
        document.body.setAttribute("style", "background-image:url(images/morningsky.jpg)");
        greeting.textContent = 'Good Morning';

    } else if (hour < 18) {
        //  AFTERNOON
        document.body.setAttribute("style", "background-image:url('images/noonsky.jpg')");
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'black';
    
    } else {
        //  evening
        document.body.setAttribute("style", "background-image:url('images/nightsky.jpg')");
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set Name
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}


// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        Focus.textContent = '[enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// run
showTime();
console.log(showTime);
setBgGreet();
// getName();