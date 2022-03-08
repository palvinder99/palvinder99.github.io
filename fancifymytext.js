function bigger() {

	document.getElementById("styleinfo").style.fontSize = "24pt";

}

function fancyShmancy() {
	if (document.getElementById("fancyshmancy").checked= true) {
		document.getElementById("styleinfo").style.fontWeight = "bold";
		document.getElementById("styleinfo").style.color = "blue";
		document.getElementById("styleinfo").style.textDecoration = "underline";

	}
}

function boring() {
	if (document.getElementById("boringbetty").checked= true) {
		document.getElementById("styleinfo").style.fontWeight = "normal";
		document.getElementById("styleinfo").style.color = "black";
		document.getElementById("styleinfo").style.textDecoration = "none";

	}
}	

function upper(){
	document.getElementById("styleinfo").style.textTransform = "uppercase";
	var splitVal=document.getElementById("styleinfo").value.split(".");
	document.getElementById("styleinfo").value=splitVal.join("-Moo");

}