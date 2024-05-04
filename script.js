// JavaScript code for functional shipping status bar

// Function to simulate progress of delivery process
function simulateDeliveryProgress() {
    const statusElements = document.querySelectorAll('.status');
    const numStatuses = statusElements.length;

    // Calculate the width of each status segment
    const segmentWidth = 100 / numStatuses;

    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 20) {
            // Calculate the index of the current status
            const currentStatusIndex = Math.floor(progress / segmentWidth);

            // Update the color of each status based on the progress
            statusElements.forEach((element, index) => {
                if (index <= currentStatusIndex) {
                    element.style.backgroundColor = '#007dc1'; // Walmart's active status color
                    element.style.color = '#fff';
                } else {
                    element.style.backgroundColor = 'transparent';
                    element.style.color = '#555';
                }
            });
            progress += 1;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Start simulating delivery progress when the page loads
window.onload = function() {
    simulateDeliveryProgress();
};