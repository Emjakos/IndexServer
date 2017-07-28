Magic mirror

The magic mirror is a screen that has a reflective surface and that displays various bits information.
This specific mirror displays time, weather, temperature and some news.

The time is something the raspberry pi can find on it's own as long as it's connected to the internet.
The weather is gotten from Weather underground(http://api.wunderground.com/api/"key"/conditions/q/FI/Helsinki.json)
The news are gotten from YLE(http://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS)

The code is a mess, you are probably better off just rewriting everything on your own or just not touching it at all.
I also haven't learned proper indentation.

components:

home/pi/MagicMirror/indexServer.js
The server itself,
has all of the information that is displayed is gotten here, good luck.

home/pi/MagicMirror/index.html
The layout of the page and the file i understand the best.

/etc/system/system/MagicMirror.service
Starts the script below and makes sure it stays on.

/home/pi/MagicMirror/start.sh
Starts the server.

~/.config/autostart/autoChromium.desktop
Opens chromium and loads http://localhost:8080.

/home/pi/MagicMirror/README.txt
This file, explains the project to the best of my ability.

Known bugs:
-The entire website flashes when reloading.
-The weather function doesn't accommodate for all possible weather patterns, only very common ones.
-The news function is unable to display all symbols like for example different variations of quotes.
-The program was buit to fit the screen it was developed on and might not work with all screens.