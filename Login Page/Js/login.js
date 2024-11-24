const login = ()=>{
    let password = document.getElementById("password").value.trim()
    let email = document.getElementById("email").value.trim()
    fetch(`https://backendimg.onrender.com/admin_login?email=${email}&password=${password}`)
    .then(x => x.json())
    .then(y => {
        console.log(y)
        if(y.success) 
            window.location = "index.html";
        else
            alert("Please enter correct details")
    });
} 