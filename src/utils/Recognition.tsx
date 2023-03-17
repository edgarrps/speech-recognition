const recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition
export const mic = new recognition()
mic.continuous = true
mic.interimResults = true
mic.lang = 'pt-BR'