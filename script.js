/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function convertMeasurements() {
    event.preventDefault();
    const input = document.getElementById("search").value;
    const output = document.getElementById("output");
    output.innerText = "";
    
    const pounds = (input * 2.2046).toFixed(2) + " lb";
    const grams = (input / 0.0010000).toFixed(2) + " gr";
    const ounce = (input * 35.274).toFixed(2) + " oz";
    const poundsDiv = document.createElement("div");
    poundsDiv.innerText = pounds;

    const gramsDiv = document.createElement("div");
    gramsDiv.innerText = grams;

    const ounceDiv = document.createElement("div");
    ounceDiv.innerText = ounce;
    

    output.append(poundsDiv, gramsDiv, ounceDiv);
    
}

document.getElementById("submit-btn").addEventListener("click", convertMeasurements);

