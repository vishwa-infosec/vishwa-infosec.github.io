// Simple continuous confetti effect
function createConfetti() {
    const colors = ['#ff4081', '#ff9800', '#4caf50', '#2196f3', '#9c27b0'];
    const confetti = document.getElementById('confetti');

    // Function to create a single confetti piece
    function createConfettiPiece() {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.opacity = Math.random();
        confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 5}s`;
        confetti.appendChild(confettiPiece);

        // Remove the confetti piece after the animation
        setTimeout(() => {
            confetti.removeChild(confettiPiece);
        }, 6000);
    }

    // Create confetti pieces at regular intervals
    setInterval(createConfettiPiece, 200); // Adjust the interval time (in milliseconds) as needed
}

// Start the confetti effect when the page loads
window.onload = createConfetti;


// Get visitor's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log('Geolocation is not supported by this browser.');
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = `https://maps.google.com/maps?saddr=urapakkam&daddr=${latitude},${longitude}&output=embed`;
    iframe.width = '600';
    iframe.height = '450';
    iframe.frameborder = '0';
    iframe.style.border = '0';

    // Append the iframe to the desired location in the page
    document.getElementById('map-container').appendChild(iframe);
}

