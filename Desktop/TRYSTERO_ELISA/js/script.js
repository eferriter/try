function validateForm() {
    var x = document.forms["contact"]["email"].value;
    if (x == "") {
        alert("we need your email address!");
        return false;
    }
}   

 
