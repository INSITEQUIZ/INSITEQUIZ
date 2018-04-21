import { HELLO_WORLD, RESET } from '../constants/constants'

export const helloWorld = () => {
    return {
        type: HELLO_WORLD
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}
