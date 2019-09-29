//hides sensitive info in .env
require("dotenv").config();

//Project variables
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

//Input arguements
var command = process.argv[2];
console.log(process.argv[2]);
var userInput = process.argv.slice(3).join(" ");
console.log(process.argv.slice(3).join(" "));

//switch statements for command output
begin(command, userInput);


    function begin(command, userInput) {
                switch(command) {
                case "concert-this":
                concertThis(userInput);
                    break;

                case "spotify-this-song":
                    spotifyThis(userInput);
                    break;
                
                case "movie-this":
                        movieThis(userInput);
                    break;

                case "do-what-it-says":
                    doWhatItSays();
                    break;

                    default:
                        break;
                }
            }

            //function for the concert input
            function concertThis(userInput){
                    //if statement to let user response be input if theres no input
                    if (userInput === " ") {
                        userInput = "Beck";
                    }
                    //AXIOS YOO
                    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(function (response) {
                        
                    var concertResults = response.data[0];
                    console.log(concertResults);

                    //moment variable
                    var momentTime = (concertResults.datetime).format("MM/DD/YYYY");

                    console.log("\nVenue Name: " + concertResults.venue.name + "\nVenue Location: " + concertResults.venue.city + "\nDate of Event: " + momentTime);
                });
            };

    //Spotify this song input
            function spotifyThis(userInput) {
                //for no user input
                    if (userInput === " ") {
                        userInput = "The Sign";
                    }

                    spotify.search( { type: 'track', query: userInput }, function(err, data) {

                        if (err) {
                          return console.log('Error occurred: ' + err);

                        } else {
                          for (var i = 0; i < data.tracks.items.length; i++ ) {
                    
                          console.log("Artist: " + data.tracks.items[i].artists[0].name);
                          console.log("Song Name: " + data.tracks.items[i].name);
                          console.log("Album Name: " + data.tracks.items[i].album.name + "\n");
                          };
                        }
                       
                      });
                    
                    };
                    
                    
                //Movie name input

                function movieThis(userInput) {
                    if (userInput === " ") {
                        userInput === "SuperStar"; 
                    }

                    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(function (response) {

                        // Variable for concert results
                        var movieResults = response.data;
                        // console.log(movieResults);
                        console.log("Movie Title: " + movieResults.Title);
                        console.log("Release Year: " + movieResults.Year);
                        console.log("IMDB Rating: " + movieResults.imdbRating);
                        console.log("Rotten Tomatoes Rating: " + movieResults.Ratings[1].Value);
                        console.log("Country: " + movieResults.Country);
                        console.log("Language: " + movieResults.Language);
                        console.log("Plot: " + movieResults.Plot);
                        console.log("Actors: " + movieResults.Actors + "\n");
                      
                        });
                      };


                //do what it says input from radnom.txt
                function doWhatItSays(){
                    fs.readFile("random.txt", "UTF8", function (err, data) {
                      
                      // Console logs error if any
                      if (err) {
                      return console.log(err);
                      }
                  
                      // Splits data between comma
                      var dataArr = data.split(",")
                      console.log(dataArr);
                      begin(dataArr[0], dataArr[1]);
                    })
                  }

            