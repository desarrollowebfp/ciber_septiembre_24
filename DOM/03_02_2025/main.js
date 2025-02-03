const logo =
  "https://img.itch.zone/aW1nLzE4MzUyNzA4LnBuZw==/original/GauNfb.png";

const placeholder =
  "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/08/steam-logo-splash.jpg";

const videogames = [
  {
    title: "Portal 2",
    year: 2011,
    developer: "Valve",
    genre: "Puzzle/Platform",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/620/header.jpg",
  },
  {
    title: "Half‑Life 2",
    year: 2004,
    developer: "Valve",
    genre: "First-Person Shooter",
  },
  {
    title: "Counter‑Strike: Global Offensive",
    year: 2012,
    developer: "Valve / Hidden Path Entertainment",
    genre: "First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg",
  },
  {
    title: "Dota 2",
    year: 2013,
    developer: "Valve",
    genre: "MOBA",
    
  },
  {
    title: "Team Fortress 2",
    year: 2007,
    developer: "Valve",
    genre: "Multiplayer Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
  },
  {
    title: "Left 4 Dead 2",
    year: 2009,
    developer: "Valve",
    genre: "Cooperative Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg",
  },
  {
    title: "Grand Theft Auto V",
    year: 2015,
    developer: "Rockstar North",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    year: 2015,
    developer: "CD Projekt Red",
    genre: "RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg",
  },
  {
    title: "Cyberpunk 2077",
    year: 2020,
    developer: "CD Projekt Red",
    genre: "RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    year: 2019,
    developer: "Rockstar Games",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/1174180/header.jpg",
  },
  {
    title: "Bioshock Infinite",
    year: 2013,
    developer: "Irrational Games",
    genre: "Action/First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/8870/header.jpg",
  },
  {
    title: "Fallout 4",
    year: 2015,
    developer: "Bethesda Game Studios",
    genre: "RPG/Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg",
  },
  {
    title: "Stardew Valley",
    year: 2016,
    developer: "ConcernedApe",
    genre: "Simulation/RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/413150/header.jpg",
  },
  {
    title: "Hades",
    year: 2020,
    developer: "Supergiant Games",
    genre: "Roguelike",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/1145360/header.jpg",
  },
  {
    title: "Celeste",
    year: 2018,
    developer: "Matt Makes Games",
    genre: "Platformer",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/504230/header.jpg",
  },
  {
    title: "Dark Souls III",
    year: 2016,
    developer: "FromSoftware",
    genre: "Action RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg",
  },
  {
    title: "Sekiro: Shadows Die Twice",
    year: 2019,
    developer: "FromSoftware",
    genre: "Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/814380/header.jpg",
  },
  {
    title: "Resident Evil 2 (Remake)",
    year: 2019,
    developer: "Capcom",
    genre: "Survival Horror",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/883710/header.jpg",
  },
  {
    title: "DOOM Eternal",
    year: 2020,
    developer: "id Software",
    genre: "First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/782330/header.jpg",
  },
  {
    title: "Control",
    year: 2019,
    developer: "Remedy Entertainment",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/870780/header.jpg",
  },
  {
    title: "Death Stranding",
    year: 2020,
    developer: "Kojima Productions",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/1190460/header.jpg",
  },
  {
    title: "Mortal Kombat 11",
    year: 2019,
    developer: "NetherRealm Studios",
    genre: "Fighting",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/976310/header.jpg",
  },
  {
    title: "Sid Meier's Civilization VI",
    year: 2016,
    developer: "Firaxis Games",
    genre: "Strategy",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/289070/header.jpg",
  },
  {
    title: "Rocket League",
    year: 2015,
    developer: "Psyonix",
    genre: "Sports/Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/252950/header.jpg",
  },
  {
    title: "Borderlands 2",
    year: 2012,
    developer: "Gearbox Software",
    genre: "Action RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/49520/header.jpg",
  },
  {
    title: "Fallout: New Vegas",
    year: 2010,
    developer: "Obsidian Entertainment",
    genre: "RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/22380/header.jpg",
  },
  {
    title: "Portal",
    year: 2007,
    developer: "Valve",
    genre: "Puzzle",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/400/header.jpg",
  },
  {
    title: "Counter‑Strike",
    year: 1999,
    developer: "Valve",
    genre: "First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/10/header.jpg",
  },
  {
    title: "Half‑Life",
    year: 1998,
    developer: "Valve",
    genre: "First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/70/header.jpg",
  },
  {
    title: "Half‑Life: Alyx",
    year: 2020,
    developer: "Valve",
    genre: "VR/Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/546560/header.jpg",
  },
  {
    title: "Dishonored 2",
    year: 2016,
    developer: "Arkane Studios",
    genre: "Action/Stealth",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/403640/header.jpg",
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    year: 2011,
    developer: "Bethesda Game Studios",
    genre: "RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/72850/header.jpg",
  },
  {
    title: "Deus Ex: Human Revolution",
    year: 2011,
    developer: "Eidos Montreal",
    genre: "Action/RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/238090/header.jpg",
  },
  {
    title: "Mass Effect 2",
    year: 2010,
    developer: "BioWare",
    genre: "Action RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/21000/header.jpg",
  },
  {
    title: "BioShock",
    year: 2007,
    developer: "2K Marin",
    genre: "First-Person Shooter",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/7670/header.jpg",
  },
  {
    title: "Metal Gear Solid V: The Phantom Pain",
    year: 2015,
    developer: "Kojima Productions",
    genre: "Stealth/Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/287700/header.jpg",
  },
  {
    title: "Grand Theft Auto: San Andreas",
    year: 2005,
    developer: "Rockstar Games",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/12110/header.jpg",
  },
  {
    title: "The Binding of Isaac: Rebirth",
    year: 2014,
    developer: "Nicalis",
    genre: "Roguelike",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/250900/header.jpg",
  },
  {
    title: "Terraria",
    year: 2011,
    developer: "Re-Logic",
    genre: "Sandbox",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/105600/header.jpg",
  },
  {
    title: "Hollow Knight",
    year: 2017,
    developer: "Team Cherry",
    genre: "Metroidvania",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/367520/header.jpg",
  },
  {
    title: "Subnautica",
    year: 2018,
    developer: "Unknown Worlds Entertainment",
    genre: "Survival",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/264710/header.jpg",
  },
  {
    title: "No Man's Sky",
    year: 2016,
    developer: "Hello Games",
    genre: "Exploration/Survival",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/275850/header.jpg",
  },
  {
    title: "Farming Simulator 19",
    year: 2018,
    developer: "Giants Software",
    genre: "Simulation",
    cover:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/787860/header.jpg?t=1674664652",
  },
  {
    title: "Cities: Skylines",
    year: 2015,
    developer: "Colossal Order",
    genre: "Simulation/Strategy",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/255710/header.jpg",
  },
  {
    title: "Watch Dogs 2",
    year: 2016,
    developer: "Ubisoft",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/998160/header.jpg",
  },
  {
    title: "Hitman 3",
    year: 2021,
    developer: "IO Interactive",
    genre: "Stealth/Action",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/990080/header.jpg",
  },
  {
    title: "Grand Theft Auto IV",
    year: 2008,
    developer: "Rockstar Games",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/12210/header.jpg",
  },
  {
    title: "Mirror's Edge Catalyst",
    year: 2016,
    developer: "DICE",
    genre: "Action/Adventure",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/233450/header.jpg",
  },
  {
    title: "DARK SOULS: REMASTERED",
    year: 2018,
    developer: "FromSoftware",
    genre: "Action RPG",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg",
  },
  {
    title: "Cuphead",
    year: 2017,
    developer: "Studio MDHR",
    genre: "Run and Gun/Platformer",
    cover: "https://steamcdn-a.akamaihd.net/steam/apps/268910/header.jpg",
  },
];

const header = () => {
  const container = document.querySelector("header");
  container.innerHTML = `
  <img src="${logo}" alt="Steam logo"/>
  <button id="btnOrder">Order</button>
  `;
};

const main = () => {
  const container = document.querySelector("main");
  container.innerHTML = "";
  for (const videogame of videogames) {
    const article = document.createElement("article");
    article.innerHTML = `
    <img src="${videogame.cover ? videogame.cover : placeholder}" alt="${videogame.title} cover"/>
    <h2>${videogame.title}</h2>
    <h3 class="${videogame.developer}">${videogame.developer} - ${videogame.year}</h3>
    <p>${videogame.genre}</p>
    `;
    container.appendChild(article);
  }
};

const footer = () => {
  const container = document.querySelector("footer");
  const date = new Date();
  const year = date.getFullYear();
  container.innerHTML = `
  <p>Copyright ${year} - Steam</p>
  `;
};
//Vamos a cargar todas nuestras funciones al completar la carga del DOM
window.addEventListener("DOMContentLoaded", () => {
  header();
  main();
  main();
  footer();


  document.querySelector("#btnOrder").addEventListener("click", () => {
    videogames.sort((a, b) => a.title.localeCompare(b.title));
    main();
  })
});
