function validateForm() {
     var name = document.forms["register-form"]["name"].value;
    var email = document.forms["register-form"]["email"].value;
    var mobile = document.forms["register-form"]["mobile"].value;
    var password = document.forms["register-form"]["password"].value;
    var confirmPassword = document.forms["register-form"]["confirm-password"].value;
  
    if (name == "" || email == "" || mobile == "" || password == "" || confirmPassword == "") {
      alert("Please fill in all the required fields.");
      // return false;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      // return false;
    }
  
    if (!isValidMobile(mobile)) {
      alert("Please enter a valid mobile");
      // return false;
    }  

    if(!isValidName(name)){
        alert("Please enter a valid name");
        // return false;
    }

    if (password != confirmPassword & password.length >= 8) {
      alert("Passwords do not match. Please try again. Password must be at least 8 characters long.");

      // return false;
    }

    

}

function isValidEmail(email) {
    const emailRegex = /^[\w._-]+@[\w.-]+\.[\w]{2,4}$/;
    
    console.log(emailRegex.test(email));
    return emailRegex.test(email);
    
  }
    
function isValidMobile(mobile) {
    const mobileRegex = /^\d{10}$/;
    console.log(mobileRegex.test(mobile));
    return mobileRegex.test(mobile);
    
}

function isValidName(name) {
    const nameRegex = /^[A-Z]{1}[A-Za-z]{2,19}$/;
    console.log(nameRegex.test(name)); 
    return nameRegex.test(name);
    
  }