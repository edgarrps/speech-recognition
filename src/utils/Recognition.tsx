const recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition
export const mic = new recognition()
export const language = ['en-US', 'es-ES', 'pt-BR']
mic.continuous = true
mic.interimResults = true