document.getElementById("signup").addEventListener("submit",(e)=>{
    e.preventDefault()
    let user = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        mobileno : document.getElementById("mno").value,
        password : document.getElementById("password").value,
    }
    if(user.username.length>0){
        if(user.mobileno.length==10){
            if(user.password.length>8){

                fetch("http://localhost:3000/users",{
                    method : "POST",
                    headers : {"Content-type":"application/json"},
                    body: JSON.stringify(user) 
                })
                window.location.href = 'login.html';
            }
            else{
                alert("Enter Password greater than 8 characters.")
            }
        }
        else{
            alert("Enter proper mobile number.")
        }
    }
    else{
        alert("Enter Username.")
    }
})