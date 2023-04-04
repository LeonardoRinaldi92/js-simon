let vai = document.querySelector("#vai")


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

vai.addEventListener("click", function(){
    generaNumeri()
    let numerirandom = generaNumeri()



})