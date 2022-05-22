// Selecting all the required elements
let themeBar = document.querySelector(".dark-theme-icon .theme-color-box");
let toolTip = document.querySelector('.tooltip-text');
themeBar.onclick = () => {
    themeBar.classList.toggle("show");
    toolTip.classList.add('hide');
}

window.onload = () => {
    const a = setTimeout(() => {
        toolTip.classList.remove('hide');
    }, 3000);
}

setTimeout(() => {
    toolTip.classList.add('hide');
}, 8000);



let themeBtn = document.querySelectorAll(".theme-color");
themeBtn.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        let databtnColor = color.getAttribute('data-btn-color');
        document.querySelector(':root').style.setProperty('--primary-color', dataColor);
        document.querySelector(':root').style.setProperty('--secondary-color', dataColor);
        document.querySelector(':root').style.setProperty('--nav-btn', databtnColor);
        document.querySelector(':root').style.setProperty('--btn-color', dataColor);
    });
});