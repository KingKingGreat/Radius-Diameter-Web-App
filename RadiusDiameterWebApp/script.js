// Connect Button
var calcButton = document.getElementById("calcButton");

// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Declare onButtonClick Function
function onButtonClick() {
	// Connect Parameters
	var value = parseFloat(document.getElementById("val").value);
	var type = document.getElementById("type").value;
	var result;

	// Check for invalid parameters
	if (!value) {
		document.getElementById("eText").textContent = "Please insert value on value"; 
		return null;
	} else if (!type) {
		document.getElementById("eText").textContent = "Please insert value on type"; 
		return null;
	} else {
		// Check for invalid type
		if (type === "rad") {
			// Radius
			document.getElementById("rText").innerHTML = "Question : " + value + " Radius" + " = ? Diameter" + "<br>";  
		    result = value * 2;
		} else {
			// Diameter
			document.getElementById("rText").innerHTML = "Question : " + value + " Diameter" + " = ? Radius" + "<br>"; 
		    result = value / 2;
		}
		// Display Result
		document.getElementById("rText").innerHTML += "Result : " + result;  
	}
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
calcButton.addEventListener("click", onButtonClick);

// On Start Up

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 1.0.2019520.191201.LM</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);