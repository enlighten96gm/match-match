import getClasses from './getClasses'
import "./styles/index.scss"

console.log('ran from index.js');
getClasses()
const orcSwordRecipe = {
    leather: 2,
    iron: 4,
    greenEmerald: 1
}

const abominationHookRecipe = {
    ...orcSwordRecipe,
    alianceHelmet: 1,
    greenEmerald: 1
}

console.log(orcSwordRecipe);
console.log(abominationHookRecipe);

