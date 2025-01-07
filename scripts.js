const text = document.querySelector("#text")
const upload = document.querySelector("#upload")
const voice = document.querySelector("#voice")
const listenBtn = document.querySelector("#listen-btn")
const downloadBtn = document.querySelector("#download-btn")

const speak = new SpeechSynthesisUtterance();

let availableVoices = [];

const attValues = () => {
    availableVoices = window.speechSynthesis.getVoices()

    speak.voices = availableVoices[0]

    console.log(availableVoices)

    availableVoices.forEach((voices, index) => {
        const option = document.createElement("option")
        option.value = index
        option.textContent = voices.name
        voice.appendChild(option)
    })
}

window.speechSynthesis.onvoiceschanged = attValues

voice.addEventListener("change", () => {
    speak.voice = availableVoices[voice.value]
})

listenBtn.addEventListener("click", () => {
    speak.text = text.value

    window.speechSynthesis.speak(speak)
})