document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault()
    let login ={
        userin : document.getElementById("userin").value,
        passwordin : document.getElementById("passwordin").value,
        emailin : document.getElementById("emailin").value,
        }

    if(login.userin==user.username){
        alert("Done....")
    }
})