const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", validacao = ()=>{
    event.preventDefault();
    const emailentrar = document.getElementById('usuario').value;
    const senhaentrar = document.getElementById('senha').value;

    
    if (emailentrar && senhaentrar) {
        document.getElementById('enviado').style.display = "block";
        if (emailentrar && senhaentrar) {
            setTimeout(function() {
                window.location.href = './pagina-inicial.html';
            }, 1000);
        }
    } else {
        document.getElementById('enviado').style.display = "none";
    }
}) 