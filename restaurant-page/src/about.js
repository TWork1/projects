import './about.css'
const content = document.querySelector('#content');

export const about =()=>{
    while(content.hasChildNodes()){
        content.firstChild.remove()
    }
const container = document.createElement('div')
container.classList.add('container')
const about = document.createElement('p');
about.textContent = "Welcome to The Jazzy Lounge, where sophistication meets soulful indulgence. Tucked away in the heart of the city, The Jazzy Lounge is more than just a restaurant; it's a sanctuary for discerning palates and lovers of rhythm alike. Step into an ambiance where the smooth melodies of jazz intertwine with the tantalizing aromas of our culinary creations. Our talented chefs draw inspiration from both classic and contemporary flavors, crafting dishes that are as vibrant and eclectic as the music that fills our space. Whether you're seeking a cozy spot for a romantic evening or a vibrant atmosphere to gather with friends, The Jazzy Lounge invites you to unwind, indulge, and savor every moment. Call us at 555-678-9012 to secure your reservation and embark on a culinary journey like no other."
container.appendChild(about)
content.appendChild(container)
}