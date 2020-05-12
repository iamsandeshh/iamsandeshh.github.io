function formValidate(){
    var name = document.getElementById("name").value;/* Variable name taken*/
    var email = document.getElementById("email").value;/* Variable email taken*/
    var subject = document.getElementById("subject").value;/* Variable subject taken*/
    var phone = document.getElementById("phone").value;/* Variable phone taken*/
    var message = document.getElementById("message").value;/* Variable message taken*/
    /*IF condition is being used*/
    if(name.trim() == null || name.trim() == ""){
        alert("Name must be included");
        return false;
    }else if(email.trim() == null || email.trim() == ""){
        alert("email must be included");
        return false;
    } else if(subject.trim() == null || subject.trim() == ""){
        alert("Subject must be included");
        return false;
    } else if(phone.trim() == null || phone.trim() == ""){
        alert("Phone must be included");
        return false;
    }else if(isNaN(phone)){
        alert("Phone must be in numeric format");
        return false;
    }
    else if(phone.length >10){
             alert("Phone number cant be more than 10 digits");
        return false;
            }
    else if(subject.trim() == null || subject.trim() == ""){
        alert("Subject must be included");
        return false;
    } else if(message.trim() == null || message.trim() == ""){
        alert("Message must be included");
        return false;
    } else{
        alert("Message sent successfully");
        return true;
    }
}