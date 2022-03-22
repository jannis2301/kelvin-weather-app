const temperatureConverter = (kelvin) => {
  const celsius = kelvin - 273;
  fahrenheit = Math.floor((celsius * (9/5)) + 32);
  document.getElementById("outputFahrenheit").innerHTML = fahrenheit;
}
