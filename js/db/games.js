const games = [
  { names: ["3D Pinball for Windows – Space Cadet"], genre: genres.pinball, platforms: [platforms.win95, platforms.win98, platforms.winxp], release: 1995 }, // dev = Microsoft, pub = Microsoft 
  { names: ["3D Ultra Minigolf"], genre: genres.sports, platforms: [platforms.win95], release: 1997 }, // dev = Dynamix, pub = Sierra On-Line 
  { names: ["3D Ultra Pinball"], genre: genres.pinball, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Dynamix, pub = Sierra On-Line 
  { names: ["5 Days a Stranger"], genre: genres.pointAndClickAdventure, platforms: [platforms.winxp], release: 2003 }, // dev = Yahtzee, pub = Yahtzee 
  { names: ["7 Days a Skeptic"], genre: genres.pointAndClickAdventure, platforms: [platforms.winxp], release: 2004 }, // dev = Yahtzee, pub = Yahtzee 
  { names: ["Aces of the Deep"], genre: genres.simulation, platforms: [platforms.dos], release: 1994 }, // dev = Dynamix, pub = Sierra On-Line
  { names: ["Action Soccer"], genre: genres.sports, platforms: [platforms.dos, platforms.win3x], release: 1995 }, // dev = Ludi Media, pub = Ubi Soft
  { names: ["Actua Soccer"], genre: genres.sports, platforms: [platforms.dos, platforms.win95], release: 1995 }, // dev = Gremlin Interactive, pub = Greenwood Entertainment
  { names: ["Adventures in the Galaxy of Fantabulous Wonderment"], genre: genres.pointAndClickAdventure, platforms: [platforms.winxp], release: 2005 }, // dev = Yahtzee, pub = Yahtzee
  { names: ["Age of Empires II: The Age of Kings"], genre: genres.strategy, platforms: [platforms.win98], release: 1999 }, // dev = Ensemble Studios, pub = Microsoft
  { names: ["Aladdin"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Virgin Games, pub = Sega
  { names: ["America's Army"], genre: genres.firstPersonShooter, platforms: [platforms.win98, platforms.winxp], release: 2002 }, // dev = US Army, pub = US Army
  { names: ["Anno 1602: Creation of a New World"], genre: genres.strategy, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Max Design, pub = Sunflowers Interactive, GT Interactive
  { names: ["Arcade America"], genre: genres.platformer, platforms: [platforms.win95], release: 1996 }, // dev = 7th Level, pub = 7th Level
  { names: ["Archon Ultra"], genre: genres.strategy, platforms: [platforms.dos], release: 1994 }, // dev = Free Fall Associates, pub = Strategic Simulations
  { names: ["Bang! Bang!"], genre: genres.puzzle, platforms: [platforms.win3x], release: 1990 }, // dev = David B. Lutton II, pub = David B. Lutton II
  { names: ["Battle Bugs"], genre: genres.strategy, platforms: [platforms.dos, platforms.ps1], release: 1994 }, // dev = Epyx, pub = Sierra On-Line
  { names: ["Battle Chess"], genre: genres.strategy, platforms: [platforms.dos, platforms.win3x], release: 1989 }, // dev = Interplay Productions, pub = Interplay Productions
  { names: ["Battlefield 1942"], genre: genres.firstPersonShooter, platforms: [platforms.win98, platforms.winxp], release: 2002 }, // dev = Digital Illusions, pub = Electronic Arts
  { names: ["Bernie"], genre: genres.puzzle, platforms: [platforms.dos], release: 1995 }, // dev = Siemens, pub = MindLink Software
  { names: ["Castlevania: Aria of Sorrow"], genre: genres.platformer, platforms: [platforms.gba], release: 2003 }, // dev = Konami, pub = Konami
  { names: ["Charly the Clown"], genre: genres.platformer, platforms: [platforms.dos], release: 1996 }, // dev = White Magic, pub = Schenk & Horn
  { names: ["Comix Zone"], genre: genres.platformer, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Sega, pub = Sega
  { names: ["Commander Keen in Goodbye Galaxy"], genre: genres.platformer, platforms: [platforms.dos, platforms.win3x], release: 1991 }, // dev = id Software, pub = Apogee Software
  { names: ["Commander Keen in Keen Dreams"], genre: genres.platformer, platforms: [platforms.dos, platforms.win3x], release: 1991 }, // dev = id Software, pub = Softdisk Publishing
  { names: ["Commandos 2: Men of Courage"], genre: genres.stealth, platforms: [platforms.win98, platforms.winxp, platforms.ps2], release: 2001 }, // dev = Pyro Studios, pub = Eidos Interactive
  { names: ["Command & Conquer: Renegade"], genre: genres.firstPersonShooter, platforms: [platforms.win98, platforms.winxp], release: 2002 }, // dev = Westwood Studios, pub = Electronic Arts
  { names: ["Command & Conquer: Tiberian Dawn"], genre: genres.strategy, platforms: [platforms.dos, platforms.win95, platforms.ps1], release: 1995 }, // dev = Westwood Studios, pub = Virgin Interactive
  { names: ["Command & Conquer: Tiberian Sun"], genre: genres.strategy, platforms: [platforms.win98], release: 1999 }, // dev = Westwood Studios, pub = Electronic Arts
  { names: ["Command & Conquer: Red Alert"], genre: genres.strategy, platforms: [platforms.dos, platforms.win95, platforms.ps1], release: 1996 }, // dev = Westwood Studios, pub = Virgin Interactive
  { names: ["Command & Conquer: Red Alert 2"], genre: genres.strategy, platforms: [platforms.win98, platforms.winxp], release: 2000 }, // dev = Westwood Studios, pub = Electronic Arts
  { names: ["Conflict: Desert Storm"], genre: genres.thirdPersonShooter, platforms: [platforms.win98, platforms.ps2], release: 2002 }, // dev = Pivotal Games, pub = Gotham Games, SCi Games
  { names: ["Congo: Descent into Zinj"], genre: genres.puzzle, platforms: [platforms.win3x], release: 1995 }, // dev = Illumina Productions, pub = Viacom New Media
  { names: ["Cool Spot"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Virgin Games, pub = Virgin Games
  { names: ["Crazy Gravity"], genre: genres.action, platforms: [platforms.win95], release: 1996 }, // dev = XLM Software, pub = XLM Software
  { names: ["Critical Mass"], genre: genres.strategy, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // dev = Sean O'Connor, pub = Sean O'Connor
  { names: ["Counter-Strike"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2000 }, // dev = Valve, pub = Sierra On-Line
  { names: ["Day of the Tentacle"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos, platforms.win3x], release: 1993 }, // dev = LucasArts, pub = LucasArts
  { names: ["Death Rally"], genre: genres.racing, platforms: [platforms.dos], release: 1996 }, // dev = Remedy Entertainment, pub = Apogee Software
  { names: ["Deathmatch Classic"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2001 }, // dev = Valve, pub = Sierra On-Line
  { names: ["Descent"], genre: genres.simulation, platforms: [platforms.dos, platforms.ps1], release: 1995 }, // dev = Parallax Software, pub = Interplay Productions
  { names: ["Descent II"], genre: genres.simulation, platforms: [platforms.dos, platforms.ps1], release: 1996 }, // dev = Parallax Software, pub = Interplay Productions
  { names: ["Descent 3"], genre: genres.simulation, platforms: [platforms.win98], release: 1999 }, // dev = Outrage Entertainment, pub = Interplay Productions
  { names: ["Desperados: Wanted Dead or Alive"], genre: genres.stealth, platforms: [platforms.win98], release: 2001 }, // dev = Spellbound Entertainment, pub = Infogrames Multimedia
  { names: ["Die Original Moorhuhnjagd"], genre: genres.action, platforms: [platforms.win98], release: 1999 }, // dev = Witan Entertainment BV, pub = Ravensburger Interactive Media GmbH
  { names: ["Eight Ball Deluxe"], genre: genres.pinball, platforms: [platforms.dos], release: 1993 }, // dev = P.A.S. Systems, pub = Amtex
  { names: ["Epic Pinball"], genre: genres.pinball, platforms: [platforms.dos], release: 1993 }, // dev = Digital Extremes, pub = Epic MegaGames
  { names: ["Excitebike"], genre: genres.racing, platforms: [platforms.nes], release: 1985 }, // dev = Nintendo, pub = Nintendo
  { names: ["Extreme Assault"], genre: genres.simulation, platforms: [platforms.dos], release: 1997 }, // dev = Blue Byte, pub = Blue Byte
  { names: ["Fire Fight"], genre: genres.action, platforms: [platforms.win95], release: 1996 }, // dev = Chaos Works, pub = Electronic Arts
  { names: ["Frets on Fire"], genre: genres.music, platforms: [platforms.winxp], release: 2006 }, // dev = Unreal Voodoo, pub = Unreal Voodoo
  { names: ["Galactix"], genre: genres.scrollingShooter, platforms: [platforms.dos], release: 1992 }, // dev = Cygnus Multimedia Productions, pub = Cygnus Multimedia Productions
  { names: ["GateWorld"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Homebrew Software, pub = Homebrew Software
  { names: ["Gish"], genre: genres.platformer, platforms: [platforms.winxp], release: 2004 }, // dev = Cryptic Sea, pub = Chronic Logic
  { names: ["Glider 4.0"], genre: genres.action, platforms: [platforms.win3x], release: 1994 }, // dev = Casady & Greene, pub = Casady & Greene
  { names: ["Gorillas"], genre: genres.puzzle, platforms: [platforms.dos], release: 1991 }, // dev = IBM, pub = IBM
  { names: ["Grand Theft Auto 2"], genre: genres.action, platforms: [platforms.win98, platforms.ps1], release: 1999 }, // dev = DMA Design, pub = Rockstar Games
  { names: ["Grand Theft Auto III"], genre: genres.action, platforms: [platforms.win98, platforms.ps2], release: 2001 }, // dev = DMA Design, pub = Rockstar Games
  { names: ["Grand Theft Auto: Vice City"], genre: genres.action, platforms: [platforms.win98, platforms.ps2], release: 2002 }, // dev = Rockstar North, pub = Rockstar Games
  { names: ["Half-Life"], genre: genres.firstPersonShooter, platforms: [platforms.win98, platforms.ps2], release: 1998 }, // dev = Valve, pub = Sierra On-Line
  { names: ["Half-Life: Blue Shift"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2001 }, // dev = Gearbox Software, pub = Sierra On-Line
  { names: ["Half-Life: Opposing Force"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 1999 }, // dev = Gearbox Software, pub = Sierra On-Line
  { names: ["Hamsterball"], genre: genres.action, platforms: [platforms.winxp], release: 2004 }, // dev = Raptisoft Games, pub = Raptisoft Games
  { names: ["Hellbender"], genre: genres.simulation, platforms: [platforms.win95], release: 1996 }, // dev = Terminal Reality, pub = Microsoft
  { names: ["Hitman: Codename 47"], genre: genres.stealth, platforms: [platforms.win98], release: 2000 }, // dev = IO Interactive, pub = Eidos Interactive
  { names: ["Hitman 2: Silent Assassin"], genre: genres.stealth, platforms: [platforms.win98, platforms.winxp, platforms.ps2], release: 2002 }, // dev = IO Interactive, pub = Eidos Interactive
  { names: ["Hover!"], genre: genres.action, platforms: [platforms.win95], release: 1995 }, // dev = Microsoft, pub = Microsoft
  { names: ["Hugo"], genre: genres.action, platforms: [platforms.dos], release: 1992 }, // dev = Silverrock Productions, pub = Silverrock Productions
  { names: ["Ignition", "Bleifuss Fun"], genre: genres.racing, platforms: [platforms.dos, platforms.win95], release: 1996 }, // dev = Unique Development Studios, pub = Virgin Interactive
  { names: ["Indiana Jones and the Fate of Atlantis"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1992 }, // dev = LucasArts, pub = LucasArts
  { names: ["Jetpack"], genre: genres.platformer, platforms: [platforms.dos], release: 1993 }, // dev = Adept Software, pub = Software Creations
  { names: ["Jill of the Jungle"], genre: genres.platformer, platforms: [platforms.dos], release: 1992 }, // dev = Epic MegaGames, pub = Epic MegaGames
  { names: ["Kung Fu"], genre: genres.action, platforms: [platforms.nes], release: 1985 }, // dev = Nintendo, pub = Nintendo
  { names: ["Lego Island"], genre: genres.action, platforms: [platforms.win95], release: 1997 }, // dev = Mindscape, pub = Mindscape
  { names: ["Lemmings"], genre: genres.puzzle, platforms: [platforms.dos, platforms.snes], release: 1991 }, // dev = DMA Design, pub = Psygnosis
  { names: ["Mafia: The City Of Lost Heaven"], genre: genres.action, platforms: [platforms.win98, platforms.winxp, platforms.ps2], release: 2002 }, // dev = Illusion Softworks, pub = Gathering of Developers
  { names: ["Major Stryker"], genre: genres.scrollingShooter, platforms: [platforms.dos], release: 1993 }, // dev = Apogee, pub = Apogee
  { names: ["Maniac Mansion"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1987 }, // dev = Lucasfilm Games, pub = Lucasfilm Games
  { names: ["Math Blaster Plus!"], genre: genres.puzzle, platforms: [platforms.dos], release: 1987 }, // dev = Davidson & Associates, pub = Davidson & Associates
  { names: ["Max Payne"], genre: genres.thirdPersonShooter, platforms: [platforms.win98, platforms.ps2], release: 2001 }, // dev = Remedy, pub = Gathering of Developers
  { names: ["Max Payne 2: The Fall of Max Payne"], genre: genres.thirdPersonShooter, platforms: [platforms.winxp, platforms.ps2], release: 2003 }, // dev = Remedy, pub = Rockstar Games
  { names: ["MDK"], genre: genres.thirdPersonShooter, platforms: [platforms.dos, platforms.win95], release: 1997 }, // dev = Shiny Entertainment, pub = Playmates Interactive, Shiny Entertainment
  { names: ["MegaRace 2"], genre: genres.racing, platforms: [platforms.dos], release: 1996 }, // dev = Cryo, pub: Mindscape
  { names: ["Metal Slug"], genre: genres.platformer, platforms: [platforms.arcade], release: 1996 }, // dev = Nazca Corporation, pub: SNK
  { names: ["Microsoft Flight Simulator for Windows 95"], genre: genres.simulation, platforms: [platforms.win95], release: 1996 }, // dev = Microsoft, pub = Microsoft
  { names: ["Micro Machines"], genre: genres.racing, platforms: [platforms.dos], release: 1994 }, // dev = Codemasters, pub = Codemasters
  { names: ["Monster Truck Madness"], genre: genres.racing, platforms: [platforms.win95], release: 1996 }, // dev = Terminal Reality, pub = Microsoft
  { names: ["Ninja Gaiden", "Ninja Ryūkenden"], genre: genres.platformer, platforms: [platforms.nes], release: 1988 }, // dev = Tecmo, pub = Tecmo
  { names: ["Off to Europe"], genre: genres.action, platforms: [platforms.dos], release: 1992 }, // dev = Foreign Affairs Office, Bonn, Germany, pub = Foreign Affairs Office, Bonn, Germany
  { names: ["Operation Flashpoint: Cold War Crisis"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2001 }, // dev = Bohemia Interactive Studios, pub = Codemasters
  { names: ["Paperboy 2"], genre: genres.action, platforms: [platforms.dos, platforms.nes, platforms.snes], release: 1991 }, // dev = Tengen, pub = Mindscape
  { names: ["Physicus: Save the World with Science!", "Physikus"], genre: genres.puzzle, platforms: [platforms.win98], release: 1999 }, // dev = HEUREKA-Klett Softwareverlag, pub = Ruske & Pühretmaier Edutainment
  { names: ["Pipe Dream"], genre: genres.puzzle, platforms: [platforms.win3x], release: 1991 }, // dev = The Assembly Line, pub = Microsoft
  { names: ["Prince of Persia"], genre: genres.platformer, platforms: [platforms.dos], release: 1989 }, // dev = Brøderbund, pub = Brøderbund
  { names: ["Professor Brösl"], genre: genres.pointAndClickAdventure, platforms: [platforms.winxp], release: 2002 }, // dev = pibyte, pub = pibyte
  { names: ["Red Baron"], genre: genres.simulation, platforms: [platforms.dos], release: 1990 }, // dev = Dynamic, pub = Sierra On-Line
  { names: ["Ricochet"], genre: genres.firstPersonShooter, platforms: [platforms.win98], release: 2000 }, // dev = Valve, pub = Sierra On-Line
  { names: ["Shooting Gallery"], genre: genres.action, platforms: [platforms.dos], release: 1990 }, // dev = Arcanum Computing, pub = Personal Companium Software
  { names: ["SimCity"], genre: genres.strategy, platforms: [platforms.dos], release: 1989 }, // dev = Maxis, pub = Maxis
  { names: ["Space Cadet"], genre: genres.pinball, platforms: [platforms.win95], release: 1995 }, // dev = Microsoft, pub = Microsoft
  { names: ["SSX Tricky"], genre: genres.racing, platforms: [platforms.ps2], release: 2001 }, // dev = Electronic Arts, pub = Electronic Arts
  { names: ["StarCraft"], genre: genres.strategy, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Blizzard Entertainment, pub = Blizzard Entertainment
  { names: ["StarCraft: Brood War"], genre: genres.strategy, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Blizzard Entertainment, pub = Blizzard Entertainment
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
  { names: ["Super Castlevania IV"], genre: genres.platformer, platforms: [platforms.snes], release: 1991 }, // dev = Konami, pub = Konami
  { names: ["Super Mario Bros", "Mario & Luigi"], genre: genres.platformer, platforms: [platforms.dos], release: 1994 }, // dev = Wiering Software, pub = Chaos Software
  { names: ["Tekken 3"], genre: genres.fighting, platforms: [platforms.ps1], release: 1998 }, // dev = Namco, pub = Namco, SCE
  { names: ["Terminal Velocity"], genre: genres.simulation, platforms: [platforms.dos, platforms.win95], release: 1995 }, // dev = Terminal Reality, 3D Realms
  { names: ["The Amazing Spider-Man"], genre: genres.platformer, platforms: [platforms.gb], release: 1991 }, // dev = Rare, pub = LJN, Nintendo
  { names: ["The Games: Winter Challenge"], genre: genres.sports, platforms: [platforms.dos], release: 1991 }, // dev = MindSpan, pub = Accolade
  { names: ["The Incredible Machine", "Pararancho"], genre: genres.puzzle, platforms: [platforms.dos, platforms.win3x], release: 1993 }, // dev = Jeff Tunnell Productions, pub = Sierra On-Line
  { names: ["The Legend of Zelda", "The Hyrule Fantasy: The Legend of Zelda 1"], genre: genres.action, platforms: [platforms.nes], release: 1986 }, // dev = Nintendo, pub = Nintendo
  { names: ["The Lion King"], genre: genres.platformer, platforms: [platforms.win3x], release: 1994 }, // dev = Westwood Studios, pub = Virgin Interactive
  { names: ["The Settlers"], genre: genres.strategy, platforms: [platforms.dos], release: 1994 }, // dev = Blue Byte, pub = Blue Byte
  { names: ["Thief: The Dark Project"], genre: genres.stealth, platforms: [platforms.win95, platforms.win98], release: 1998 }, // dev = Looking Glass Studios, pub = Eidos Interactive
  { names: ["Tintin in Tibet"], genre: genres.platformer, platforms: [platforms.dos, platforms.win95], release: 1996 }, // dev = Infogrames Multimedia, pub = Infogrames Multimedia
  { names: ["Tiny Toon Adventures: Buster Busts Loose!"], genre: genres.platformer, platforms: [platforms.snes], release: 1993 }, // dev = Konami, pub = Konami
  { names: ["Tom Clancy's Splinter Cell"], genre: genres.stealth, platforms: [platforms.winxp, platforms.ps2], release: 2002 }, // dev = Ubisoft, pub = Ubisoft
  { names: ["Tony Hawk's Pro Skater 2"], genre: genres.sports, platforms: [platforms.win98], release: 2000 }, // dev = Neversoft, pub = Activision
  { names: ["Tristan"], genre: genres.pinball, platforms: [platforms.dos], release: 1991 }, // dev = LittleWing, pub = Amtex
  { names: ["TZ-Minigolf"], genre: genres.sports, platforms: [platforms.win3x, platforms.win95], release: 1995 }, // ??? Jürgen Schröder? Thomas Zeh? 1995? Win3x?
  { names: ["Unreal II: The Awakening"], genre: genres.firstPersonShooter, platforms: [platforms.winxp], release: 2003 }, // dev = Legend Entertainment, pub = Infogrames Multimedia
  { names: ["Unreal Tournament"], genre: genres.firstPersonShooter, platforms: [platforms.win98, platforms.ps2], release: 1999 }, // dev = Epic MegaGames, pub = GT Interactive
  { names: ["Vinyl Goddess from Mars"], genre: genres.platformer, platforms: [platforms.dos], release: 1995 }, // dev = Six Pound Sledge Studios, pub = Union Logic Software Publishing
  { names: ["Walaber's Trampoline"], genre: genres.sports, platforms: [platforms.winxp], release: 2006 }, // dev = Walaber Entertainment, pub = Walaber Entertainment
  { names: ["Wario Land: Super Mario Land 3"], genre: genres.platformer, platforms: [platforms.dos], release: 1994 }, // dev = Nintendo, pub = Nintendo
  { names: ["Whomp 'Em", "Saiyūki World 2: Tenjōkai no Majin"], genre: genres.platformer, platforms: [platforms.nes], release: 1990 }, // dev = Jaleco, pub = Jaleco
  { names: ["WinTrek"], genre: genres.simulation, platforms: [platforms.win3x], release: 1992 }, // dev = Joseph Jaworski, pub = Joseph Jaworski
  { names: ["Wolfenstein 3D"], genre: genres.firstPersonShooter, platforms: [platforms.dos], release: 1992 }, // dev = id Software, pub = Apogee Software
  { names: ["Wolfpack"], genre: genres.simulation, platforms: [platforms.dos], release: 1990 }, // dev = NovaLogic, pub = Brøderbund
  { names: ["Worms"], genre: genres.strategy, platforms: [platforms.dos], release: 1995 }, // dev = Team17, pub = Ocean Software
  { names: ["Zak McKracken and the Alien Mindbenders"], genre: genres.pointAndClickAdventure, platforms: [platforms.dos], release: 1988 } // dev = LucasFilm Games, pub = LucasFilm Games
];