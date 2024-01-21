function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function convert() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
      fahrenheitInput.value = "Invalid input";
    }
}