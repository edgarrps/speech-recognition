const recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition
export const mic = new recognition()
export const changeLang = ['pt-BR', 'en-US', 'es-ES']
mic.continuous = true
mic.interimResults = true
mic.lang = changeLang[0]
