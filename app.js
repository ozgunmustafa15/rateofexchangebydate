const amountElement = document.getElementById("amount");
const firstUnit = document.getElementById("firstCurrency");
const secondUnit = document.getElementById("secondCurrency");
const currencyDate = document.getElementById("currencyDate");


const currency=new Currency("USD","TRY");


eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);

    firstUnit.onchange = function(){
        
        currency.changeFirstCurrency(firstUnit.options[firstUnit.selectedIndex].textContent)
    };
    
    secondUnit.onchange = function(){
        currency.changeSecondCurrency(secondUnit.options[secondUnit.selectedIndex].textContent)
        
    };
    currencyDate.onchange = function(){
        currency.changeCurrencyDate(currencyDate.value);
    };
}
function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange();
}