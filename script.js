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
        downloadCV()
        setTimeout(callback, 450);
    }, 2250);
}

function callback() {
    setTimeout(() => {
        CVBtn.classList.remove("validate");
    }, 1250);
}

function downloadCV() {
    const CV = "Curriculo_CaioMonteiro.pdf";
    const pdfUrl = "assets/Curriculo_CaioMonteiro.pdf";
    
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = CV;

    document.body.appendChild(link);

    link.click();

    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);
}