/*
Alerts by iNet / IEVEVO
Licensed under MIT Open Source
*/


var alertsVisible = 0;


function makeAlert(type = "info", msg) {
	var div = document.getElementById("alerts");
	
		// make notif element
	var notif = document.createElement("div"), contents = document.createElement("div"), header = document.createElement("div"), footer = document.createElement("div");
	
	header.classList.add("alert__header");
	contents.classList.add("alert__body");
	footer.classList.add("alert__footer");
	notif.classList.add("alert__container");
	
		// validate
	if(msg.header == "" || msg.contents == "") {
		console.log("Unable to create alert: Invalid header or contents");
		return;
	}
	
	
		// add classes
	if(type == 'info') {
			// just display information
		
				// close button
		var closeBtn = document.createElement("button");
		
		closeBtn.innerHTML = "Dismiss";
		closeBtn.classList.add("btn");
		closeBtn.classList.add("btn-grey");
		
		closeBtn.onclick = function() {
			killAlert(this.parentNode.parentNode);
		};
		
		footer.appendChild(closeBtn);
		
				// insert contents
		notif.classList.add('info');
	}
	
	else if(type == "confirm") {
			// ask for confirmation
		var opt1 = document.createElement("button");
		var opt2 = document.createElement("button");
		
				// check there are buttons
		if(msg.options.length == 0) {
			console.log("Unable to make confirmation window: No options specified.");
			return;
		}
		
		
				// make buttons
		for(var i = 0; i < msg.options.length; i++) {
			var tmp = document.createElement("button");
			
			tmp.innerHTML = msg.options[i].label || "Button";
			tmp.classList.add("btn");
			tmp.classList.add(msg.options[i].style || "btn-grey");
			tmp.onclick = msg.options[i].funct;
			
			tmp.addEventListener("click", function() {
				killAlert(this.parentNode.parentNode);
			});
			
			footer.appendChild(tmp);
		}
		
				// insert contents
		notif.classList.add('info');
	}
	
	
		// show background, display
	header.innerHTML = msg.header || "Alert";
	contents.innerHTML = msg.contents || "";
	document.getElementById("alerts-background").classList.remove("hidden");
	
	
	notif.appendChild(header);
	notif.appendChild(contents);
	notif.appendChild(footer);
	div.appendChild(notif);
}


function killAlert(alert) {
	alert.style.display = "none";
	alertsVisible--;
	
	if(alertsVisible <= 0) {
			// clear all
		alertsVisible = 0;
		document.getElementById("alerts-background").classList.add("hidden");
	}
	
}
