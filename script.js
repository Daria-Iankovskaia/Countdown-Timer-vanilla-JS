document.addEventListener("DOMContentLoaded", () => {
    let inputFieldForTime = document.getElementById("timeInput");
    let divForTime = document.getElementById("timerDisplay");
    let startB = document.getElementById("startButton");
    let resetB = document.getElementById("resetButton");
    let textAreForUserMessage = document.getElementById("endMessage");
    let totalTime;
    let intervalId = null;
    let userMessage = "";

    inputFieldForTime.addEventListener("change", (e) => {
        totalTime = parseInt(e.target.value, 10);
    });

    textAreForUserMessage.addEventListener("change", (e) => {
        userMessage = e.target.value;
    });

    startB.addEventListener("click", () => {
        if (!isNaN(totalTime) && totalTime > 0) {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
            divForTime.textContent = totalTime;
            intervalId = setInterval(countDown, 1000);
        } else {
            alert("Please enter time bigger than 0!");
        }
    });

    resetB.addEventListener("click", () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        totalTime = undefined;
        divForTime.textContent = "";
        inputFieldForTime.value = "";
        userMessage = "";
        textAreForUserMessage.value = "";
    });

    function countDown() {
        totalTime -= 1;
        divForTime.textContent = totalTime;

        if (totalTime === 0) {
            clearInterval(intervalId);
            totalTime = undefined;
            inputFieldForTime.value = "";
            textAreForUserMessage.value = "";

            setTimeout(() => {
                divForTime.textContent = "";
                if (userMessage !== "") {
                    alert(userMessage);
                    userMessage = "";
                } else {
                    alert("The timer goes bz bz bz bz!");
                }
            }, 100);
        } else if (totalTime < 0) {
            clearInterval(intervalId);
        }
    }
});
