/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  

  var homeTeamShots = $('#teamone-numshots');
  var awayTeamShots = $('#teamtwo-numshots');


  var homeTeamGoals = $('#teamone-numhits');
  var awayTeamGoals = $('#teamtwo-numhits');

  var resetsNum = $('#num-resets');
  var audioElement = document.createElement('audio');

  var HomeTeamShoots=$('#teamone-shoot');
  var RoadTeamShoots=$('#teamtwo-shoot');
  
  var reset=$('#reset');

  var body=$('#body');


  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    audioElement.setAttribute('src', 'assets/audio/ICESKATE.mp3');
    
    audioElement.play();


    HomeTeamShoots.click(function() {

      takeAShot = Math.floor(Math.random() * 100);

      if(takeAShot%7==0) {

        homeTeamGoals.html(parseInt(homeTeamGoals.html())+1);
        audioElement.setAttribute('src', 'assets/audio/Vanc2.mp3');
    
        audioElement.play();

        
    

        body.css({"background-image": "url(assets/images/candiansBackground.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover'});

      }

      if(takeAShot%7!=0) {
        body.css({"background-image": "url(assets/images/rink.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover'});

        audioElement.setAttribute('src', 'assets/audio/hockeystick.mp3');
    
        audioElement.play();
    
    
      }

      homeTeamShots.html(parseInt(homeTeamShots.html())+1);


  
    })

    RoadTeamShoots.click(function() {

      takeAShot = Math.floor(Math.random() * 100);

      if(takeAShot%7==0) {

        awayTeamGoals.html(parseInt(awayTeamGoals.html())+1);
        body.css({"background-image": "url(assets/images/bruins.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover'});
        audioElement.setAttribute('src', 'assets/audio/crowd-groan.mp3');
        audioElement.play();


      }

      if(takeAShot%7!=0) {
        body.css({"background-image": "url(assets/images/rink.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover'});
        audioElement.setAttribute('src', 'assets/audio/hockeystick.mp3');
    
        audioElement.play();
      }

      awayTeamShots.html(parseInt(awayTeamShots.html())+1);


    })

    reset.click(function() {

      awayTeamShots.html(0);
      awayTeamGoals.html(0);
      homeTeamGoals.html(0);
      homeTeamShots.html(0);
      body.css({"background-image": "url(assets/images/rink.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover'});

      resetsNum.html(parseInt(resetsNum.html())+1);

      audioElement.setAttribute('src', 'assets/audio/ghost01.mp3');
    
      audioElement.play();

    })


    

    



  })

})();
