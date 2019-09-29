function clearAll(){
	console.log("running clear");
	document.getElementById("texts").value="";
}
var x=1;
function caps(){
	console.log("running caps");
	if(x==1){
	document.getElementById("texts").value=document.getElementById("texts").value.toUpperCase();
	}else{
	document.getElementById("texts").value=document.getElementById("texts").value.toLowerCase();
	}
	x=x*-1;
}

function sort(){
	console.log("running sort");
	document.getElementById("texts").value = document.getElementById("texts").value.split("\n").sort().join("\n");
}

function rev(){
	console.log("running rev");
	document.getElementById('texts').value =  document.getElementById('texts').value.split('\n').map(function(line) {
		return line.split(" ").reverse().join(" ");
	}).join('\n');
}
function strip(){
	console.log("running strip");
	document.getElementById("texts").value= document.getElementById("texts").value.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
function add(){
	console.log("running add");
	var separated =  document.getElementById('texts').value.split('\n');
	for(var i=0; i<separated.length; i++){
		var innerSeparation = separated[i].split(" ");
		innerSeparation.unshift(""+(i+1));
		separated[i]=innerSeparation.join(" ");
	}
	 document.getElementById('texts').value = separated.join('\n');
}
function shuff(){
	console.log("running shuff");
	var separated =  document.getElementById('texts').value.split('\n');
	for (var i = separated.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [separated[i], separated[j]] = [separated[j], separated[i]];
    }
	document.getElementById('texts').value=separated.join("\n");
}