// libraries
import chalkAnimation from 'chalk-animation'
import chalk from 'chalk'

// Utils
import { strings } from './strings.js'

export default async function welcome() {
    return new Promise((resolve, reject) => {
        chalkAnimation.rainbow(strings["welcome_title"])
        setTimeout(() => {
            console.log(`${chalk.bgGreenBright(' 🚀 GET STARTED:- ')} \n${strings["welcome_desc"]} \n`)
            resolve()
        }, 1000)    
    })
}

