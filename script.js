document.addEventListener("DOMContentLoaded", function () {
    console.log("Ellustar AI Business Consultant is ready!");
});
function openConsultant(consultantName) {
    // Remove an existing consultant window if there is one
    const existing = document.getElementById("consultant-modal");
    if (existing) {
        existing.remove();
    }
    // Create consultant window
    const modal = document.createElement("div");
    modal.id = "consultant-modal";
    modal.innerHTML = `
        <div class="consultant-modal-content">
            <button class="consultant-close" onclick="closeConsultant()">×</button>
            <h2>🤖 ${consultantName}</h2>
            <p>
                Welcome to the Ellustar AI Business Consultant.
                Ask your business question below.
            </p>
            <textarea
                 id="consultant-question"
                placeholder="Type your business question here..."
                rows="6"
            ></textarea>
            <button
                class="consultant-submit"
                onclick="submitConsultantQuestion('${consultantName.replace(/'/g, "\\'")}')"
            >
                Ask AI Consultant
            </button>
            <div id="consultant-response"></div>
        </div>
    `;
    document.body.appendChild(modal);
}
function closeConsultant() {
    const modal = document.getElementById("consultant-modal");
    if (modal) {
        modal.remove();
    }
}
function submitConsultantQuestion(consultantName) {
    const question = document.getElementById("consultant-question").value.trim();
    const response = document.getElementById("consultant-response");
    if (!question) {
        response.innerHTML = "<p>Please enter your business question.</p>";
return
    }
    response.innerHTML = `
        <div class="consultant-loading">
            <strong>${consultantName}</strong> is preparing your AI consultation...
        </div>
    `;
    // Gemini API connection will be added here next.
}


