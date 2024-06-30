// Function to set the greeting message based on the time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.innerText = greeting;
}

// Call the function to set the initial greeting
setGreeting();
