const genres = {
  action: { name: "Action", id: 0 },
  fighting: { name: "Fighting", id: 1 },
  firstPersonShooter: { name: "First-Person Shooter", id: 2 },
  pinball: { name: "Pinball", id: 3 },
  platformer: { name: "Platformer", id: 4 },
  pointAndClickAdventure: { name: "Point & Click Adventure", id: 5 },
  puzzle: { name: "Puzzle", id: 6 },
  racing: { name: "Racing", id: 7 },
  rolePlayingGame: { name: "Role-Playing Game", id: 8 },
  scrollingShooter: { name: "Scrolling Shooter", id: 9 },
  simulation: { name: "Simulation", id: 10 },
  sports: { name: "Sports", id: 11 },
  stealth: { name: "Stealth", id: 12 },
  strategy: { name: "Strategy", id: 13 },
  thirdPersonShooter: { name: "Third-Person Shooter", id: 14 }
}

const platforms = {
  arcade: { name: "Arcade", id: 0 },
  dos: { name: "DOS", id: 1 },
  win3x: { name: "Windows 3.x", id: 2 },
  win95: { name: "Windows 95", id: 3 },
  win98: { name: "Windows 98", id: 4 },
  winxp: { name: "Windows XP", id: 5 },
  ps1: { name: "Playstation 1", id: 6 },
  ps2: { name: "Playstation 2", id: 7 }
}

