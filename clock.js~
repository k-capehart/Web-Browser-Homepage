function startTime() 
{   
    // Get time values
    var timeOfDay = "AM";
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    // Convert the time to a 12 hour clock
    timeOfDay = convertTimeOfDay(hour, timeOfDay);
    hour = convertHour(hour);
    
    // Check time to adjust format
    minute = checkTime(minute);
    second = checkTime(second);

    // Put time in the html document
    document.getElementById('clock').innerHTML =
    hour + ":" + minute + ":" + second + " " + timeOfDay;
    
    // Call function again after specified amount of time
    var t = setTimeout(startTime, 500);
}

function checkTime(i) 
{       
    // Add a 0 for numbers less than 10
    if (i < 10) 
    {
        i = "0" + i
    }

    return i;
}

function convertTimeOfDay(hour, timeOfDay)
{
    // Make the time AM or PM
    if (hour > 12)
    {
        timeOfDay = "PM";
    }
    else
    {
        timeOfDay = "AM";
    }

    return timeOfDay;
}

function convertHour(hour)
{
    // Convert it to a 12 hour clock
    if (hour == 0)
    {
        hour = 12;
    }
    if (hour > 12)
    {
        hour = hour - 12;
    }

    return hour;
}

// Start the clock once the page has loaded
$(document).ready(startTime);
