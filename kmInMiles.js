let Wert = document.getElementById("menge.value");


let showResult = document.getElementById("change");
    showResult.addEventListener("click",changenow);


function changenow()
    {
        let miles = Wert *0.621371;
        let mainHeadingId = document.getElementById("Result");
        mainHeadingId.textContent=  miles ;
    }

    
