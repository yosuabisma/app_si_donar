function getProfile(email) {
	profile = JSON.parse(localStorage.getItem("profile-" + email));
	return profile;
}

function setProfile(email, golongan_darah, rhesus, nama, password, alamat, lat, long, no_telp, no_telp_darurat, path_foto) {
	profile = [];
	profile[0] = email;
	profile[1] = golongan_darah;
	profile[2] = rhesus;
	profile[3] = nama;
	profile[4] = password;
	profile[5] = alamat;
	profile[6] = lat;
	profile[7] = long;
	profile[8] = no_telp;
	profile[9] = no_telp_darurat;
	profile[10] = path_foto;
	console.log(profile);
	return localStorage.setItem("profile-" + email, JSON.stringify(profile));
	// profile = JSON.parse(localStorage.getItem("profile" + "-email"));
	// console.log(profile)
	// return profile[0];
}

function setActiveSelectOption(parentId, childClass, active, text){
    // Get the container element
    var btnContainer = document.getElementById(parentId);
     // Get all buttons with class="btn" inside the container
     var btns = btnContainer.getElementsByClassName(childClass);

     // Loop through the buttons and add the active class to the current/clicked button
     for (var i = 0; i < btns.length; i++) {
     	if (btns[i].innerText == text) {
     		btns[i].className += ` ${active}`;
     	}
     }
}