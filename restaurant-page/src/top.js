import './head.css'
export const top = () =>{
    const header = document.querySelector('header');
    const logo = document.createElement('a');
    logo.classList.add('logo')
    logo.setAttribute('href','/restaurant-page/dist/index.html')
    logo.innerHTML = '<em>The Lazzy Lounge<em>';
    header.prepend(logo);
    }