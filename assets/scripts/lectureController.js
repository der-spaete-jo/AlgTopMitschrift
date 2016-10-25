
var nav = document.getElementById("navigation_container");
var nav_buttons = nav.getElementsByTagName("a");

for (i=0; i<nav_buttons.length; i++) {
	var btn = nav_buttons[i];
	btn.addEventListener("onclick", loadLecture);
}

function loadLecture() 
{
	// free space in lecture div
	var target_container = document.getElementById("current_lecture_container");
	var child_nodes = target_container.childNodes;
	while (target_container.firstChild) {
		target_container.firstChild.remove();
	}
	
	// get id of button that initiated loadLecture
	var id = this.id;	
	var split = id.split["."][0];
	
	// find corresponding lecture
	var lecture_file_name = "VL" + split + ".html";
	var lecture_file_verz = "assets/" + lecture_file_name;
	
	//load the lecture using AJAX request
	xhr = new XMLHttpRequest();	
	var target_container = document.getElementById("current_lecture_container");
	xhr.onreadystatechange = function (e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			target_container.innerHTML = xhr.responseText;
		}
	}	
	xhr.open("GET", lecture_file_verz, true);
	xhr.setRequestHeader("Content-type", "text/html");
	xhr.send();
}