function validateForm() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    document.getElementById("nameerror").innerHTML='';
    document.getElementById("emailerror").innerHTML='';
    if(name ==='') {
        document.getElementById("nameerror").innerHTML="Name is Required";
        return false;
    }
    var emailr=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailr.test(email)) {
        document.getElementById("emailerror").innerHTML="Invalid Email Format";
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}