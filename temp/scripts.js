function convertTemperature() {
  // Get temperature and unit from input fields
  var temperatureInput = document.getElementById('temperature');
  var unitSelect = document.getElementById('unit');
  var temperature = parseFloat(temperatureInput.value);
  var unit = unitSelect.value;

  // Validate input
  if (isNaN(temperature)) {
      showError('Please enter a valid temperature.');
      return;
  }

  // Convert temperature based on selected unit
  switch (unit) {
      case 'fahrenheit':
          temperature = (temperature - 32) * 5 / 9;
          break;
      case 'kelvin':
          temperature = temperature - 273.15;
          break;
      // Celsius is default, no conversion needed
      default:
          break;
  }

  // Display converted temperature
  var outputElement = document.getElementById('output');
  outputElement.textContent = temperature.toFixed(2) + '°' + (unit === 'kelvin' ? 'K' : 'C');

  // Change background color based on temperature
  changeBackgroundColor(temperature);
}
