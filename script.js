
var lista_pessoas = []
var pessoas = document.getElementById("pessoas")

function enviar(){
    let enviar = document.getElementById("enviar")
    lista_pessoas.push(pessoas.value)
    console.log(lista_pessoas)
}

function sortear(){
    if(pessoas.value == ""){
        alert("Insira os nomes na caixa de texto")
    }
    else{
        let randomNumber = Math.floor(Math.random() * lista_pessoas.length)
        let res = document.getElementById("res")
        res.innerHTML = lista_pessoas[randomNumber]
    }
}


window.addEventListener("keypress" , function(e){
    if(e.key === "Enter"){
        return enviar();
    }
})
