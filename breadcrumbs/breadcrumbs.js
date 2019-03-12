/*
Breadcrumbs Generator by iNet / IEVEVO
Licensed under MIT Open Source
*/

var container;


	// ------ GLOBAL OPTIONS ------- //
var home_url = "index.html";
var split_character = ">";



window.addEventListener("DOMContentLoaded", function() {
	// run on page load
	
	container = document.getElementById("breadcrumbs") || null;
	
		// check there's somewhere to put the breadcrumbs
	if(container != null) {
		
			// generate breadcrumbs
		var url = window.location.pathname, 
			url_split = url.split("/"), 
			crumbs = "",
			working_url = "";
		
		if(typeof(breadcrumbs_options) != "undefined" && breadcrumbs_options.path != null) {
			url_split = breadcrumbs_options.path.split("/");
		}
		
		
		crumbs += ("<a href='" + home_url + "'>Home</a>");
		
		for(var i = 1; i < (url_split.length); i++) {
				// make sure it's not gonna be blank
			if(url_split[i] != "") {
					// title is either a set value (defined earlier) or taken from the URL
					// (and converted to Title Case)
				var name = url_split[i].charAt(0).toUpperCase() + url_split[i].substr(1).toLowerCase();
				
				name = name.replace("_", " ").replace("-", " ").split(".")[0];
				
				if(i != (url_split.length - 1)) {
						// if it's not the last item
					crumbs += " " + split_character;
					crumbs += (" <a href='" + working_url + url_split[i] + "'>" + name + "</a>");
				}
				else {
						// add the current page (last item)
					if(typeof(breadcrumbs_options) != "undefined" && breadcrumbs_options.pageName != null) {
						name = breadcrumbs_options.pageName;
					}
					
					crumbs += " " + split_character;
					crumbs += " <a href='" + url_split[i] + "'>" 
						+ (name || "Current page") 
						+ "</a>";
					
				}
				
				working_url += (url_split[i] + "/");
			}
			
			// end for loop
		}
		
		
		container.innerHTML = crumbs;
		
	}
	else {
			// if there's no element to put them in
		console.log("Error: Breadcrumbs generator requires a <div> with id 'breadcrumbs'");
	}
	
});
