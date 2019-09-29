function seriesRun(){
	var val = document.getElementById("value").value;
	var separated = val.split(",");
	var max = 0;
	var min = 9999;
	var sum=0;
	
	
	for(var i=0; i<separated.length; i++){
		if (parseInt(separated[i], 10)>max){
			max=separated[i];
		}
		if (parseInt(separated[i], 10)<min){
			min=separated[i];
		}
		sum=sum+parseInt(separated[i], 10);
	}
	var avg=sum/separated.length;
	document.getElementById("max").innerHTML= max;
	document.getElementById("min").innerHTML= min;
	document.getElementById("sum").innerHTML= sum;
	document.getElementById("avg").innerHTML= avg;
	document.getElementById("rev").innerHTML= separated.reverse();
}
setInterval(seriesRun, 500)