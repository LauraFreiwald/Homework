
let secret = Math.round(Math.random() * 100);
console.log(secret);
let Wert = document.getElementById("menge.value");

let showResult = document.getElementById("GuessNow");
    showResult.addEventListener("click",checkResult);


function checkResult()
    {
        if(Wert < secret)
            { showResultLow();}
        else if(Wert > secret)
            {showResultHigh();}
        else
            { showResultTrue();}  
    }



function showResultTrue() 
    {
    let mainHeadingId = document.getElementById("Result");
    mainHeadingId.textContent="Congratulation";
    }
function showResultLow() 
    {
    let mainHeadingId = document.getElementById("Result");
    mainHeadingId.textContent= "Guess is to low!";
    }
function showResultHigh() 
    {
    let mainHeadingId = document.getElementById("Result");
    mainHeadingId.textContent= "Guess is to high!";
    }
function showResultNotInRange() 
    {
    let mainHeadingId = document.getElementById("Result");
    mainHeadingId.textContent= "Guess isn't in range!";
    }
     
    
