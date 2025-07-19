let projects = [
    "Game.",
    "Retirement.",
    "Music player",
    "Top down shooter",
    "Flowchart",
    "Project manager",
    "Project generator",
    "Revamp my UI pls it suckssss",
    "Mirror mirror on the wall",
    "Jarvis (but local)"
]

let divColor = [
    "#36454F",
    "#353935",
    "#191970",
    "#014421",
    "#800020",
    "#4A0404",
    "#0D0D0D",
    "#1A1110",
    "#2F4F4F",
    "#1A0033"
]

let tettext = document.querySelector("#tet");
let gen = document.querySelector("#btn")

gen.addEventListener("click", function () {
    let projectgen = Math.floor(Math.random() * projects.length);
    tettext.innerHTML = projects[projectgen]

    //Change div color
    let colorgen = Math.floor(Math.random() * divColor.length);
    tettext.style.backgroundColor = divColor[colorgen];

    //Animate text
    tettext.classList.add("animate__animated", "animate__rotateOutDownLeft");
    tettext.addEventListener("animationend", function handler() {
        tettext.classList.remove("animate__animated", "animate__rotateOutDownLeft");
        let projectgen = Math.floor(Math.random() * projects.length);
        tettext.innerHTML = projects[projectgen];
        // show the new one again
        tettext.style.visibility = "visible";
        tettext.classList.add("animate__animated", "animate__fadeIn");
        tettext.removeEventListener("animationend", handler);
    });

    //Tet Anim
    tettext.classList.remove("flash-border");
    void gen.offsetWidth
    tettext.classList.add("flash-border");
    //Button Anim
    gen.classList.remove("buttonAnimation");
    void gen.offsetWidth
    gen.classList.add("buttonAnimation");
});
