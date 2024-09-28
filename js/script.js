document.getElementById("assistant-btn").addEventListener("click", function () {
    document.getElementById("main").classList.remove("hidden");
});

document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("main").classList.add("hidden");
});
