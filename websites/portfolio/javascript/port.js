function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

if (username ==='' || password  ===''){
alert('please fill iN all details');
return false;    
}
return true;
}