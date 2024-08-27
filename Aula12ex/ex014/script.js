
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var horas = data.getHours()
msg.innerHTML = `Agora são ${horas} horas.`
if (horas >=0 && horas < 12) {
          //bom dia
          img.src = 'fotomanha.png'
          document.body.style.background = '#fcff5b'
} else if (horas >= 12 && horas <= 18) {
          //boa tarde
          img.src = 'fototarde.png'
          document.body.style.background = '#7430306e'
} else {
         // boa noite
         img.src = 'fotonoite.png'
         document.body.style.background = 'black'
}
}
