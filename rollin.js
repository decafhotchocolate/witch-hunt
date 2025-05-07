window.onload = initAll;


//initialize
function initAll() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			initRoll(document.images[i]);
		}
	}
}

function initRoll(curimg) {
	curimg.outimg = new Image();
	curimg.outimg.src = curimg.src;
	curimg.onmouseout = rollOut;

	curimg.onimg = new Image();
	curimg.onimg.src = curimg.src;
	curimg.onimg.src = "rollimg/" + curimg.id + "_over" + curimg.src.substring(curimg.src.lastIndexOf("."),curimg.src.length);
	curimg.onmouseover = rollOver;
}

function rollOut() {
	this.src = this.outimg.src;
}

function rollOver() {
	this.src = this.onimg.src;
}