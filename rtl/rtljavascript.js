const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");

 //************************************************************ */
const propProduct1 = document.getElementById("prod-details1");
const showPropBtn1 = document.getElementById("showDetails1");

const propProduct2 = document.getElementById("prod-details2");
const showPropBtn2 = document.getElementById("showDetails2");
const propProduct3 = document.getElementById("prod-details3");
const showPropBtn3 = document.getElementById("showDetails3");
const propProduct4 = document.getElementById("prod-details4");
const showPropBtn4 = document.getElementById("showDetails4");
const propProduct5 = document.getElementById("prod-details5");
const showPropBtn5 = document.getElementById("showDetails5");
const propProduct6 = document.getElementById("prod-details6");
const showPropBtn6 = document.getElementById("showDetails6");
const propProduct7 = document.getElementById("prod-details7");
const showPropBtn7 = document.getElementById("showDetails7");
const propProduct8 = document.getElementById("prod-details8");
const showPropBtn8 = document.getElementById("showDetails8");
const propProduct9 = document.getElementById("prod-details9");
const showPropBtn9 = document.getElementById("showDetails9");
const propProduct10 = document.getElementById("prod-details10");
const showPropBtn10 = document.getElementById("showDetails10");
const propProduct11 = document.getElementById("prod-details11");
const showPropBtn11 = document.getElementById("showDetails11");
const propProduct12 = document.getElementById("prod-details12");
const showPropBtn12 = document.getElementById("showDetails12");
const propProduct13 = document.getElementById("prod-details13");
const showPropBtn13 = document.getElementById("showDetails13");


const propDivArray = [propProduct1, propProduct2 , propProduct3, propProduct4, propProduct5, propProduct6, propProduct7, propProduct8, propProduct9, propProduct10, propProduct11, propProduct12, propProduct13 ];
const btnShowArray = [showPropBtn1, showPropBtn2, showPropBtn3, showPropBtn4, showPropBtn5, showPropBtn6, showPropBtn7, showPropBtn8, showPropBtn9, showPropBtn10, showPropBtn11, showPropBtn12, showPropBtn13];
    document.addEventListener("click",(event)=>{
        if(!btnShowArray.some(element=>element===event.target)){
        propDivArray.forEach(element=>element.style.display = "none");

        }
    });

propDivArray.forEach((element, index)=>{
    btnShowArray[index].addEventListener("click" , (event) => {
        
       // getComputedStyle(element).display
        if(element.style.display !== "grid"){
        element.style.display = "grid";
    }else {
            element.style.display = "none";
    }
    // event.stopPropagation();
    });
});

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) skillsCounter();
    if (!mlplayed) mlCounter();
});

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
};
/* ----------- sticky navbar ------------ */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/* ----------- Reveal Animation ------------ */

let sr = new ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 400 });
sr.reveal(".showcase-img", {
    origin: "top",
    delay: 500
});
/* ----------- skills progress Bar Animation ------------ */

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

let skillsPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;
    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);
        setTimeout(() => {
        updateCount(counter, target);
        }, 400);
    });
    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}

/* ----------- Services Counter Animation ------------ */
// let mlplayed = false;


// function mlCounter() {
//     if (!hasReached(ml_section)) return;
//     mlplayed = true;
//     ml_counters.forEach((ctr) => {
//         let target = +ctr.dataset.target;
//         setTimeout(() => {
//             updateCount(ctr, target);
//         }), 400;
//     });
// }

// mlCounter();

/* ----------- Portfolio filter Animation ------------ */
let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500,
    },
});


/* ----------- Modal pop up Animation ------------ */

let currentIndex = 0;

zoom_icons.forEach((icn, i) => icn.addEventListener("click", () => {
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex);
}));

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = 13;
    } else {
        currentIndex--;
    }
    changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
    if (currentIndex === 13) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeImage(currentIndex);
})

function changeImage(index) {
    images.forEach((img) => img.classList.remove("showImage"))
    images[index].classList.add("showImage");
};
/* ----------- Modal pop up Animation ------------ */


const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    autoplay: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
/* ----------- Change Active link on scroll ------------ */

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            };
        })
        .filter((sct) => sct.y <= 0);
    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
};
activeLink();
/* ----------- Change dark mode ------------ */
let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);

    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* ----------- open & close navbar menu ------------ */
hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}));