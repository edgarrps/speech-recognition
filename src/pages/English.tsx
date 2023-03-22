import Speech from '../components/Speech'
import { mic } from '../utils/Recognition'

export default function English() {
    mic.lang='en-US'
    return <Speech />
}