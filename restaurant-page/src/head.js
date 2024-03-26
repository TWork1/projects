import './head.css'
export const head = () =>{
    const header = document.querySelector('header');
    const logo = document.createElement('a');
    logo.classList.add('logo')
    logo.setAttribute('href','../dist/index.html')
    logo.innerHTML = '<em>The Lazzy Lounge<em>';
    header.prepend(logo);
    }