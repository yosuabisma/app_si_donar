function setUsername(username){
    return localStorage.setItem("name", username);
}

function getUsername(){
    return localStorage.getItem("name");
}

function removeUsername(){
    localStorage.removeItem("name");
}

function logoutApp(){
    removeUsername();
}