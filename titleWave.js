function waveTitleEffect() {
    // The base title to display at all times
    var baseTitle = "Nisal";
    // The additional text to "wave" into the title
    var waveText = "Herath";
    // Combined full title to work with
    var title = baseTitle + waveText;
    // Holds the current title being displayed in the wave effect
    var waveTitle = title;
    // Index tracker for the current position in the wave effect
    var i = 0;
    // Direction tracker: true for forward, false for backward
    var forward = true;

    // Function to update the title for the wave effect
    function updateTitle() {
        if (forward) {
            // Expanding the title by one character at a time
            if (i < title.length) {
                // Display the substring of the title up to the current index
                document.title = waveTitle.substring(0, i + 1);
                i++; // Move the index forward
            } else {
                // Reverse direction once the full title is displayed
                forward = false;
                i--; // Step back one character
            }
        } else {
            // Shrinking the title back down to the base title
            if (i >= baseTitle.length) {
                // Display the substring of the title up to the current index
                document.title = waveTitle.substring(0, i);
                i--; // Move the index backward
            } else {
                // Reverse direction once the base title is reached
                forward = true;
                i++; // Start expanding again
            }
        }
    }

    // Set an interval to repeatedly update the title every 400ms
    setInterval(updateTitle, 400);
}

// Start the title wave effect
waveTitleEffect();
