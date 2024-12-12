function waveTitleEffect() {
    var baseTitle = "Nisal"; // The constant part of the title
    var waveText = "Herath"; // The text that animates in the wave effect
    var title = baseTitle + waveText; // Full title to work with
    var waveTitle = title;
    var i = 0; // Tracks the current position in the animation
    var forward = true; // Direction of animation: true for forward, false for backward

    function updateTitle() {
        if (forward) {
            if (i < title.length) {
                document.title = waveTitle.substring(0, i + 1); // Expand the title
                i++;
            } else {
                forward = false; // Reverse direction when full title is reached
                i--;
            }
        } else {
            if (i >= baseTitle.length) {
                document.title = waveTitle.substring(0, i); // Shrink the title
                i--;
            } else {
                forward = true; // Reverse direction when base title is reached
                i++;
            }
        }
    }

    setInterval(updateTitle, 400); // Updates the title every 400ms
}

waveTitleEffect(); // Starts the title wave effect
