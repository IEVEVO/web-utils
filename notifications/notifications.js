/*
Notifications by iNet / IEVEVO
Licensed under MIT Open Source
*/


function makeNotif(text="", params={}) {
	var cont = document.getElementById("notifs");
	var t = params.type || "info";
	
	
		// make notif element
	var notif = document.createElement("li");
	
	notif.innerHTML = text || "";
	
	
		// when notif is clicked
	notif.onmousedown = params.funct || function() {};
	
	notif.onmouseup = function() {
			// hide notification
		this.style.display = 'none';
	};
	
	
		// add classes
	if(params.type != null) {
		notif.classList.add(params.type);
	}
	
	notif.classList.add("fadeout");
	cont.appendChild(notif);
	
	
		// expire
	setTimeout(function() {
		cont.removeChild(notif);
	}, 5000);
	
}
