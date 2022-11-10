// get/initialize time and date values
let timeOfDay = "AM";
let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();

// check the time and adjust the format
minute = checkTime(minute);
second = checkTime(second);

// CODE FOR THE SITE BACKGROUND

function changeImage() {
	let fileList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.png', '9.jpg',
					'10.jpg', '11.jpg', '12.jpg', '13.png', '14.jpg', '15.jpg', '16.jpg', '17.jpg',
					'18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '24.jpg', '25.jpg',
					'26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '34.jpg'];

    // selecting random image from fileList[] and setting it as background image
	let filePath = 'img/background/' + fileList[Math.floor(Math.random() * fileList.length)];
	document.body.style.backgroundImage = 'url(' + filePath + ')';
}

// CODE FOR THE GLASS OVERLAY AND ITS CHILD COMPONENTS

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
    hour = convertHour(hour);

    // set the suffix of the day
    let daySuffix;
    if (day === 1) daySuffix = 'st';
    else if (day === 2) daySuffix = 'nd';
    else if (day === 3) daySuffix = 'rd';
    else daySuffix = 'th';

    // get the name of the month
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // display the time on the glass overlay
    document.getElementById('hour').innerHTML = convertHour(hour);
    document.getElementById('minute').innerHTML = ":" + minute + "&nbsp;";
    document.getElementById('suffix').innerHTML = convertTimeOfDay(hour, timeOfDay);
    
    // display the date on the glass overlay
    document.getElementById('date').innerHTML = "Today is the " + day + daySuffix + " of " + monthNames[month - 1] + " " + year;

    // Call function again after specified amount of time
    let t = setTimeout(loadGlassOverlayComponents, 500);
}

function checkTime(i) {       
    // Add a 0 for numbers less than 10
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function convertTimeOfDay(hour, timeOfDay) {
    // Make the time AM or PM
    if (hour > 12) {
        timeOfDay = "PM";
    } else {
        timeOfDay = "AM";
    }
    return timeOfDay;
}

function convertHour(hourValue) {
    // Display time in the 12-hour format
    if (hourValue == 0) {
        hourValue = 12;
    }
    if (hourValue > 12) {
        hourValue = hourValue - 12;
    }
    return hourValue;
}

function setBackgroundGradient() {
    // Setting background gradients according to the time of the day

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

// function calls
$(document).ready(loadGlassOverlayComponents);
// $(document).ready(changeImage);
$(document).ready(setBackgroundGradient);