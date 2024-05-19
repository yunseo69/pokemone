let big = document.querySelector('.big');
let container = document.querySelector('.container');

for( let i =0; i< pokemons.length; i++){
    let box = document.createElement(`div`);
     box.classList.add(`box`);

     let picbox = document.createElement(`div`);
     picbox.classList.add(`picbox`);
     


    let img = document.createElement(`img`);
    img.classList.add(`img`);
    img.src = pokemons[i].img;

    let title = document.createElement(`h2`);
    title.classList.add(`title`);
    title.textContent = pokemons[i].name;

    let ul = document.createElement(`ul`);
    ul.classList.add(`ul`);
    for(let j = 0; j < pokemons[i].weaknesses.length; j++){
        let li = document.createElement(`li`);
        li.textContent = pokemons[i].weaknesses[j];
        ul.appendChild(li);
    }
    container.style.backdropFilter="grayscale(100%)"
    box.appendChild(picbox);
    picbox.appendChild(img);
    box.appendChild(title);
    box.appendChild(ul);

    big.appendChild(box);
    

    console.log(box); 
    console.log(ul);

}