const CVBtn = document.querySelector(".btnCV");
const btnMenu = document.querySelector(".btnMenu")

// Botão Download CV

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

// Botão Menu 

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu)

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}

// switch theme

const themeSwitch = document.getElementById('themeSwitch')

themeSwitch.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add('lightTheme');
    }else{
        document.body.classList.remove('lightTheme')
    }
})