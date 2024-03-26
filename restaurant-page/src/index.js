
import { home } from './homelayout';
import { menu } from './menu.js';
import { head } from './head.js';

const content= document.querySelector('#content');

head()
document.querySelector('.Home').addEventListener('click',home);
document.querySelector('.Menu').addEventListener('click',menu);

