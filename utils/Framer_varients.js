import { animate, delay } from 'framer-motion';

export const varients = {
    // scale animation
    scale: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    },

    // move up animation
    moveUp: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },

    // move down animation
    moveDown: {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },

    // move left animation
    moveLeft: {
        initial: { x: 860, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },

    // move right animation
    moveRight: {
        initial: { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },

    // rise animaion
    rise: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
}


export const transition = {
    scale: { duration: 0.9 },
    moveUp: { duration: 0.9, delay: 1 },
    moveDown: { duration: 0.9, delay: 1 },
    moveLeft: { duration: 0.9 },   
    moveRight: { duration: 0.9 },
    rise: { duration: 2 },

}