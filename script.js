const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    if (showingTerm) {
        cardContent.textContent = flashcards[currentIndex].term;
    } else {
        cardContent.textContent = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners

// Flip the card 
document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm;
    displayCard();
});

// Previous card
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1; // Loop to last card
    }
    showingTerm = true; 
    displayCard();
});

// Next card
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= flashcards.length) {
        currentIndex = 0; 
    }
    showingTerm = true; 
    displayCard();
});

// Add new card
document.getElementById('add-card-btn').addEventListener('click', function() {
    const newTerm = document.getElementById('new-term').value.trim();
    const newDefinition = document.getElementById('new-definition').value.trim();
    
    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });
        
        // Clear the input fields
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
    }
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
