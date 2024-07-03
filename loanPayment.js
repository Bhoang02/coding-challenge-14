export function calculateLoanPayment(principal, rate, time) {
    const monthlyRate = (rate / 100) / 12;
    const numberOfPayments = time * 12;
    return (principal * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numberOfPayments));
}
