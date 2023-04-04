let vai = document.querySelector("#vai")
let gioco = document.querySelector("#gioco")
let ready = document.querySelector(".ready")


function generaNumeri() {
    let array = [];

    for(x=1;x<=5;x++){
        let num = (Math.floor(Math.random() * 100))+1;
        if (array.includes(num)){
            x--
        } else {
            array.push (num)
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

    },5000)
    


 })