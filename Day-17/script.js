
function filterTasks() {
    const tasks = [
        { name: "Design UI", completed: true },
        { name: "Fix Bugs", completed: false },
        { name: "Deploy Project", completed: true },
        { name: "Write Documentation", completed: false }
    ];

    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);

    document.getElementById("taskOutput").innerHTML =
        "Completed: " + completedTasks.map(t => t.name).join(", ") +
        "<br>Pending: " + pendingTasks.map(t => t.name).join(", ");
}

function calculateTax() {
    const prices = [100, 200, 300, 400];
    const taxRate = 0.18;

    const pricesWithTax = prices.map(price => price + (price * taxRate));

    document.getElementById("priceOutput").innerHTML =
        "Original Prices: " + prices.join(", ") +
        "<br>With 18% Tax: " + pricesWithTax.join(", ");
}

function calculateBudget() {
    const expenses = [5000, 12000, 8000, 3000];

    const totalBudget = expenses.reduce((total, expense) => total + expense, 0);

    document.getElementById("budgetOutput").innerHTML =
        "Expenses: " + expenses.join(", ") +
        "<br>Total Company Budget: ₹" + totalBudget;
}