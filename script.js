const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const interest = parseFloat(interestInput.value) / 100 / 12;
  const years = parseFloat(yearsInput.value);
  const months = years * 12;

  const monthlyPayment = (amount * interest * Math.pow(1 + interest, months)) / (Math.pow(1 + interest, months) - 1);

  resultDiv.textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
});