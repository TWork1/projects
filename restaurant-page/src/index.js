
import { home } from './homelayout';
import { menu } from './menu.js';
import { head } from './head.js';
import { about } from './about.js';

const content= document.querySelector('#content');
head()
home()
document.querySelector('.Home').addEventListener('click',home);
document.querySelector('.Menu').addEventListener('click',menu);
document.querySelector('.about').addEventListener('click',about)
