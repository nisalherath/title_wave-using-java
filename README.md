Wave Title Effect
The Wave Title Effect is a JavaScript function that animates the webpage's title by progressively showing and hiding parts of the title in a "wave" fashion. It creates an effect where the title appears to grow and shrink, alternating between the two parts of the title.

Features
Creates a dynamic wave effect on the browser tab title.
Customizable base and wave text.
Adjust the speed of the effect by modifying the interval.
How It Works
The function combines two parts of a string (baseTitle and waveText) and animates the title in a wave-like pattern. The animation alternates between revealing the base title and wave text in the browser tab, creating a "wave" effect.

Installation
You can simply copy and paste the code into a <script> tag in your HTML file, or link to an external JavaScript file that contains the function.

Example Usage:
Copy and paste the waveTitleEffect function into your JavaScript file.
Add this line of code to run the effect:
javascript
Copy code
waveTitleEffect();
Customization:
baseTitle: This is the starting part of the title.
waveText: This is the second part of the title that will alternate with the base title.
Interval Time: The setInterval(updateTitle, 400); line controls the speed of the animation. Adjust the 400 value to speed up or slow down the wave effect.
Example:
javascript
Copy code
function waveTitleEffect() {
    var baseTitle = "Nisal";      // Change this to your base title
    var waveText = "Herath";      // Change this to your wave text
    var title = baseTitle + waveText;
    var waveTitle = title;
    var i = 0;
    var forward = true;
  
    function updateTitle() {
        if (forward) {
            if (i < title.length) {
                document.title = waveTitle.substring(0, i + 1);
                i++;
            } else {
                forward = false;
                i--;
            }
        } else {
            if (i >= baseTitle.length) {
                document.title = waveTitle.substring(0, i);
                i--;
            } else {
                forward = true;
                i++;
            }
        }
    }
  
    setInterval(updateTitle, 400); // Controls the wave speed
}

waveTitleEffect();
License
Feel free to use and modify this script. You can incorporate it into your own projects for personal or commercial use. Just make sure to give credit if you use it in your project.
