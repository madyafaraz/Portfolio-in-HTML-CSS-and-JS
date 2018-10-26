// JavaScript Document

var animalsArray = ["gallery/animal1.jpg","gallery/animal2.jpg", "gallery/animal3.jpg", "gallery/animal4.jpg", "gallery/animal5.jpg", "gallery/animal6.jpg"];

var humansArray = ["gallery/human1.jpg", "gallery/human2.jpg", "gallery/human3.jpg", "gallery/human4.jpg", "gallery/human5.jpg", "gallery/human6.jpg"];

var natureArray = ["gallery/nature1.jpg", "gallery/nature2.jpg", "gallery/nature3.jpg", "gallery/nature4.jpg", "gallery/nature5.jpg", "gallery/nature6.jpg"];

function loadImage(){
	"use strict";
	loadAnimals();
	loadHumans();
	loadNature();
	
}


function loadAnimals(){
	"use strict";
	for(var i=0; i < animalsArray.length; i++) {
		
	var newDiv = document.createElement("div");
	newDiv.className = "pic";
		
	var newAnchor = document.createElement("a");
	newAnchor.href=animalsArray[i];
	newAnchor.className ="fancybox";
	newAnchor.rel = "gallery";
			
	var newImage = document.createElement("img");
	newImage.src = animalsArray[i];
	newImage.alt = "Thumbnail";
	newImage.style.width = "200px";
	newImage.style.height = "190px";
	newImage.style.margin = "30px";
	newImage.style.overflow = "hidden";
	newImage.className = "responsive";
    newImage.id = "animal"+(i+1);
	
		
	newAnchor.appendChild(newImage);	
	newDiv.appendChild(newAnchor);
    document.getElementById("animalsDiv").appendChild(newDiv);
		
	  }
}

function loadHumans(){
	"use strict";
	for(var i=0; i < humansArray.length; i++) {
		
	var newDiv = document.createElement("div");
	newDiv.className = "pic";
		
	var newAnchor = document.createElement("a");
	newAnchor.href=humansArray[i];
	newAnchor.className ="fancybox";
	newAnchor.rel = "gallery";
		
	var newImage = document.createElement("img");
	newImage.src = humansArray[i];
	newImage.alt = "Thumbnail";
	newImage.style.width = "200px";
	newImage.style.height = "190px";
	newImage.style.margin = "30px";
	newImage.style.overflow = "hidden";
	newImage.className = "responsive";
    newImage.id = "human"+(i+1);
		
	newAnchor.appendChild(newImage);	
	newDiv.appendChild(newAnchor);
    document.getElementById("humansDiv").appendChild(newDiv);
		
	  }
}

function loadNature(){
	"use strict";
	for(var i=0; i < natureArray.length; i++) {
		
	var newDiv = document.createElement("div");
	newDiv.className = "pic";
		
	var newAnchor = document.createElement("a");
	newAnchor.href=natureArray[i];
	newAnchor.className ="fancybox";
	newAnchor.rel = "gallery";
		
	var newImage = document.createElement("img");
	newImage.src = natureArray[i];
	newImage.alt = "Thumbnail";
	newImage.style.width = "200px";
	newImage.style.height = "190px";
	newImage.style.margin = "30px";
	newImage.style.overflow = "hidden";
	newImage.className = "responsive";
    newImage.id = "nature"+(i+1);
		
	newAnchor.appendChild(newImage);	
	newDiv.appendChild(newAnchor);
    document.getElementById("natureDiv").appendChild(newDiv);
		
	  }
}



function getDegrees() {
	"use strict";
	var degreeRequest = new XMLHttpRequest();
	degreeRequest.open('get','degrees.json',true);
	
	degreeRequest.onload = function() {
		if(degreeRequest.readyState === 4) {
		  if(degreeRequest.status === 200) 
		{
			var degreeData = JSON.parse(degreeRequest.responseText);
			//var size = degreeData.degrees.length;
			
			document.getElementById("degreeTable").style.display = "inline";
			 var rows = document.getElementById('degreeTable').rows.length;
		  			
			for(var i=0; i<rows; i++){
				
					document.getElementById("degreeTable").rows[i+1].cells[0].innerHTML = degreeData.degrees[i].degree.School ;
					document.getElementById("degreeTable").rows[i+1].cells[1].innerHTML = degreeData.degrees[i].degree.Program;
					document.getElementById("degreeTable").rows[i+1].cells[2].innerHTML = degreeData.degrees[i].degree.Type;
					document.getElementById("degreeTable").rows[i+1].cells[3].innerHTML = degreeData.degrees[i].degree.Year;
				
			} 
	
			
		}
		  }
	} ;
	
	degreeRequest.send();
}


function getFlipDegrees() {
	"use strict";
	var degreeRequest = new XMLHttpRequest();
	degreeRequest.open('get','js/degrees.json',true);
	
	degreeRequest.onload = function() {
		if(degreeRequest.readyState === 4) {
		  if(degreeRequest.status === 200) 
		{
			var degreeData = JSON.parse(degreeRequest.responseText);
			//var size = degreeData.degrees.length;
			
			//document.getElementById("degreeTable").style.display = "inline";
			 //var rows = document.getElementById('degreeTable').rows.length;
		  			
			for(var i=0; i<3; i++){
				
				var count = i+1;
				var div = document.createElement("div");
				var text1 = document.createElement("p");
				var text2 = document.createElement("p");
				var text3 = document.createElement("p");
				
				text1.innerHTML = "<strong>SCHOOL: </strong>" + degreeData.degrees[i].degree.School+"<br>";
				text2.innerHTML = "<strong>PROGRAM: </strong>" + degreeData.degrees[i].degree.Program+"<br>";
				text3.innerHTML = "<strong>YEAR: </strong>" + degreeData.degrees[i].degree.Year+"<br>";
				
				div.appendChild(text1).appendChild(text2).appendChild(text3);
				document.getElementById("education"+count).appendChild(div);
				
			} 
	
			
		}
		  }
	} ;
	
	degreeRequest.send();
}


function _(){
	
	return document.getElementById(id);
   }

function submitForm() {
	"use strict";
	
	//_("btnSubmit").disabled = true;
	//_("status").innerHTML = "Please wait..";
	
	var formData = new FormData();
	formData.append("name", _("name").value);
	formData.append("email", _("email").value);
	formData.append("subject", _("subject").value);
	formData.append("message", _("message").value);
	
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "contact.php");
	ajax.onreadystatechange = function() {
		
		if(ajax.readyState=== 4 && ajax.status === 200) {
			if(ajax.responseText === "success") {
				_("error").innerHTML = "Thanks your message has been sent.";
			    _("error").style.display = "inline";
			}
			else {
				_("status").innerHTML = ajax.responseText;
				_("btnSubmit").disabled = false;
			}
			}
		};
		
	ajax.send(formData);
	
	}
	







