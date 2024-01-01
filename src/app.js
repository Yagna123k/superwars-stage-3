const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];
const initPlayers = (players) => {
    let detailedPlayers = [];

players.map(function(e,i){
   const players={
    name:PLAYERS[i],
    image:`images/super-${i + 1}.png`,
    strength:getRandomStrength(),
    type:i%2==0?"hero":"villain"
   }
   console.log(players)
   detailedPlayers.push(players)
})

    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 101);
}

const buildPlayers = (players, type) => {

const fragment = players.filter(player => player.type === type).map(player => `
    <div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
    </div>`
)
.join(''); 

return fragment; // Return the HTML fragment
}


// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}