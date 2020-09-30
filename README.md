## Apex Legends Leaderboard API


## Table of contents
* [General info](#general-info)
* [How to use](#how-to-use)
* [Technologies](#technologies)
* [Setup](#setup)


## General info
API that can be used to get data of the best players in the Apex Legends game. All of the data comes from my own database.


## How to use


 Every single request to the API is a POST request<br/>

 -  Getting top 100 users by **kills**:

		https://my-apex-api.openode.io/leaderboard/kills


 - Getting top 100 users by **level**:
 
		https://my-apex-api.openode.io/leaderboard/level

Example of data you get (the order depends on the request):

	[
    {
        "username": "basedgodfearless",
        "platform": "PS4",
        "kills": 23401,
        "level": 600
    },
    {
        "username": "Termk47",
        "platform": "X1",
        "kills": 19798,
        "level": 508
    },
    {
        "username": "nrg_dizzy",
        "platform": "PC",
        "kills": 17344,
        "level": 483
    },
    {
        "username": "RhinoTTV",
        "platform": "PC",
        "kills": 17051,
        "level": 464
    },
	]
<br />
<br />


**Adding and updating new users** 
 - My API takes data from my own database so it may not contain every
   user. To add someone manually, you will need to call:

	    https://my-apex-api.openode.io/stats/get
	  Or you could search for the user on my own website here:
  
		  https://www.apex-centre.com/tracker/

	Every single user that is looked on through either of these methods is automatically added to my database. 


 <br/>

 - To **update** stats of a single user, you will need to call:
	
	    https://my-apex-api.openode.io/stats/update


The body of both update and get requests takes following parameters:

> **username** - the username you want to search for<br/>
> **platform** - the platform the user plays on<br/>
> **authorization** - authorization key which you will need to get from <a href="http://api.mozambiquehe.re/getkey">here</a>



## Technologies
* Node.js - version 10.10.0
* PostgreSQL


## Setup

* Install all neccessary dependencies:<br/>

        npm run install

* Run in development mode:<br/>

		npm run start server

To run on your machine, you will need your own database that you have to setup in models/passwords.js file

## About the game


Apex Legends is a free-to-play first-person shooter battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One on February 4, 2019, without any prior announcement or marketing. A Nintendo Switch version is planned for release in late 2020, along with cross-platform play between all supported platforms.

Developer Respawn Entertainment had previously developed Titanfall (2014) and its sequel Titanfall 2 (2016), both of which were published by Electronic Arts (EA) who eventually acquired Respawn Entertainment in 2017.[40]

According to design director Mackey McCandlish, initial design on Apex Legends started before Titanfall 2 had shipped in 2016 and as of 2018 the entire Titanfall team at Respawn Entertainment was working on the project;[41] however, executive producer Drew McCoy stated that work on the game did not begin until the spring of 2017. He also confirmed that the game had approximately 115 developers working on it, making it the studio's most labor-intensive project. Titanfall 2, by way of comparison, had around 85 developers.[42]

According to McCoy, the studio was not sure what their next game would be after completing the post-release support for Titanfall 2, though they knew they wanted to keep making Titanfall games. As with the development of Titanfall 2, the studio broke into several small teams to create "action blocks", small game prototypes that showcase a gameplay element, a weapon, or similar feature of a game that would fit into a Titanfall sequel. One such "action block" was inspired by the success of the battle royale game genre led by PlayerUnknown's Battlegrounds; this prototype, which applied gameplay mechanics of previous Titanfall games in a battle royale format, was considered very successful and the studio decided to expand this model.[43] The designers decided that having the pilotable Titans (large mecha) from their previous games would not work well in a battle-royale setting and instead focused on creating strong character classes which felt appropriate for the Titanfall franchise.[44] They also found that some maneuverability features of prior Titanfall titles, such as wall-running, would make gameplay too challenging in a battle royale format, as identifying the direction of threats would be too difficult.[43]

Respawn Entertainment CEO Vince Zampella told VentureBeat that Apex Legends, as a live-service and free-to-play battle-royale game, was a new challenge for the studio and represented a new way for them of developing games. Their design philosophy was focused on "chasing the fun" and designing all the mechanics around team-based play, rather than solo play. The final decision on major design factors, such as the size of the teams, the number of teams and the size of the map, were all based on what felt "most fun" to the developers and were strongly guided by "gut feeling".[45]

Design director Mackey McCandlish also stated that with Apex Legends, they were looking to challenge the conventions of the still relatively young battle-royale genre and to add their studio's unique touch to that class of games. They felt that the choice of three-man squads and a limit of 20 teams gave players on average a greater chance to win and also felt more in line with the type of intimate gameplay they were hoping to achieve. McCandlish claimed that the studio felt the need to create a "defensible space" in the battle-royale mode which could not be easily imitated and that the communication system, the three-man squads, and the smaller playing area were all aligned with this goal.[41]

As part of the development process, the game underwent extensive play-testing to ensure that all elements felt fun and balanced. Collectively the developers spent 100 to 200 hours a day trying out the game, a process which executive producer Drew McCoy called "probably the most important part of development".[42] To refine the game's non-verbal communication system, the studio play-tested the game for a month without the use of voice chat and applied fake names to the play-testers to predict how most players would experience the game.[46]

With the game mostly completed, Respawn's director of brand marketing, Arturo Castro, began working on how the studio would name and market it. Castro recognized that the game featured many elements which players would expect from a Titanfall franchise game, but lacked core elements such as Titans, Pilots and a single-player experience.[43] Additionally, it had already been reported that Respawn was working on Titanfall 3 from a source at the studio.[47] Respawn therefore decided that attempting to market the game as part of the Titanfall series would have been difficult and would risk alienating Titanfall fans. They, therefore, opted to treat the game as a new intellectual property (IP).[43][47] Respawn were also concerned that as they at that time had recently been acquired by EA, players would think that EA had forced them to make a battle royale game.[43] McCoy affirmed that they had to convince Electronic Arts to allow them to make this game: "we decided to make this game. Not to be throwing EA under the bus, but this wasn't the game they were expecting. I had to go to executives, show it to them, and explain it and...not convince but more, 'Hey, trust us! This is the thing you want out of us.' [...] This is a game where we had to say, 'This is what we want to do. Help us get there.'"[42]

Concerned that a standard six-month marketing campaign for the game would have generated negative publicity from disgruntled Titanfall fans, Castro claims they eventually took inspiration from musical artist Beyoncé whose release of her self-titled album came as a surprise to fans—a strategy which proved financially successful.[43][47] Wanting to generate some buzz about this new product before its release, the studio secretly arranged for about 100 social media influencers to travel to their studio to try the game and then instructed them to "tease" news of it on their social media accounts during halftime of the Super Bowl LIII, the day before Apex Legends' formal release.[43] Respawn CEO Vince Zampella felt the approach was "gross", according to Castro, as he found it reminiscent of the infamous Fyre Festival "hype" which later turned out to be a fraudulent event. However, as Apex Legends was already ready for release at this point, Castro felt the approach was an appropriate marketing strategy.[43] Because of the game's performance in terms of player-count and viewership on streaming services, Castro felt vindicated in this decision.[43] This approach was uncharacteristic of any prior EA title.[40]

The game is built using a modified version of Valve Corporation's Source engine; Source had previously been used for Titanfall 2, however for Apex Legends several necessary adjustments to allow for the increased draw distances and the large game map were made. Apex Legends is believed to be pushing at the technological limits of its game engine and as a result, the game compromises on dynamic display resolution, with the quality of the image and frame rate suffering particularly on console versions and on lower-end PC devices.[48]

Prior to launch, McCoy confirmed there were plans to implement cross-platform play to the game in the future, though claimed that game progression and in-game purchases cannot be transferred across systems due to hardware limitations. McCoy has also expressed the desire to eventually bring Apex Legends to iOS, Android, and Nintendo Switch, though there are no plans to this effect for iOS and Android as of June 2020.[49][50]

According to anonymous reports, the Chinese corporation Tencent is working with Electronic Arts to bring Apex Legends to China, as partnering with a local Chinese firm is a requirement for Western media companies wishing to make their products legally available in the country.[51] In January 2020, EA confirmed to investors that it was working with a local partner in order to bring the game to PC in China, though it did not mention the partner by name.[52]

Respawn established a new Vancouver, British Columbia, studio, within the EA Vancouver campus, dedicated to supporting Apex Legends in May 2020.[53]

As part of the June 2020 EA Play presentation, Respawn announced that Apex Legends will be brought to the Steam storefront for Windows players, as well as to the Nintendo Switch by late 2020. Further, the game will support cross-platform play across all supported platforms on these releases.[54]

Esports.
