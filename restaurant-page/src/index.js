
import { home } from './homelayout';
import { menu } from './menu.js';
import { top } from './top.js';
const content= document.querySelector('#content');

top()
document.querySelector('.Home').addEventListener('click',home);
document.querySelector('.Menu').addEventListener('click',menu);

