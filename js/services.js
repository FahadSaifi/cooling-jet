// Selecting all the required elements
const bookBtn = document.querySelector(".book-now-btn a");
const bookBtn2 = document.querySelector(".book-now-btn .a");
const cancelBtn = document.querySelector(".cancel-btn img");
const popUp = document.querySelector(".popup-wrapper");
const popUpcontent = document.querySelector(".popup-wrapper .popup-content");

bookBtn.addEventListener("click", (e) => {
    e.preventDefault()
    popUp.classList.add("show");
});
bookBtn2.addEventListener("click", (e) => {
    popUp.classList.add("show");
    e.preventDefault()
});

cancelBtn.addEventListener("click", () => {
    popUp.classList.remove("show");
});