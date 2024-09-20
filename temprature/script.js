function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitInput').value;
  let result = '';
  let height = 0;

  if (isNaN(temp)) {
    result = 'Please enter a valid temperature.';
    height = 0;
  } else {
    if (unit === 'C') {
      result = `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F = ${(temp + 273.15).toFixed(2)} K`;
      height = Math.min(temp, 100) * 2.5; // Max height for 100°C
    } else if (unit === 'F') {
      result = `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C = ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
      height = Math.min((temp - 32) * 5/9, 100) * 2.5; // Convert F to C for height
    } else if (unit === 'K') {
      result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      height = Math.min(temp - 273.15, 100) * 2.5; // Convert K to C for height
    }
  }

  document.getElementById('result').innerHTML = result;
  document.getElementById('mercury').style.height = height + 'px';
}
