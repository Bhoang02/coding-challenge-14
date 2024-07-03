import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-interest').value);
    const rate = parseFloat(document.getElementById('rate-interest').value);
    const time = parseFloat(document.getElementById('time-interest').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result-interest').textContent = 'Please enter valid numbers.';
    } else {
        const interest = calculateInterest(principal, rate, time);
        document.getElementById('result-interest').textContent = `Interest: $${interest.toFixed(2)}`;
    }
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-loan').value);
    const rate = parseFloat(document.getElementById('rate-loan').value);
    const time = parseFloat(document.getElementById('time-loan').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result-loan').textContent = 'Please enter valid numbers.';
    } else {
        const payment = calculateLoanPayment(principal, rate, time);
        document.getElementById('result-loan').textContent = `Monthly Payment: $${payment.toFixed(2)}`;
    }
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-investment').value);
    const rate = parseFloat(document.getElementById('rate-investment').value);
    const time = parseFloat(document.getElementById('time-investment').value);
    const compounds = parseFloat(document.getElementById('compounds-investment').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds)) {
        document.getElementById('result-investment').textContent = 'Please enter valid numbers.';
    } else {
        const futureValue = calculateInvestmentReturn(principal, rate, time, compounds);
        document.getElementById('result-investment').textContent = `Future Value: $${futureValue.toFixed(2)}`;
    }
});
