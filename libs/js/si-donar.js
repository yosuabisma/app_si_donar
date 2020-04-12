function setUsername(username){
    return localStorage.setItem("name", username);
}

function getUsername(){
    return localStorage.getItem("name");
}

function removeUsername(){
    return localStorage.removeItem("name");
}
