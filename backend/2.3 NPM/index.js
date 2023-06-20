// const generateName = require('sillyname');
import generateStupidName from 'sillyname';
import superheroes from 'superheroes';

const sillyName = generateStupidName();
const randomSuperHero = superheroes.random();

console.log(`My name is ${sillyName}`);
console.log(`I am ${randomSuperHero}`);
