function a(){
    var a=document.getElementById("user").value
    var b=document.getElementById("mob").value
    var c=document.getElementById("pass").value
    var d=document.getElementById("cpass").value
    var x=true
    var regx=/^[a-zA-Z]{6,9}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[a-zA-Z0-9!@]{6,9}$/

    if(a==""){
        document.getElementById('euser').innerHTML="Enter Username"
        x=false
    }
    else if(!regx.test(a)){
        document.getElementById('euser').innerHTML="Invalid Username"
        x=false
    }

    if(b==""){
        document.getElementById('emob').innerHTML="Enter mobile"
        x=false
    }
    else if(!regx1.test(b)){
        document.getElementById('emob').innerHTML="Invalid Mobile"
        x=false
    }
    if(c==""){
        document.getElementById('epass').innerHTML="Enter password"
        x=false
    }
    else if(!regx2.test(c)){
        document.getElementById('epass').innerHTML="Invalid password"
        x=false
    }
    if (d!=c){
        document.getElementById('ecpass').innerHTML="password not matching"
        x=false
    }
    if (x) {
        // Retrieve the existing user data from Local Storage
        var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Create a new user object
        var newUser = {
            username: a,
            contactNumber: b,
            password: c
        };

        // Add the new user object to the array
        existingUsers.push(newUser);

        // Store the updated user data back in Local Storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Allow the form submission
        x = true;
    } else {
        x = false;
    }

    return x;
}
  


