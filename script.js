// const users = []
// const users2 = []
// cadastro()
// login()
// comparacao(users, users2)
// function comparacao(v1,v2) {
//     if (v1[0].email === v2[0].email && v1[0].senha === v2[0].senha) {
//         window.location.href = "home.html"
//         alert("Entrando...")
//     }
//     else {
//         const show = document.querySelector(".erro")
//         show.style.display = "block"
//     }
// }

// function cadastro(){
//     const formCad = document.querySelector("#info")
    
//     formCad.addEventListener("submit", event=>{
//         event.preventDefault()
    
//         const conteudo = new FormData(formCad)
//         const user = {
//             nome: conteudo.get("nome"),
//             cpf: conteudo.get("cpf"),
//             email: conteudo.get("email"),
//             senha: conteudo.get("senha"),
//             sexo: conteudo.get("sx")
//         }
//         users.push(user)
//         console.log(users)
//         alert("cadastro feito com sucesso!!")
//         window.location.href = "index.html"
//     })  
// }
// function login() {
//     const formLog = document.querySelector("#info")
    
//     formLog.addEventListener("submit", event=>{
//         event.preventDefault()

//         const data = new FormData("formLog")
//         const user2 = {
//             email: data.get("email"),
//             senha: data.get("senha")
//         }
//         users2.push(user2)
        
//     })
// }

const users = JSON.parse(localStorage.getItem("users")) || []   // MUDOU: lê o que foi salvo
const users2 = []
cadastro()
login()
// REMOVIDO: comparacao(users, users2) aqui no começo (dava erro com as listas vazias)

function comparacao(v1,v2) {
    const ultimo = v2[v2.length - 1]   // NOVO: pega a última tentativa digitada

    // MUDOU: some confere todos os cadastrados, não só o v1[0]
    if (v1.some(u => u.email === ultimo.email && u.senha === ultimo.senha)) {
        alert("Entrando...")                 // MUDOU: alerta antes de trocar de página
        window.location.href = "home.html"
    }
    else {
        const show = document.querySelector(".erro")
        show.style.display = "block"
    }
}

function cadastro(){
    const formCad = document.querySelector("#info")
    if (!formCad || !document.querySelector("#ipt-nome")) return   // NOVO: só roda na página de cadastro

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
        localStorage.setItem("users", JSON.stringify(users))   // NOVO: salva para não sumir
        console.log(users)
        alert("cadastro feito com sucesso!!")
        window.location.href = "index.html"
    })
}

function login() {
    const formLog = document.querySelector("#info")
    if (!formLog || document.querySelector("#ipt-nome")) return   // NOVO: só roda na página de login

    formLog.addEventListener("submit", event=>{
        event.preventDefault()

        const data = new FormData(formLog)   // MUDOU: sem aspas
        const user2 = {
            email: data.get("email"),
            senha: data.get("senha")
        }
        users2.push(user2)
        comparacao(users, users2)            // NOVO: compara depois de digitar
    })
}