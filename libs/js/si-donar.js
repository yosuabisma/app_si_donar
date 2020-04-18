function setUsername(username){
    return localStorage.setItem("name", username);
}

function getUsername(){
    return localStorage.getItem("name");
}

function removeUsername(){
    localStorage.removeItem("name");
}

function setEmail(email) {
    return localStorage.setItem("email", email);
}

function getEmail(){
    return localStorage.getItem("email");
}

function removeEmail(){
    localStorage.removeItem("email");
}

function setKey(key){
    return localStorage.setItem("key", key);
}

function getKey(){
    return localStorage.getItem("key");
}

function removeKey(){
    localStorage.removeItem("key");
}


function logoutApp(){
    removeUsername();
    removeKey();
}

function navigate(html){
    window.location.href = '../user/'+html+'.html';
}

function setActiveMenu(menu){
    var profileKey = getKey();
    var menuArray = ["home", "stok_darah", "cari_darah"];
    
    if(menu !== 'profile'){
        document.getElementById("profile").src = '../src/img/profile_photo_default/'+profileKey+'.jpg';
        document.getElementById(menu).src = '../src/img/icons/'+menu+'_active_icon.png';
        for(var i = 0 ; i < menuArray.length ; i++){
            if(menuArray[i] != menu){
               document.getElementById(menuArray[i]).src = '../src/img/icons/'+menuArray[i]+'_icon.png';
            }
        }
    }else{
        document.getElementById("profile").src = '../src/img/profile_photo_default/'+profileKey+'.jpg';
        document.getElementById("profile").classList.add("activeProfile");
        for(var i = 0 ; i < menuArray.length ; i++){
            if(menuArray[i] != menu){
               document.getElementById(menuArray[i]).src = '../src/img/icons/'+menuArray[i]+'_icon.png';
            }
        }
    }
    
}

function activeSelectOption(parentId, childClass, active){
    // Get the container element
    var btnContainer = document.getElementById(parentId);
     // Get all buttons with class="btn" inside the container
     var btns = btnContainer.getElementsByClassName(childClass);

     // Loop through the buttons and add the active class to the current/clicked button
     for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName(active);
            current[0].className = current[0].className.replace(` ${active}`, "");
            this.className += ` ${active}`;
        });
     }
}