document.getElementById("assistant-btn").addEventListener("click", function () {
    document.getElementById("main").classList.remove("hidden");
    document
        .getElementById("history-btn")
        .classList.remove(
            "bg-gradient-to-r",
            "from-[#2b60eb]",
            "to-[#883cc8]",
            "text-white"
        );
    document
        .getElementById("assistant-btn")
        .classList.add(
            "bg-gradient-to-r",
            "from-[#2b60eb]",
            "to-[#883cc8]",
            "text-white"
        );
});

document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("main").classList.add("hidden");
    document
        .getElementById("assistant-btn")
        .classList.remove(
            "bg-gradient-to-r",
            "from-[#2b60eb]",
            "to-[#883cc8]",
            "text-white"
        );
    document
        .getElementById("history-btn")
        .classList.add(
            "bg-gradient-to-r",
            "from-[#2b60eb]",
            "to-[#883cc8]",
            "text-white"
        );
});

document.getElementById("calculate-btn").addEventListener("click", function () {
    let income = parseInt(document.getElementById("income-input").value);
    let softwareCost = parseInt(
        document.getElementById("software-cost-input").value
    );
    let hardwareCost = parseInt(
        document.getElementById("hardware-cost-input").value
    );
    let courseCost = parseInt(
        document.getElementById("course-cost-input").value
    );
    let internetCost = parseInt(
        document.getElementById("internet-cost-input").value
    );
    let savings = parseInt(document.getElementById("savings-input").value);

    let totalExpense = softwareCost + hardwareCost + courseCost + internetCost;
    let Balance = income - totalExpense;
    let savingsAmount = (savings / 100) * income;
    let remainingBalance = Balance - savingsAmount;

    let div = document.createElement("div");
    div.innerHTML = `
       <div class="w-full p-4 border border-[#2b60eb] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-xl my-5">
            <div class="border-l-4 p-4 rounded-xl border-green-700 shadow-xl px-5">
                <h1 class="font-bold">Total Expense</h1>
                <p class="text-2xl font-extrabold">${totalExpense}</p>
            </div>

            <div class="border-l-4 p-4 rounded-xl border-yellow-700 shadow-xl px-5">
                <h1 class="font-bold">Balance</h1>
                <p class="text-2xl font-extrabold">${Balance}</p>
            </div>

            <div class="border-l-4 p-4 rounded-xl border-purple-700 shadow-xl px-5">
                <h1 class="font-bold">Total Savings</h1>
                <p class="text-2xl font-extrabold">${savingsAmount}</p>
            </div>

            <div class="border-l-4 p-4 rounded-xl border-orange-700 shadow-xl px-5">
                <h1 class="font-bold">Remaining Balance</h1>
                <p class="text-2xl font-extrabold">${remainingBalance}</p>
            </div>
       </div>
    `;
    document.getElementById("result").appendChild(div);

    document.getElementById("income-input").value = "";
    document.getElementById("software-cost-input").value = "";
    document.getElementById("hardware-cost-input").value = "";
    document.getElementById("course-cost-input").value = "";
    document.getElementById("internet-cost-input").value = "";
    document.getElementById("savings-input").value = "";
});
