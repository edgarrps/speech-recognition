import Speech from '../../components/Speech'
import { mic } from '../../utils/Recognition'

export default function Portuguese() {
    mic.lang = 'pt-BR'
    return <Speech />
}