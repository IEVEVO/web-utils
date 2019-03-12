/* 
Static Tooltips by iNet / IEVEVO
Licensed under MIT Open Source
*/


var els, sTooltip;
var sTooltip_id = "staticTooltip";		// Change this if there's any conflicts
var sTooltip_offset = 5;

var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;



function tooltip(state, pos, txt="") {
		// Show tooltip on hover
	var l = document.getElementById(sTooltip_id);
	
	if(state) {
			// Show tooltip
		var offset = sTooltip_offset;
		
			// set position
		l.style.top = pos.y + "px";
		l.style.left = pos.x + "px";
		l.innerHTML = txt;
		
			// classList will end up as something along the lines of  class="visible bottom"
			// this is used for the triangle carat things that point to the element
		l.classList.add("visible");
		l.classList.add(pos.side);
	}
	
	else {
			// Hide tooltip
		l.style.left = "-500px";
		l.classList = "";
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
			
				// this is used to calculate the position of the tooltip
			els[i].setAttribute("data-tooltip-rect", JSON.stringify(els[i].getBoundingClientRect()));
			
			
				// add event listeners
			els[i].onmouseover = function(event) {
					// When the element is hovered over
					// Calculated each time in case the size of the element changes
				
				var target = event.target, 
					tipRect = this.getBoundingClientRect(), 
					rect = JSON.parse(this.getAttribute("data-tooltip-rect")),
					side = this.getAttribute("data-tooltip-side") || "right";
				
				
				if(side == "bottom") {
						// tooltip is below the element
					this.setAttribute("data-tooltip-x", rect.left + (tipRect.width / 4));
					this.setAttribute("data-tooltip-y", rect.bottom + sTooltip_offset);
				}
				else if(side == "right") {
						// tooltip is on the right side of the element
					this.setAttribute("data-tooltip-x", rect.right + sTooltip_offset);
					this.setAttribute("data-tooltip-y", rect.top + (rect.height / 4) - sTooltip_offset);
				}
				else if(side == "left") {
						// tooltip is on the left side of the element
					this.setAttribute("data-tooltip-x", rect.left - (tipRect.width / 2) - (sTooltip_offset * 2));
					this.setAttribute("data-tooltip-y", rect.top + (rect.height / 4) - sTooltip_offset);
				}
				else if(side == "top") {
						// tooltip is above the element
					this.setAttribute("data-tooltip-x", rect.left + (tipRect.width / 4));
					this.setAttribute("data-tooltip-y", rect.top - (tipRect.height / 2) - (sTooltip_offset ));
				}
				else {
						// invalid side
					console.log(this);
					console.log("Above element has none or invalid data-tooltip-side attribute.");
				}
				
				
					// show tooltip
				tooltip(true, {x: this.getAttribute('data-tooltip-x'), y: this.getAttribute('data-tooltip-y'), side: side}, this.getAttribute('data-tooltip'));
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
	els = document.getElementsByClassName("give-static-tooltip");
	sTooltip = document.getElementById(sTooltip_id);
	
	
		// Create the tooltip
	var tip = document.createElement("div");
	tip.id = sTooltip_id;
	
	document.body.appendChild(tip);
	
	
		// Load event listeners
	initialiseTooltips();
	
});
