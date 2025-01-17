/*   STEP 1   */
export const leagueID = "916856978272690176"; // your league ID
export const leagueName = "DE-GEN Z DYNASTY"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>  Welcome to the heart of fantasy football thrill: the Degen-z Fantasy Football League! Established in 2022, we are the ultimate hub where football fandom meets the adrenaline rush of gambling on fantasy football.</p>
  <p>  Our crew isn't your ordinary lineup. We're a group of passionate football enthusiasts who share a common love for the game, spiced up with a flair for the daring. From die-hard fans to strategic masterminds, our team embodies the spirit of taking calculated risks and reaping the rewards.</p>
  <p>  Degen-z Fantasy Football League is where calculated strategy meets pure football excitement. We focus on delivering in-depth player analysis, insightful matchup breakdowns, and shrewd trade scenarios that cater to the daring fantasy manager within you.</p>
  <p>  At Degen-z, our mission is clear: to fuel your passion for football while enhancing your strategic prowess. We're here to provide you with the tools to navigate the world of fantasy football gambling with savvy and style, making each season a victory lap of its own.</p>
  <p>  Dive headfirst into the exhilarating blend of football fanaticism and fantasy gambling at Degen-z Fantasy Football League. Embrace the spirit of calculated risks, unforgettable victories, and heart-pounding moments that remind us why we love this game.</p>
  <p>  Buckle up, because at Degen-z, we're not just building fantasy teams – we're crafting legends on the gridiron of the mind.</p>
  <p>  Welcome to the edge of football fantasy. Welcome to Degen-z.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "731320717962010624",  // Mine     ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "KingDain33(Admin)",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": null, // (optional)
      "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
      "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win and watch you cry.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "731308399656017920",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "ProppaTopShotta",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": null, // (optional)
      "bio": "Who? Me? It wasn't all peaches and cream. Age 14, started gambling with dice for lunch money. Age 19? Became a poker prospect. It was at this time I knew gambling was my calling. Played soccer, baseball and basketball but hated football. Got called into a fantasy football league from a friend, and the rest was history. Football is, and will forever be underrated. This is my story. This is my Destiny.",
      "photo": "/managers/dan.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 294, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Get in where you fit in. Passion means everything.",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "731357913385435136",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "d0ndookz",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": null, // (optional)
      "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
      "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win and watch you cry.",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        "managerID": "731522954181087232",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "10potatoes",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 681, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 1, // 1 - 10
        "preferredContact": "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "734066003402719232",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Ramhouse",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 681, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "738825538227081216",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Defran17",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 8, // 1 - 10
        "preferredContact": "Whatsapp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "740391159553232896",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "BIGZEE84",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "tb", // (optional) favorite NF, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASEL team
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 681, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "859265446468235264",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Alevv",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "860319595670675456",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Cage71",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 8, // 1 - 10
        "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "864925495488286720",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Fizz11",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "866372824162504704",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "StatesTheBest",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 4, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "869709371092021248",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Fizzy55",
        "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": null, // (optional)
        "bio": "I'm just the best of the best, winning chips is what I do. Your going to get sick of see my picture in the winner's bracket. Peace, I'm out",
        "photo": "/managers/2022.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": null, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/2022.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win and watch you cry.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
    
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
