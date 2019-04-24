[](http://www.dota2.com/leaderboards/)

### Apex Legends Leaderboard API


**How to use**


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


## Adding and updating new users 
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



