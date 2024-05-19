let alphas = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
let symbols = "~`!@#$%^&*_|;'<,>.?/"
let numbers = "0123456789"
function passGen(){
    pass_length = Math.round(Math.random()*10)
    let password = ''
    for(i=0; i<8; i++){
        alpha_index = Math.floor((Math.random()/1.923)*10)
        symbol_index = Math.floor(Math.random()*20)
        console.log(symbol_index);
        pass = alphas[alpha_index] + symbols[symbol_index] + Math.floor((Math.random())*10)
        password = password.concat(pass)
    }
    document.getElementById("password").textContent = password
}
passGen()