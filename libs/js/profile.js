function getProfile(email) {
	profile = JSON.parse(localStorage.getItem("profile-" + email));
	return profile;
}

function setProfile(email, golongan_darah, rhesus, alamat, plus_code, no_telp, no_telp_darurat, path_foto) {
	profile = [];
	profile[0] = email;
	profile[1] = golongan_darah;
	profile[2] = rhesus;
	profile[3] = alamat;
	profile[4] = plus_code;
	profile[5] = no_telp;
	profile[6] = no_telp_darurat;
	profile[7] = path_foto;
	return localStorage.setItem("profile-" + email, JSON.stringify(profile));
	// profile = JSON.parse(localStorage.getItem("profile" + "-email"));
	// console.log(profile)
	// return profile[0];
}