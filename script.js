document.addEventListener("DOMContentLoaded", function () {
    console.log("Ellustar AI Business Consultant is ready!");
});
function openConsultant(consultantName) {
    const question = prompt(
        "You selected: " + consultantName +
        "\n\nWhat would you like help with?"
    );
    if (question && question.trim() !== "") {
        alert(
            consultantName +
            " received your question:\n\n" +
            question +
            "\n\nYour AI consultation system is being prepared."
        );
    }
}


