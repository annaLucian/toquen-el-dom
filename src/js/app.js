const kick = document.querySelector(".instrument-container__kick")
const snare = document.querySelector(".instrument-container__snare")
const floor = document.querySelector(".instrument-container__floor")
const tomOne = document.querySelector(".instrument-container__toom--one")
const tomTwo = document.querySelector(".instrument-container__toom--two")
const tomThree = document.querySelector(".instrument-container__toom--three")
const ride = document.querySelector(".instrument-container__ride")
const closeHh = document.querySelector(".instrument-container__closehh")
const openHh = document.querySelector(".instrument-container__openhh")
const crashOne = document.querySelector(".instrument-container__crash--one")
const crashTwo = document.querySelector(".instrument-container__crash--two")


const playBassDrums=(element)=>{
    const audio = element.children[0]
    audio.play()
    element.classList.add("animation-style")
    setTimeout(() => {
        element.classList.remove("animation-style")
    },100)
}

kick.addEventListener("mousedown", () => playBassDrums(kick))
snare.addEventListener("mousedown", () => playBassDrums(snare))

