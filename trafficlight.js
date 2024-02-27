// Get the elements
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

// Define the duration for each light
const redDuration = 5000; // 5 seconds
const yellowDuration = 5000; // 5 seconds
const greenDuration = 5000; // 5 seconds

// Start the traffic light sequence
function startTrafficLight() {
  // Initially, turn on the red light
  red.classList.add("active");

  // Transition from red to yellow
  setTimeout(() => {
    red.classList.remove("active");
    yellow.classList.add("active");
    red.style.opacity = "0.3";
    yellow.style.opacity = "1";

    // Transition from yellow to green
    setTimeout(() => {
      yellow.classList.remove("active");
      green.classList.add("active");
      yellow.style.opacity = "0.3";
      green.style.opacity = "1";

      // Transition from green to red
      setTimeout(() => {
        green.classList.remove("active");
        red.classList.add("active");
        green.style.opacity = "0.3";
        red.style.opacity = "1";

        // Repeat the sequence after one full cycle
        setTimeout(startTrafficLight, redDuration + yellowDuration + greenDuration);
      }, redDuration);
    }, yellowDuration);
  }, redDuration);
}

// Call the function to start the traffic light sequence
startTrafficLight();
