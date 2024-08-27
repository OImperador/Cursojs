function contar() {
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('resultado')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML ='Contando:<br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            alert('PASSO INVÁLIDO! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}` 
        }
    }
     res.innerHTML += `\u{1F3C1}`
}