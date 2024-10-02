const backgroundSound = document.getElementById('backgroundSound');
const playSoundButton = document.getElementById('playSoundButton');
const stone = document.getElementById('stone');
const baby = document.querySelector('.baby');
const bear = document.querySelector('.bear');

// Start background music
backgroundSound.volume = 0.3; // Set volume to 30%
backgroundSound.play();

// Toggle sound on button click
playSoundButton.addEventListener('click', () => {
    if (backgroundSound.paused) {
        backgroundSound.play();
        playSoundButton.textContent = "Music Off";
    } else {
        backgroundSound.pause();
        playSoundButton.textContent = "Music On";
    }
});

// Bear approach event
bear.addEventListener('animationend', () => {
    // After the bear reaches the baby, make the baby fly
    baby.style.animation = 'flyToClouds 3s forwards'; // Trigger flying animation
});

// Throw stone event
function throwStone() {
    stone.style.display = 'block'; // Show the stone
    stone.style.transform = 'translateX(100vw)'; // Move the stone across the screen
    setTimeout(() => {
        stone.style.display = 'none'; // Hide the stone after animation
        stone.style.transform = 'none'; // Reset position
    }, 1000); // Adjust timing as needed
}

// Optional: Call throwStone() to demonstrate stone throwing
// Uncomment to test
// throwStone();

// Rain effect
function createRain() {
    const rainContainer = document.querySelector('.rain');

    // Number of raindrops to create
    const numDrops = 100; // You can adjust this number as needed

    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');

        // Set a random position along the x-axis
        drop.style.left = Math.random() * 100 + 'vw';
        // Set a random delay for each drop to fall
        drop.style.animationDuration = Math.random() * 1 + 1 + 's'; // 1 to 2 seconds

        rainContainer.appendChild(drop);
    }
}

// Call the function to create raindrops
createRain();