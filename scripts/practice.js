document.querySelector(".submit").addEventListener("click", () => {
    const questions = document.querySelectorAll(".question");

    let score = 0;

    questions.forEach((question, index) => {
        const selected = question.querySelector("input[type='radio']:checked");
        const result = question.querySelector(".result");
        const correct = question.dataset.correct;

        if (!selected) {
            result.textContent = "No answer selected";
            result.style.color = "red";
            return;
        }

        if (selected.value === correct) {
            result.textContent = "Correct";
            result.style.color = "green";
            score++;
        } else {
            result.textContent = "Incorrect";
            result.style.color = "red";
        }
    });

    const scorebox = document.querySelector(".score");
    scorebox.textContent = `${score} / ${questions.textContent = "10"}`;
});

document.querySelector(".retry").addEventListener("click", () => {
    location.reload();
});
