import { Languages } from "../data/Languages"

const recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition
export const mic = new recognition()
mic.continuous = true
mic.interimResults = true

export const eng = mic.lang = Languages[0].miclang
export const esp = mic.lang = Languages[1].miclang
export const por = mic.lang = Languages[2].miclang