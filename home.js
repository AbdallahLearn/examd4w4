let usernameValue = localStorage.getItem('Username')
console.log(usernameValue)

let username = document.getElementById('username')

username.textContent = `Welcome ${usernameValue} to our website`


function logout(){
    window.location.href = 'login.html'
}