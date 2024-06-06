let timeOfDay;
let today;
let hour;
let minute;
let second;
let day;
let month;
let year;

function updateClock() {
    timeOfDay = "AM";
    today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    day = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();
    
    // check the time and adjust the format
    minute = checkTime(minute);
    second = checkTime(second);
}

function setBackgroundGradient() {
    if (hour < 5) {
        // early morning gradient
        document.querySelector('body').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
    } else if (hour < 12) {
        // morning gradient
        document.querySelector('body').style.background="linear-gradient(-45deg, #fa4e5e, #f9ab9e, #99b9d0, #00b2d2)";
    } else if (hour < 15) {
        // afternoon gradient
        document.querySelector('body').style.background="linear-gradient(-45deg, #96adcf, #4570b5, #234181, #1b2966)";
    } else if (hour < 22) {
        // evening gradient
        document.querySelector('body').style.background="linear-gradient(-45deg, #fdec6e, #e0943d, #bc361a, #391106)";
    } else if (hour < 24) {
        // night gradient
        document.querySelector('body').style.background="linear-gradient(-45deg, #767d92, #2f4562, #152642, #081b33)";
    }

    // animating gradients

    document.querySelector('body').style.backgroundSize="400% 400%";
    document.querySelector('body').style.animation="gradient 8s ease infinite";
}

function loadGlassOverlayComponents() {

    // set the greeting message according the time of the day
    if (hour < 5) {
        document.querySelector('#greeting').innerHTML = 'Late Night?';
    } else if (hour < 12) {
        document.querySelector('#greeting').innerHTML = 'Good Morning';
    } else if (hour < 15) {
        document.querySelector('#greeting').innerHTML = 'Good Afternoon';
    } else if (hour < 22) {
        document.querySelector('#greeting').innerHTML = 'Good Evening';
    } else {
        document.querySelector('#greeting').innerHTML = 'Late Night?';
    }
    
    // convert the time to a 12-hour clock
    timeOfDay = convertTimeOfDay(hour, timeOfDay);

    // set the suffix of the day
    let daySuffix;
    if (day === 1 || day === 21 || day === 31) daySuffix = 'st';
    else if (day === 2 || day === 22) daySuffix = 'nd';
    else if (day === 3 || day === 23) daySuffix = 'rd';
    else daySuffix = 'th';

    // get the name of the month
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // display the time on the glass overlay
    document.getElementById('hour').innerHTML = convertHour(hour);
    document.getElementById('minute').innerHTML = ":" + minute + "&nbsp;";
    document.getElementById('timeSuffix').innerHTML = convertTimeOfDay(hour, timeOfDay);
    
    // display the date on the glass overlay
    document.getElementById('date').innerHTML = "Today is the " + day + daySuffix + " of " + monthNames[month] + " " + year;

    // call function again after specified amount of time
    let t = setTimeout(loadGlassOverlayComponents, 500);
}

function checkTime(i) {       
    // concatenate a zero for numbers less than 10
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function convertTimeOfDay(hour, timeOfDay) {
    // make the time AM or PM
    if (hour > 12) {
        timeOfDay = "PM";
    } else {
        timeOfDay = "AM";
    }
    return timeOfDay;
}

function convertHour(hourValue) {
    // display time in the 12-hour format
    if (hourValue == 0) {
        hourValue = 12;
    }
    if (hourValue > 12) {
        hourValue = hourValue - 12;
    }
    return hourValue;
}

$(document).ready(setBackgroundGradient);
$(document).ready(loadGlassOverlayComponents);
updateClock();
setInterval(updateClock, 1000);