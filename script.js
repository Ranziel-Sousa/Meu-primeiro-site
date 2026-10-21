const users = []
const users2 = []

cadastro()
login()
comparacao(users, users2)

function comparacao(v1,v2) {
    if (v1[0].email === v2[0].email && v1[0].senha === v2[0].senha) {
        window.location.href = "home.html"
        alert("Entrando...")
    }
    else {
        const show = document.querySelector(".erro")
        show.style.display = "block"
    }
}
function cadastro(){
    const formCad = document.querySelector("#info")
    
    formCad.addEventListener("submit", event=>{
        event.preventDefault()
    
        const conteudo = new FormData(formCad)
        const user = {
            nome: conteudo.get("nome"),
            cpf: conteudo.get("cpf"),
            email: conteudo.get("email"),
            senha: conteudo.get("senha"),
            sexo: conteudo.get("sx")
        }
        users.push(user)
        console.log(users)
        alert("cadastro feito com sucesso!!")
        window.location.href = "index.html"
    })  
}
function login() {
    const formLog = document.querySelector("#info")
    
    formLog.addEventListener("submit", event=>{
        event.preventDefault()

        const data = new FormData("formLog")
        const user2 = {
            email: data.get("email"),
            senha: data.get("senha")
        }
        users2.push(user2)
        
    })
}

