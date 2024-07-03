export function calculateInvestmentReturn(principal, rate, time, compounds) {
    return principal * Math.pow((1 + (rate / 100) / compounds), compounds * time);
}
