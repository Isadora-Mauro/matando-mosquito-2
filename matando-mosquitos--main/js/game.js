let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "../imagens/mosquito.png"
img.style.position = "absolute"

function alteraTamanhoMosquito(){
  let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
  img.style.transform = `scale(${numeroAleatorio + 0.2})`
}

function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.8)
    let x = Math.random() * (window.innerWidth * 0.8)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

setTimeout(function(){
    
    alteraTamanhoMosquito()
    geraPosicao()
}, )

body.appendChild(img)