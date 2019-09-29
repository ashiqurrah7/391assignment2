function quoteBox() {
	var quotes = ["I think therefore I am. - René Descartes", 
							"The unexamined life is not worth living. – Socrates",
							"To be is to be perceived – Bishop George Berkeley.",
							"He who fights with monsters should look to it that he himself does not become a monster. And if you gaze long into an abyss, the abyss also gazes into you. - Friedrich Nietzsche",
							"The fake is of far greater value. In its deliberate attempt to be real, it’s more real than the real thing. - Nisio Isin"];
	var x = Math.floor(Math.random()*10)%5;
 document.getElementById("quote").innerHTML = quotes[x];
}

function changeColor(n){
	
	var colors=["#25f2c4", "#5732a8", "#f44242", "#f5e979" ];
	var bColors=["#008040", "white", "black", "red"];
	var fonts=["Arial", "Comic Sans MS", "Times New Roman", "Segoe Script"];
	var sizes=["14px", "16px", "18px", "20px"];
	
	document.getElementById("box").style.backgroundColor = colors[n];
	document.getElementById("box").style.borderColor = bColors[n];
	document.getElementById("quote").style.color = bColors[n];
	document.getElementById("quote").style.fontFamily = fonts[n];
	document.getElementById("quote").style.fontSize = sizes[n];
	
}

function convert(){
	var val = document.getElementById("value").value;
	var result=0;
	if(document.getElementById("selType").selectedIndex=="0" ){
		result = val/2.205; 
		}
	else {
		result = val*2.205;
		}
		console.log(document.getElementById("selType").selectedIndex);
	document.getElementById("result").innerHTML = result;
}

