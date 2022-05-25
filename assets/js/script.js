let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = "100%"
email.style.width = "100%"

function validarNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length <= 2) {
        txtNome.innerHTML = "Nome inválido !"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido !"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "E-mail inválido !"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido !"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 300) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 300 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"

    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}


function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulario corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}