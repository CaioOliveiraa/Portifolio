const CVBtn = document.querySelector(".btnCV");

CVBtn.addEventListener('click', () => {
    CVBtn.classList.add("onclick");
    setTimeout(() => {
        validade();
    }, 250);
});

function validade() {
    setTimeout(() => {
        CVBtn.classList.remove("onclick");
        CVBtn.classList.add("validate");
        setTimeout(callback, 450);
    }, 2250);
}

function callback() {
    setTimeout(() => {
        CVBtn.classList.remove("validate");
    }, 1250);
}
