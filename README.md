# liri-node-app
Theme: The Liri-node-app helps find information for songs, concerts, and movie information. The purpose of this app is for users to find information for a song or movie based on what their input is. This is through the backend and commands must be typed into command line in order to work.

**How to use it**
Liri needs to be told what to look for. You can do this by typing in the command line node liri.js and then one of the following prompts:
node liri.js concert-this <band you want to see> 
  - this will show dates/place the band will appear next
 
node liri.js  spotify-this-song <song you want to listen to>
  - this will pull songs and band info that matches title of song.
 
node liri.js  movie-this <moive title>
 - this will pull movie title info such as year movie came out.
  
node liri.js do-what-it says 
 - this pulls info fromt he random.txt file. Whatever is contaned in the file will determine what info is output. 

Each command has a default answer if the user does not input a value. do-what-it-says gets it's input from the random.txt file. This needs to be appended if more info is needed.

