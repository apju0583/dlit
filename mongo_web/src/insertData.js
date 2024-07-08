const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://gangmin8379:dovmf3203@dlit.o2idzyn.mongodb.net/?retryWrites=true&w=majority&appName=dlit';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  genre: String,
  review: String,
  details: String,
  imageUrl: String,
  releaseDate: String,
  developer: String,
  web: String
});

const Game = mongoose.model('Game', gameSchema);

const games = [
  {
    id: 1,
    name: 'Phasmophobia',
    genre: 'Adventure, Horror, 4-Collaboration',
    review: 'Horrible, Dont be Alone, Communication is the most important thing',
    details: 'Collect the evidence, stay alive and find the ghost',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/capsule_616x353.jpg?t=1702309974',
    releaseDate: '2020-09-19',
    developer: 'Kinetic Games',
    web: 'https://www.kineticgames.co.uk/'
  },
  {
    id: 2,
    name: 'Lethal Company',
    genre: 'FPS, Horror, Comedy, 4-Collaboration',
    review: 'Pleasant Planet Exploration, Comedy Horror',
    details: 'Explore the planet and get some waste, if you dont meet your quota you will be fired',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_616x353.jpg?t=1700231592',
    releaseDate: '2023-10-24',
    developer: 'Zeekerss',
    web: 'https://store.steampowered.com/app/1966720/Lethal_Company/'
  },
  {
    id: 3,
    name: 'Sanabi',
    genre: 'Cyberpunk, Action Adventure, Platform, Single',
    review: 'Future Chosun, Korean Cyberpunk',
    details: 'To uncover the secrets hidden in the city, and to find out the Sanabi and avenge it',
    imageUrl: 'https://i.namu.wiki/i/sEEdrKpFtMnm8yJO5LSeUOnM1SgDBu7f5Rdf2tQuQl3OA8vKtbNOYEptCkT-KK42IubMJG-Em5b0igVQK8S69A.webp',
    releaseDate: '2023-11-09',
    developer: 'WonderPortion',
    web: 'https://x.com/WonderPotion'
  },
  {
    id: 4,
    name: 'Buckshot Roulette',
    genre: 'Horror, Puzzle, Single',
    review: 'Shuddering Russian Roulette',
    details: 'Russian roulette to compete with dealers using multiple items',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2835570/capsule_616x353.jpg?t=1718882765',
    releaseDate: '2024-04-05',
    developer: 'Mike Klubnika',
    web: 'https://x.com/mikeklubnika'
  },
  {
    id: 5,
    name: 'Content Warning',
    genre: 'Horror, Comedy, 4-Collaboration',
    review: 'Filming an interesting video in fear',
    details: 'Exploring a dark underground abandoned factory, taking videos and earning a lot of views',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2881650/capsule_616x353.jpg?t=1720091024',
    releaseDate: '2024-04-02',
    developer: 'Landfall Games',
    web: 'https://store.steampowered.com/app/2881650/Content_Warning/'
  },
  {
    id: 6,
    name: 'Hell Divers 2',
    genre: 'TPS, Co-op, 4-Collaboration',
    review: 'Kill the enemy and protect the planet',
    details: 'Spreading freedom and democracy through force and liberating the planets',
    imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202309/2116/3f1bd2f20b06047e0f029d44c909a2a58b45e7fc6ae1dd0f.jpg',
    releaseDate: '2024-02-08',
    developer: 'Arrow Head Game Studio',
    web: 'https://x.com/helldivers2'
  },
  {
    id: 7,
    name: 'Dungreed',
    genre: 'Rogue-lite, Platformer, Action',
    review: 'Enter the dungeon and beat the enemies with your own style',
    details: 'Enter the dungeon, get weapons, improve your capabilities',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753420/header.jpg?t=1653456557',
    releaseDate: '2018-02-15',
    developer: 'Team HORAY',
    web: 'https://x.com/TeamHoray'
  }
];

Game.insertMany(games)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data', err);
    mongoose.connection.close();
  });