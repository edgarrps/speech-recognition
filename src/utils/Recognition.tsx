const recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition
export const mic = new recognition()
export const language = ['pt-BR', 'en-US', 'es-ES']
mic.continuous = true
mic.interimResults = true
mic.lang = language[0]
