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

// Card creation

document.addEventListener("DOMContentLoaded", function() {
    const languages = [
        { name: "HTML", image: "./assets/img/html.png" },
        { name: "CSS", image: "./assets/img/css.png" },
        { name: "JavaScript", image: "./assets/img/js.png" },
        { name: "React.js", image:"./assets/img/react.png"},
        { name: "Python", image:"./assets/img/python.png"},
        { name: "Node.js", image:"./assets/img/nd-js.png"},
        { name: "MongoDB", image:"./assets/img/mongodb.png"},
    ];

    const cardContainer = document.querySelector(".cards"); 

    languages.forEach(language => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h5>${language.name}</h5>
            <img src="${language.image}" alt="${language.name} Logo"> 
        `;
        cardContainer.appendChild(card);
    });
});


// observer API

// const hiddenElements = document.querySelectorAll(".hidden")

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting){
            
//             entry.target.classList.add("show")
//         }
//     })
// }, {
//     threshold:0.5,
// })

// hiddenElements.forEach((element) => observer.observe(element))

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            // Verifica se o elemento saiu pela parte inferior da viewport
            const boundingClientRect = entry.boundingClientRect;
            const rootBounds = entry.rootBounds;
            // Se a parte inferior do elemento está acima da parte inferior da viewport, então ele saiu por baixo
            if (boundingClientRect.bottom > rootBounds.bottom) {
                entry.target.classList.remove("show");
            }
        }
    });
}, {
    threshold: 0.5,
    rootMargin: "0px"
});

hiddenElements.forEach((element) => observer.observe(element));
