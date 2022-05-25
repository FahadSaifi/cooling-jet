// Selecting all the required elements
const address = window.location.href.split("#")[1];
let inputText = document.querySelector(".services");
console.log(inputText)
if (address == "repairing") {
    inputText.value = "AC Repairing";
}
if (address == "service") {
    inputText.value = "AC Servicing";
}
if (address == "installation") {
    inputText.value = "AC Installation";
}
if (address == "gascharging") {
    inputText.value = "AC Gas Filling";
}
if (address == "maintenance") {
    inputText.value = "AC Maintenance";
}
if (address == "amc") {
    inputText.value = "AC AMC";
}