document.getElementById('financialPlanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input
    const postTaxIncome = parseFloat(document.getElementById('income').value);

    // Ratios for allocation
    const expensesRatio = 3533.75 /
