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
    const CV = "Curriculo-CaioMonteiro.pdf";
    const pdfUrl = "assets/Currículo - CaioMonteiro.pdf";

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

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}

// Botões do menu

const optionMenus = document.querySelectorAll(".optionMenu");

optionMenus.forEach(optionMenu => {
    optionMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});


// switch theme

const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener("change", toggleTheme);
themeSwitch.addEventListener('touchstart', toggleTheme)

function toggleTheme(event) {
    const elements = document.querySelectorAll(".darkMode, .lightMode");
    elements.forEach(element => {
        // element.classList.toggle("darkMode");
        element.classList.toggle("lightMode");
    });
}


// Card creation

document.addEventListener("DOMContentLoaded", function () {
    const languages = [
        { name: "HTML", image: "./assets/images/html.png" },
        { name: "CSS", image: "./assets/images/css.png" },
        { name: "JavaScript", image: "./assets/images/js.png" },
        { name: "TypeScript", image: "./assets/images/ts.png"},
        { name: "React", image: "./assets/images/react.png" },
        { name: "Node.js", image: "./assets/images/nd-js.png" },
        { name: ".NET", image: "./assets/images/net.png" },
        { name: "C#", image: "./assets/images/cSharp.png" },
        { name: "MongoDB", image: "./assets/images/mongodb.png" },
        { name: "PostgreSQL", image: "./assets/images/postgres.png" },
        { name: "Python", image: "./assets/images/python.png" },
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



