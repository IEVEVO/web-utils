/* 
Tooltips by iNet / IEVEVO
Licensed under MIT Open Source
*/


var els;
var tooltip_id = "tooltip";		// Change this if there's any conflicts
var tooltip_offset = {x: "-10", y: "5"};

var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


function tooltip(state, pos, txt="") {
		// Show tooltip on mouse move
	var l = document.getElementById(tooltip_id);
	
	if(state) {
		var offset = tooltip_offset;
		
			// prevent going off screen
		if(pos.y + 50 > screenHeight) {
			offset.y = tooltop_offset.y * -1;
		}
		
			// show tooltip
		l.style.top = pos.y - tooltip_offset.y + "px";
		l.style.left = pos.x - tooltip_offset.x + "px";
		l.innerHTML = txt;
	}
	
		// Hide tooltip
	else {
		l.style.left = "-500px";
	}
}


function initialiseTooltips() {
	
		// Give each element an event listener
	for(var i = 0; i < els.length; i++) {
		var txt = els[i].getAttribute("data-tooltip") || "";
		
			// Do not display empty tooltips
		if(txt == "") {
			console.log(els[i]);
			console.log("Above element has no specified 'data-tooltip' attribute, or it is blank.");
		}
		else {
			
			els[i].onmousemove = function(event) {
					// When the element is hovered over
				tooltip(true, {x: event.clientX, y: event.clientY}, this.getAttribute('data-tooltip'));
			}
			
			els[i].onmouseout = function() {
					// When the mouse leaves the element
				tooltip(false);
			}
			
		}
	}
	
}


window.addEventListener("load", function() {
	
		// Load elements
	els = document.getElementsByClassName("give-tooltip");
	
	
	// Create the tooltip
	var tip = document.createElement("div");
	tip.id = tooltip_id;
	
	document.body.appendChild(tip);
	
	
		// Load event listeners
	initialiseTooltips();
	
});
