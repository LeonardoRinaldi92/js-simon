let vai = document.querySelector("#vai")
let gioco = document.querySelector("#gioco")
let ready = document.querySelector(".ready")
let risposte = document.querySelector ("#risposte")
let vaiRisposte = document.querySelector("#vaiRisposte")


function generaNumeri() {
    let array = [];

    for(x=1;x<=5;x++){
        let num = (Math.floor(Math.random() * 100))+1;
        if (array.includes(num.toString())){
            x--
        } else {
            array.push (num.toString())
        }      
    }
    return array
}

function stampanumeri (array) {
    let elemento = document.createElement( "div" )
    elemento.classList.add ("card")
    elemento.innerText = array
    console.log (elemento)
    return gioco.append(elemento)
}




 vai.addEventListener("click", function(){
    generaNumeri()

    let numerirandom = generaNumeri()  
    console.log(numerirandom)

    for(i=0;i<=numerirandom.length-1;i++){

        stampanumeri(numerirandom[i])
    }

    ready.classList.add("none")

    setTimeout (function(){
        
        gioco.classList.add("none")
        gioco.classList.remove("flex")
        risposte.classList.remove("none")
        risposte.classList.add("flex")

    },5000)

    vaiRisposte.addEventListener("click", function() {
        let risposte = document.querySelectorAll('input[name^="risposta"]')
        console.log(numerirandom);
        let rispostegiuste = [];
        let rispostesbagliate = [];
        for(i=0; i < risposte.length; i++) {
            if (numerirandom.includes(risposte[i].value) && !rispostegiuste.includes(risposte[i].value)){
                rispostegiuste.push(risposte[i].value)
            } else {
                rispostesbagliate.push(risposte[i].value)
            }
        }

        console.log(rispostegiuste.join(', '), 'giuste')
        console.log(rispostesbagliate.join(', '), 'sbagliate')
        console.log(numerirandom.join(', '), 'numeri')
        alert ("i numeri erano:" + " " +numerirandom.join(', ') + " " + "hai indovinato :" + " " + rispostegiuste.join(', ') + " " + "ma hai sbagliato :" + " " + rispostesbagliate.join(', ') )
    })


    


 })