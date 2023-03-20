import Speech from '../../components/Speech'
import { mic } from '../../utils/Recognition'

export default function Spanish() {
    mic.lang = 'es-ES'
    return <Speech />
}