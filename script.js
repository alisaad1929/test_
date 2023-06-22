const button = document.getElementById('myButton');
const displayText = document.getElementById('displayText');

button.addEventListener('click', function() {
  displayText.textContent = 'Sample website';
  displayText.style.display = 'block';
});