const games = [
  { names: ["3D Ultra Minigolf"], genre: genres.sports, platforms: [platforms.win95], release: 1997 }, // dev = Dynamix, pub = Sierra On-Line 
  { names: ["3D Ultra Pinball"], genre: genres.pinball, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Dynamix, pub = Sierra On-Line 
  { names: ["Action Soccer"], genre: genres.sports, platforms: [platforms.dos, platforms.win3x], release: 1995 }, // dev = Ludi Media, pub = Ubi Soft
  { names: ["Actua Soccer"], genre: genres.sports, platforms: [platforms.dos, platforms.win95], release: 1995 }, // dev = Gremlin Interactive, pub = Greenwood Entertainment
  { names: ["Aladdin"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Virgin Games, pub = Sega
  { names: ["Anno 1602: Creation of a New World"], genre: genres.strategy, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Max Design, pub = Sunflowers Interactive, GT Interactive
  { names: ["Arcade America"], genre: genres.platformer, platforms: [platforms.win95], release: 1996 }, // dev = 7th Level, pub = 7th Level
  { names: ["Battle Chess"], genre: genres.puzzle, platforms: [platforms.dos, platforms.win3x], release: 1989 }, // dev = Interplay Productions, pub = Interplay Productions
  { names: ["Bernie"], genre: genres.puzzle, platforms: [platforms.dos], release: 1995 }, // dev = Siemens, pub = MindLink Software
  { names: ["Charly the Clown"], genre: genres.platformer, platforms: [platforms.dos], release: 1996 }, // dev = White Magic, pub = Schenk & Horn
  { names: ["Comix Zone"], genre: genres.platformer, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Sega, pub = Sega
  { names: ["Commander Keen in Goodbye Galaxy"], genre: genres.platformer, platforms: [platforms.dos, platforms.win3x], release: 1991 }, // dev = id Software, pub = Apogee Software
  { names: ["Commander Keen in Keen Dreams"], genre: genres.platformer, platforms: [platforms.dos, platforms.win3x], release: 1991 }, // dev = id Software, pub = Softdisk Publishing
  { names: ["Commandos 2: Men of Courage"], genre: genres.stealth, platforms: [platforms.win98, platforms.winxp, platforms.ps2], release: 2001 }, // dev = Pyro Studios, pub = Eidos Interactive
  { names: ["Conflict: Desert Storm"], genre: genres.thirdPersonShooter, platforms: [platforms.win98, platforms.ps2], release: 2002 }, // dev = Pivotal Games, pub = Gotham Games, SCi Games
  { names: ["Cool Spot"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Virgin Games, pub = Virgin Games
  { names: ["Crazy Gravity"], genre: genres.action, platforms: [platforms.win95], release: 1996 }, // dev = XLM Software, pub = XLM Software
  { names: ["Critical Mass"], genre: genres.strategy, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Sean O'Connor, pub = Sean O'Connor
  { names: ["Day of the Tentacle"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos, platforms.win3x], release: 1993 }, // dev = LucasArts, pub = LucasArts
  { names: ["Death Rally"], genre: genres.racing, platforms: [platforms.dos], release: 1996 }, // dev = Remedy Entertainment, pub = Apogee Software
  { names: ["Eight Ball Deluxe"], genre: genres.pinball, platforms: [platforms.dos], release: 1993 }, // dev = P.A.S. Systems, pub = Amtex
  { names: ["Epic Pinball"], genre: genres.pinball, platforms: [platforms.dos], release: 1993 }, // dev = Digital Extremes, pub = Epic MegaGames
  { names: ["Extreme Assault"], genre: genres.simulation, platforms: [platforms.dos], release: 1997 }, // dev = Blue Byte, pub = Blue Byte
  { names: ["Fire Fight"], genre: genres.action, platforms: [platforms.win95], release: 1996 }, // dev = Chaos Works, pub = Electronic Arts
  { names: ["Galactix"], genre: genres.scrollingShooter, platforms: [platforms.dos], release: 1992 }, // dev = Cygnus Multimedia Productions, pub = Cygnus Multimedia Productions
  { names: ["GateWorld"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Homebrew Software, pub = Homebrew Software
  { names: ["Glider 4.0"], genre: genres.action, platforms: [platforms.win3x], release: 1994 }, // dev = Casady & Greene, pub = Casady & Greene
  { names: ["Gorillas"], genre: genres.puzzle, platforms: [platforms.dos], release: 1991 }, // dev = IBM, pub = IBM
  { names: ["Hugo"], genre: genres.action, platforms: [platforms.dos], release: 1992 }, // dev = Silverrock Productions, pub = Silverrock Productions
  { names: ["Ignition", "Bleifuss Fun"], genre: genres.racing, platforms: [platforms.dos, platforms.win95], release: 1996 }, // dev = Unique Development Studios, pub = Virgin Interactive
  { names: ["Indiana Jones and the Fate of Atlantis"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1992 }, // dev = LucasArts, pub = LucasArts
  { names: ["Jetpack"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Adept Software, pub = Software Creations
  { names: ["Jill of the Jungle"], genre: genres.platformer, platforms: [platforms.dos], release: 1992 }, // dev = Epic MegaGames, pub = Epic MegaGames
  { names: ["Major Stryker"], genre: genres.scrollingShooter, platforms: [platforms.dos], release: 1993 }, // dev = Apogee, pub = Apogee
  { names: ["Maniac Mansion"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1987 }, // dev = Lucasfilm Games, pub = Lucasfilm Games
  { names: ["Math Blaster Plus!"], genre: genres.puzzle, platforms: [platforms.dos], release: 1987 }, // dev = Davidson & Associates, pub = Davidson & Associates
  { names: ["MDK"], genre: genres.thirdPersonShooter, platforms: [platforms.dos, platforms.win95], release: 1997 }, // dev = Shiny Entertainment, pub = Playmates Interactive, Shiny Entertainment
  { names: ["Metal Slug"], genre: genres.platformer, platforms: [platforms.arcade], release: 1996 }, // dev = Nazca Corporation, pub: SNK
  { names: ["Microsoft Flight Simulator for Windows 95"], genre: genres.simulation, platforms: [platforms.win95], release: 1996 }, // dev = Microsoft, pub = Microsoft
  { names: ["Micro Machines"], genre: genres.racing, platforms: [platforms.dos], release: 1994 }, // dev = Codemasters, pub = Codemasters
  { names: ["Monster Truck Madness"], genre: genres.racing, platforms: [platforms.win95], release: 1996 }, // dev = Terminal Reality, pub = Microsoft
  { names: ["Off to Europe"], genre: genres.action, platforms: [platforms.dos], release: 1992 }, // dev = Foreign Affairs Office, Bonn, Germany, pub = Foreign Affairs Office, Bonn, Germany
  { names: ["Operation Flashpoint: Cold War Crisis"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2001 }, // dev = Bohemia Interactive Studios, pub = Codemasters
  { names: ["Physicus: Save the World with Science!", "Physikus"], genre: genres.puzzle, platforms: [platforms.win98], release: 1999 }, // dev = HEUREKA-Klett Softwareverlag, pub = Ruske & Pühretmaier Edutainment
  { names: ["Pipe Dream"], genre: genres.puzzle, platforms: [platforms.win3x], release: 1991 }, // dev = The Assembly Line, pub = Microsoft
  { names: ["Prince of Persia"], genre: genres.platformer, platforms: [platforms.dos], release: 1989 }, // dev = Brøderbund, pub = Brøderbund
  { names: ["Professor Brösl"], genre: genres.pointAndClickAdventure, platforms: [platforms.winxp], release: 2002 }, // dev = pibyte, pub = pibyte
  { names: ["Red Baron"], genre: genres.simulation, platforms: [platforms.dos], release: 1990 }, // dev = Dynamic, pub = Sierra On-Line
  { names: ["Shooting Gallery"], genre: genres.action, platforms: [platforms.dos], release: 1990 }, // dev = Arcanum Computing, pub = Personal Companium Software
  { names: ["SimCity"], genre: genres.strategy, platforms: [platforms.dos], release: 1989 }, // dev = Maxis, pub = Maxis
  { names: ["Space Cadet"], genre: genres.pinball, platforms: [platforms.win95], release: 1995 }, // dev = Microsoft, pub = Microsoft
  { names: ["SSX Tricky"], genre: genres.racing, platforms: [platforms.ps2], release: 2001 }, // dev = Electronic Arts, pub = Electronic Arts
  { names: ["Starfire"], genre: genres.scrollingShooter, platforms: [platforms.dos], release: 1992 }, // dev = Silver Lightning Software, pub = Silver Lightning Software
  { names: ["Star Trek: 25th Anniversary"], genre: genres.simulation, platforms: [platforms.dos], release: 1992 }, // dev = Interplay Productions, pub = Interplay Productions
  { names: ["Star Wars Episode 1: Racer"], genre: genres.racing, platforms: [platforms.win98], release: 1999 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars Episode 1: The Phantom Menace"], genre: genres.thirdPersonShooter, platforms: [platforms.win98], release: 1999 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars Jedi Knight II: Jedi Outcast"], genre: genres.thirdPersonShooter, platforms: [platforms.win98], release: 2002 }, // dev = Raven Software, pub = LucasArts
  { names: ["Star Wars: Rebel Assault"], genre: genres.action, platforms: [platforms.dos], release: 1993 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars: Rebel Assault II: The Hidden Empire"], genre: genres.action, platforms: [platforms.dos, platforms.win95], release: 1995 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars: Rebellion", "Star Wars: Supremacy"], genre: genres.strategy, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Coolhand Interactive, pub = LucasArts
  { names: ["Star Wars: Rogue Squadron", "Star Wars: Rogue Squadron 3D"], genre: genres.simulation, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Factor 5, pub = LucasArts
  { names: ["Star Wars: Shadows of the Empire"], genre: genres.thirdPersonShooter, platforms: [platforms.win95], release: 1997 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars: X-Wing"], genre: genres.simulation, platforms: [platforms.dos], release: 1993 }, // dev = LucasArts, pub = LucasArts
  { names: ["Star Wars: X-Wing vs TIE Fighter"], genre: genres.simulation, platforms: [platforms.win95], release: 1997 }, // dev = Totally Games, pub = LucasArts
  { names: ["Star Wars: Yoda Stories"], genre: genres.rolePlayingGame, platforms: [platforms.win95], release: 1997 }, // dev = LucasArts, pub = LucasArts
  { names: ["Submarine Titans"], genre: genres.strategy, platforms: [platforms.win98], release: 2000 }, // dev = Ellipse Studios, pub = Strategy First
  { names: ["Sudden Strike"], genre: genres.strategy, platforms: [platforms.win98], release: 2000 }, // dev = Fireglow Games, pub = Cdv Software Entertainment, Strategy First
  { names: ["Super Mario Bros", "Mario & Luigi"], genre: genres.platformer, platforms: [platforms.dos], release: 1994 }, // dev = Wiering Software, pub = Chaos Software
  { names: ["Tekken 3"], genre: genres.fighting, platforms: [platforms.ps1], release: 1998 }, // dev = Namco, pub = Namco, SCE
  { names: ["Terminal Velocity"], genre: genres.simulation, platforms: [platforms.dos, platforms.win95], release: 1995 }, // dev = Terminal Reality, 3D Realms
  { names: ["The Games: Winter Challenge"], genre: genres.sports, platforms: [platforms.dos], release: 1991 }, // dev = MindSpan, pub = Accolade
  { names: ["The Incredible Machine", "Pararancho"], genre: genres.puzzle, platforms: [platforms.dos, platforms.win3x], release: 1993 }, // dev = Jeff Tunnell Productions, pub = Sierra On-Line
  { names: ["The Lion King"], genre: genres.platformer, platforms: [platforms.win3x], release: 1994 }, // dev = Westwood Studios, pub = Virgin Interactive
  { names: ["The Settlers"], genre: genres.strategy, platforms: [platforms.dos], release: 1994 }, // dev = Blue Byte, pub = Blue Byte
  { names: ["Thief: The Dark Project"], genre: genres.stealth, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Looking Glass Studios, pub = Eidos Interactive
  { names: ["Tintin in Tibet"], genre: genres.platformer, platforms: [platforms.dos, platforms.win95], release: 1996 }, // dev = Infogrames Multimedia, pub = Infogrames Multimedia
  { names: ["Tristan"], genre: genres.pinball, platforms: [platforms.dos], release: 1991 }, // dev = LittleWing, pub = Amtex
  { names: ["TZ-Minigolf"], genre: genres.sports, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // ??? Jürgen Schröder? Thomas Zeh? 1995? Win3x?
  { names: ["Vinyl Goddess from Mars"], genre: genres.platformer, platforms: [platforms.dos], release: 1995 }, // dev = Six Pound Sledge Studios, pub = Union Logic Software Publishing
  { names: ["Wario Land: Super Mario Land 3"], genre: genres.platformer, platforms: [platforms.dos], release: 1994 }, // dev = Nintendo, pub = Nintendo
  { names: ["Wolfenstein 3D"], genre: genres.firstPersonShooter, platforms: [platforms.dos], release: 1992 }, // dev = id Software, pub = Apogee Software
  { names: ["Wolfpack"], genre: genres.simulation, platforms: [platforms.dos], release: 1990 }, // dev = NovaLogic, pub = Brøderbund
  { names: ["Worms"], genre: genres.strategy, platforms: [platforms.dos], release: 1995 }, // dev = Team17, pub = Ocean Software
  { names: ["Zak McKracken and the Alien Mindbenders"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1988 } // dev = LucasFilm Games, pub = LucasFilm Games
];