
const container = document.createElement("div");
container.setAttribute("class", "container");

const title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "text-center");
title.innerText = "";

const cardsContainer = document.createElement("div");
cardsContainer.setAttribute("class", "row");

document.body.appendChild(container);
container.append(title, cardsContainer);


const HAPPY_API = 'https://hp-api.herokuapp.com/api/characters'

async function fetchCharacters() {
    
    const allCharacters = await fetch(HAPPY_API)
    .then( allCharacters => allCharacters.json())
    .then(characters => {
        characters.forEach(character => {
            
            const col = document.createElement("div");
            col.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");
            cardsContainer.appendChild(col);

            const characterCard = document.createElement('div');
            characterCard.setAttribute('class', 'card h-100');
            col.appendChild(characterCard);

            const characterName = document.createElement('h5');
            characterName.setAttribute('class', 'card-header text-center');
            characterName.innerText = character.name;

            const characterBody = document.createElement('div');
            characterBody.setAttribute("class", "card-body d-flex flex-column gap-2 align-items-center justify-content-center card-text");
            characterBody.innerHTML = 
            `
            <img src="${character.image}" alt="${character.name} image" class="card-img-top" style="height: 20rem"></img>
            <div class="text-center"><span>Actor : </span> ${character.actor} </div>
            <div class="text-center"><span>House : </span> ${character.house} </div>
            <div class="text-center"><span>Year Of Birth : </span> ${character.yearOfBirth} </div>
            `

            characterCard.append( characterName, characterBody );

        })
    }).catch((error) => console.log(error.message ))
} 


fetchCharacters();


