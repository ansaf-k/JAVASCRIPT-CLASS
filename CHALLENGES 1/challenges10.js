const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard', 'Martinez', 'Alaba',
    'Davies', 'Kimmich', 'Goretzka', 'Coman',
    'Muller',
    'Gnarby', 'Lewandowski',
    ], [
    'Burki',
    'Schulz', 'Hummels', 'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

    const players1 = [...game.players[0]]
    const players2 = [...game.players[1]]
    // console.log(players1);
    // console.log(players2);

    const gk = players1[0]
    const fieldPlayers = players1.slice(1);

    const allPlayers = [...players1,...players2]

    const players1Final = [...players1,"Thiago","Coutinho","Perisic"]

    // console.log(players1Final);

    const team1 = game.odds.team1
    const draw = game.odds.x
    const team2 = game.odds.team2

    const MinOdd = Math.min(team1,team2,draw)
    console.log(MinOdd);
    console.log(`The team most chance to win is ${MinOdd === team1 ? game.team1 : game.team2}`);

    