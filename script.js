document.getElementById('convert-button').addEventListener('click', () => {
    converterMoeda();
});

document.getElementById('to-currency').addEventListener('change', () => {
    atualizarImagemEMoeda();
});

function converterMoeda() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value.replace(/\./g, '').replace(',', '.'));

    if (isNaN(amount)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    const exchangeRates = {
        "USD": 0.19,
        "EUR": 0.16
    };

    const conversionRate = exchangeRates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById('from-value').textContent = `R$ ${amount.toFixed(2).replace('.', ',')}`;
    document.getElementById('to-value').textContent = `${toCurrency} ${convertedAmount}`;
    
    atualizarImagemEMoeda();
}

function atualizarImagemEMoeda() {
    const toCurrency = document.getElementById('to-currency').value;

    const currencyImages = {
        "USD": "assets/estados-unidos (1) 1.png",
        "EUR": "assets/Euro.png"
    };

    document.getElementById('to-currency-img').src = currencyImages[toCurrency];
    document.getElementById('to-currency-name').textContent = toCurrency === "USD" ? "Dólar Americano" : "Euro";
}
