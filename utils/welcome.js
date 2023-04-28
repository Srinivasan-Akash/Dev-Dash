import { strings } from './strings.js';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

export default async function welcome() {
    chalkAnimation.rainbow(strings["welcome_title"]);
    setTimeout(() => console.log(`${chalk.bgGreenBright(' 🚀 GET STARTED:- ')} \n${strings["welcome_desc"]} \n`), 1000)
}  