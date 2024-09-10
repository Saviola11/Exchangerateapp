const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const amountTwo = document.querySelector('.amount-two');
const currencyTwo = document.querySelector('#currency-two');
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
    // fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)

    fetch(`https://v6.exchangerate-api.com/v6/c634839fdcf280770056a610/pair/${currencyOne.value}/${currencyTwo.value}/`)
    .then(res => res.json())
.then(data => {

const currency1 = currencyOne.value;
const currency2 = currencyTwo.value;
const rate = data.conversion_rate
rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
amountTwo.value = (amountOne.value*rate).toFixed(2)


console.log(currency1);
console.log(currency2);
console.log(rate);
});
}

const swapCurrency = () => {

           const currencyBox = currencyOne.value;
    currencyOne.value = currencyTwo.value;
currencyTwo.value = currencyBox

        calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)

calculate()
swapBtn.addEventListener('click', swapCurrency)