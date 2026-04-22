document.querySelectorAll(".question").forEach((question) => { 
    const button = question.querySelector(".submit");
    const result = question.querySelector(".result");

    button.addEventListener("click", () => {
        const selected = question.querySelector("input[type='radio']:checked"); //stores the answer

        if (!selected) {
            result.textContent = "Please select an answer."; //displays when no answer is selected
            return;
        }

        const correct = question.dataset.correct;

        if (selected.value === correct) {
            result.textContent = "Correct";
            result.style.color = "green";
        } else {
            result.textContent = "Incorrect";
            result.style.color = "red";
        }
    });
});