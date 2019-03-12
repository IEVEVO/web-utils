// Image Enlarger / Lightbox (by iNet / IEVEVO)
// Licenced under MIT Open Source

// Enlarges images on click


var gallery_info = {imgs: [], currentIndex: 0}, gallery_counter, gallery_buttons;


function id(id) {
	return document.getElementById(id);
}


function displayImg(src) {
		// actually displays the image
	id("enlarged-image").src = src;
	
	
		// update counter if applicable
	if(gallery_info.imgs.length > 1) {
			// set the counter
		gallery_counter.innerHTML = (parseInt(gallery_info.currentIndex) + 1) + "/" + gallery_info.imgs.length;
		
			// show buttons
		for(var i = 0; i < gallery_buttons.length; i++) {
			gallery_buttons[i].classList.remove("hidden");
		}
	}
	else {
			// hide buttons if theres only 1 image
		for(var i = 0; i < gallery_buttons.length; i++) {
			gallery_buttons[i].classList.add("hidden");
		}
	}
	
}


function enlargeImg(srcImg) {
	
		// store metadata
	if(srcImg.getAttribute("data-gallery-index") != null) {
			// if it's a gallery with multiple linked images
		var allImgs = srcImg.parentNode.getElementsByTagName("img");
		
		gallery_info.currentIndex = srcImg.getAttribute("data-gallery-index");
		gallery_info.imgs = allImgs;
	}
	else {
			// if it's a single image
		gallery_info.currentIndex = 0;
		gallery_info.imgs = [srcImg];
	}
	
	
		// Actually enlarge the image
	var large_src = srcImg.src;
	
			// if an alternate SRC is supplied, use this instead
	if(srcImg.getAttribute("data-large-src") != null) {
		large_src = srcImg.getAttribute("data-large-src");
	}
	
	displayImg(large_src);
	id("enlarged-image").parentNode.classList.add("open");
}


function unenlargeImg() {
		// Close
	id("enlarged-image").parentNode.classList.remove("open");
	
	gallery_counter.innerHTML = "1/1";
}


function nextImage() {
		// Loads the next image in line
	var src = "";
	
	
		// change index
	if(gallery_info.currentIndex + 1 >= gallery_info.imgs.length) {
			// if at the end of the queue
		gallery_info.currentIndex = 0;
	}
	else {
			// if not at end of queue
		gallery_info.currentIndex = parseInt(gallery_info.currentIndex) + 1;
	}
	
	
		// if alt SRC supplied, use this
	if(gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src") != null) {
		src = gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src");
	}
		// otherwise, use the src from the img tag
	else {
		src = gallery_info.imgs[gallery_info.currentIndex].src;
	}
	
	
		// display image
	displayImg(src);
}


function prevImage() {
		// Loads the next image in line
	var src = "";
	
	
		// change index
	if(gallery_info.currentIndex <= 0) {
			// if at the end of the queue
		gallery_info.currentIndex = gallery_info.imgs.length - 1;
	}
	
	else {
			// if not at end of queue
		gallery_info.currentIndex = parseInt(gallery_info.currentIndex) - 1;
	}
	
	
		// if alt SRC supplied, use this
	if(gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src") != null) {
		src = gallery_info.imgs[gallery_info.currentIndex].getAttribute("data-large-src");
	}
		// otherwise, use the src from the img tag
	else {
		src = gallery_info.imgs[gallery_info.currentIndex].src;
	}
	
	
		// display image
	displayImg(src);
}


function initialise() {
		// Set up event listeners
		// In a separate function in case u need to call it after page load
	var galleries = document.getElementsByClassName("gallery");
	
	
	for(var x = 0; x < galleries.length; x++) {
			// for each gallery
		var gallery = galleries[x].children;
			
			for(var i = 0; i < gallery.length; i++) {
				// for each image, add a click listener
			if(gallery[i].src != "") {
				let src = gallery[i].src;
				
				gallery[i].onclick = function() {
					enlargeImg(this);
				}
			}
			
		}
	}
	
}


window.addEventListener("load", function() {
	
	initialise();
	
	
		// Set up big img element
	var el = document.createElement("div"), prevBtn = document.createElement("div"), nextBtn = document.createElement("div"), counter = document.createElement("span");
	

			// image
	el.innerHTML = "<img class='img-enlarged' id='enlarged-image' />";
	el.classList.add("img-enlarged__cont");
	el.onclick = function() {
		unenlargeImg();
	}
	
	
			// prev / next buttons
	prevBtn.innerHTML = "<span></span>";
	prevBtn.classList.add("img-enlarged__nav");
	prevBtn.classList.add("prev");
	prevBtn.onclick = function(event) {
		event.stopPropagation();
		prevImage();
	}
	
	nextBtn.innerHTML = "<span></span>";
	nextBtn.classList.add("img-enlarged__nav");
	nextBtn.classList.add("next");
	nextBtn.onclick = function(event) {
		event.stopPropagation();
		nextImage();
	}
	
	
			// counter
	counter.innerHTML = "1/1";
	counter.classList.add("img-enlarged__counter");
	counter.classList.add("nosel");
	
	
	el.appendChild(prevBtn);
	el.appendChild(counter);
	el.appendChild(nextBtn);
	document.body.appendChild(el);
	
	gallery_counter = counter;
	gallery_buttons = [prevBtn, nextBtn];
	
});
