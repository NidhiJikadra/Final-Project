document.getElementById("signup").addEventListener("submit",(e)=>{
    e.preventDefault()
    let user = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        mobileno : document.getElementById("mno").value,
        password : document.getElementById("password").value,
    }

    fetch("http://localhost:3000/users",{
        method : "POST",
        headers : {"Content-type":"application/json"},
        body: JSON.stringify(user)
})
})