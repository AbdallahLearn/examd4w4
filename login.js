const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/signup'
const btnLogin = document.getElementById('btn-login')
const username = document.getElementById('username')
const password = document.getElementById('password')

btnLogin.addEventListener('click', function(){
    let usernameValue = username.value 
    let passwordValue = password.value
    let errorMessage = document.getElementById('error-password')

    
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
            data.forEach((item)=>{
                if(usernameValue.match(item.username) && passwordValue.match(item.password)){
                    window.location.href = 'home.html'
                }
                else{
                    errorMessage.style.display = 'block'
                }
                localStorage.setItem('Username', usernameValue)
            })
    });
})


function signup(){
    window.location.href = 'index.html'
}