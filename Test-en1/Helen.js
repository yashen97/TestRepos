
 function lClicked() {

    let name=document.getElementById('userName');
    let pass=document.getElementById('password');

   
     let validUser="yashen";
     let validpass="123";
    
     if (pass.value!=validUser) {
         alert("Wrong Password");
    }

    if (name.value=validUser) {
        alert("Wrong Username")
    }
     if (name.value==validUser && pass.value==validpass) {
        alert("WTF");
     }
     
          
 }