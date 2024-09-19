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
        { name: "HTML", image: "./assets/img/html.png" },
        { name: "CSS", image: "./assets/img/css.png" },
        { name: "JavaScript", image: "./assets/img/js.png" },
        { name: "TypeScript", image: "./assets/img/ts.png"},
        { name: "React.js", image: "./assets/img/react.png" },
        { name: "Python", image: "./assets/img/python.png" },
        { name: "Node.js", image: "./assets/img/nd-js.png" },
        { name: ".NET", image: "./assets/img/net.png" },
        { name: "C#", image: "./assets/img/cSharp.png" },
        { name: "MongoDB", image: "./assets/img/mongodb.png" },
        { name: "PostgreSQL", image: "./assets/img/postgres.png" },
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

// Projects Cards 

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "RideApp", image: "./assets/img/rideApp.png", url: "https://github.com/CaioOliveiraa/AppRide" },
        { name: "MemoryGame", image: "./assets/img/memoryGame.png", url: "https://github.com/CaioOliveiraa/MemoryGame" },
        { name: "CalcTelecom", image: "./assets/img/sistComun.png", url: "https://github.com/CaioOliveiraa/calculadora-telecom" },
        { name: "jogo Da Velha", image: "./assets/img/jogoDaVelha.png", url: "https://github.com/CaioOliveiraa/Tic-Tac_Toe" },
        { name: "NoticePortal", image: "./assets/img/noticePortal.png", url: "https://github.com/CaioOliveiraa/NoticePortal" },
        { name: "Cryptography", image: "./assets/img/criptografia.png", url: "https://github.com/CaioOliveiraa/DesafioModalGR/tree/main/questão1_Criptografia" }

    ];

    const projectsCards = document.querySelector(".projectsCards");

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add("projectCard");
        card.innerHTML = `
            <a href="${project.url}" target="_blank">
                <div class="projectName">${project.name}</div>
                <img src="${project.image}" alt="${project.name}">
            </a>
        `;
        projectsCards.appendChild(card);

        const projectName = card.querySelector('.projectName');

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



