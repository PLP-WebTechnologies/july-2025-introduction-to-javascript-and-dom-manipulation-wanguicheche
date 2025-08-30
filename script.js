/*
 * Assignment: Mastering JavaScript Fundamentals
 * This simplified file demonstrates:
 * - Part 1: Variables, conditionals, and user input
 * - Part 2: Custom functions for reusable logic
 * - Part 3: For and while loops
 * - Part 4: DOM manipulation and event listeners
 /*

/*  PART 1: BASICS  */

// Get references to our HTML elements using their IDs
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const introForm = document.getElementById("intro-form");
const greetingEl = document.getElementById("greeting");

// Add a "submit" event listener to the form
introForm.addEventListener("submit", (event) => {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the values from the input fields
    const userName = nameInput.value;
    const userAge = Number(ageInput.value);

    // Use a conditional statement to check the user's age
    if (userAge >= 18) {
        // This message is for adults
        greetingEl.textContent = `Hello, ${userName}! You are an adult.`;
    } else {
        // This message is for younger users
        greetingEl.textContent = `Hello, ${userName}! You are a young coder.`;
    }

    // A bonus conditional using a ternary operator (optional but good to show)
    const canVote = userAge >= 18 ? "can vote" : "cannot vote yet";
    console.log(`${userName} is ${userAge} and ${canVote}.`);
});

/*  PART 2: FUNCTIONS  */

/**
 * Function 1: A function that squares a number.
 * @param {number} num - The number to be squared.
 * @returns {number} - The squared result.
 */
function squareNumber(num) {
    return num * num;
}

/**
 * Function 2: A function that formats a string to be all uppercase.
 * @param {string} str - The string to be formatted.
 * @returns {string} - The string in all uppercase.
 */
function toUpperCase(str) {
    return str.toUpperCase();
}

// We can test our functions here and output to the console
console.log("Function Test: 5 squared is " + squareNumber(5));
console.log("Function Test: 'hello world' in uppercase is '" + toUpperCase("hello world") + "'");

/*  PART 3: LOOPS  */

// Get a reference to the button for creating the list
const generateListBtn = document.getElementById("generate-list");
const dynamicList = document.getElementById("dynamic-list");

// Example 1: Using a for loop to create list items dynamically
generateListBtn.addEventListener("click", () => {
    // An array of topics to loop through
    const topics = ["HTML", "CSS", "JavaScript", "DOM", "Events"];
    
    // Clear the existing list before adding new items
    dynamicList.innerHTML = "";

    for (let i = 0; i < topics.length; i++) {
        // Create a new <li> element
        const listItem = document.createElement("li");
        
        // Set its text content
        listItem.textContent = topics[i];
        
        // Add the new element to our list on the page
        dynamicList.appendChild(listItem);
    }
});

// Example 2: Using a while loop for a countdown
const startCountdownBtn = document.getElementById("start-countdown");
const countdownOutput = document.getElementById("countdown-output");

startCountdownBtn.addEventListener("click", () => {
    // Let's start the countdown from 5
    let count = 5;
    countdownOutput.textContent = "Starting countdown...";

    // A simple while loop that runs as long as the condition is true
    const interval = setInterval(() => {
        if (count > 0) {
            countdownOutput.textContent = `Counting down: ${count}...`;
            count--;
        } else {
            countdownOutput.textContent = "Countdown complete!";
            // Stop the loop once the condition is false
            clearInterval(interval);
        }
    }, 1000); // Wait 1 second between each count
});

/* PART 4: DOM MANIPULATION  */

// Get a reference to the elements we'll manipulate
const toggleThemeBtn = document.getElementById("toggle-theme");
const addNoteBtn = document.getElementById("add-note");
const notesContainer = document.getElementById("notes");
const statusEl = document.getElementById("status");

// DOM Interaction 1: Change the status text on page load
statusEl.textContent = "The page is now live with JavaScript!";

// DOM Interaction 2: Toggle a CSS class on the body to switch themes
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// DOM Interaction 3: Create a new element and add it to the page
addNoteBtn.addEventListener("click", () => {
    // Create a new <div> element
    const newNote = document.createElement("div");
    // Add a class for styling
    newNote.classList.add("card");
    // Set the text content of the new element
    newNote.textContent = `A new note was added at ${new Date().toLocaleTimeString()}.`;
    // Add the new element to the notes container
    notesContainer.appendChild(newNote);
});