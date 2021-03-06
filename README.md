# Ellen-Farnan-Memory-Game
## Front End Development - Project 1 (Learning People)
This is my take on the card game, [Concentration](https://en.wikipedia.org/wiki/Concentration_(card_game)#:~:text=Concentration%2C%20also%20known%20as%20Matching,over%20pairs%20of%20matching%20cards.). It is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards

This application (app) was designed and coded for the Project 2: Idea 2 submission, as part of the Free People Front End Developers course. 
The app was create to set out my capabilites for Front End Development in Javascript, HTML & CSS. Players can also find links to my social media accounts, such as Twitter, Github & Dribbl, to keep up to date with any latest projects.

## Brief
This website demonstrates some elements covered in the Javascript modules, as requested per brief: 

- Create an online JavaScript Pairs game.
- You will include a ‘How To’ page with clear instructions.
- You must use appropriate use of JavaScript for the games functionality.
- You will regularly commit your work to Github as you create your website.

- You can include difficulty levels for the user to specify at the beginning on either project ideas
- Document all errors and warnings found, make sure you document your process of fixing these errors.

I was able to apply the teaching from the course, and problem solve issues as they arouse. 

## UX
This Memory Game will be used as part of my portfolio of work to to demonstrate to potential employers in future my professional capabilities with Javascript. 

### Design
I decided on a minimalistic overall design. I endevoured to have all text easily readable by keeping the contrast high, and font size not too small, or closely spaced.

To keep the screen interesting, I adapted a piece of code from [Mohammad Abdul Mohaiman](https://codepen.io/mohaiman/pen/MQqMyo) from codepen to include a CSS animated elements.

I designed a rough wireframe to get an understanding of the layout which I wanted.
<img src = "assets/design/design1.jpg">

I also did 2 style way to test what the cards would look like before and after being 'flipped' 

ACTIVE BLOCKS
<img src = "assets/design/design2.jpg">

UNACTIVE BLOCKS
<img src = "assets/design/design3.jpg">


## Features
### Functionality
-WELCOME SCREEN
On window load, an overlay welcoming the player to the game appears. Player can either click on screen to go straight to game, or they can select the Tutorial button which will take them to a "How To..."

-If a player wishes to pause the game, a pause button exists in the upper right of screen as part of the nav bar. This will call a up a modal to the screen and for the game to pause. No moves are possible at this time, and the timer is stopped. Once the player wishes to continue, they are able to click on the window once more which will cause the game to continue. 

-If a player wishes to take a look at the "How To..." during game play, a Tutorial button exists in the upper right of screen as part of the nav bar. This will call a up a modal to the screen and for the game to pause. No moves are possible at this time, and the timer is stopped. Once the player wishes to continue, they are able to click on the window or on the 'x' in the upper right corner of the modal to exit, the game will then once more continue. 

-If a player wishes to restart the game, a restart button exists in the upper right of screen as part of the nav bar. This will call a modal to the screen and for the game to pause. No moves are possible at this time, and the timer is stopped. The player will have the option to click a "Restart" button which will reset any cards flipped and restart the timer. If the player decides that they would actually not like to restart but to continue as is, they have the choice of selecting "Cancle" button, the 'x' in the upper right corner of the modal or anywhere on the window to continue the game.

-Players can click on cards to flip them. Cards will stay flipped until a second card is selected. 

-If the Player's second card matches their first card, both cards will disappear from board.

-However, if the Player's second card doesn't match their first card, both cards will flip back over, available to be picked again on the next turn.

-The game takes place with a 60 second time which runs down as they play. The time remaining can be tracked through the "Timer" in the scoreboard, to the left of the board.

-Each turn is tracked under 'Moves' in the scoreboard, to the left of the board.

-Difficulty is add by grading players on the number of moves made. 10 moves or less gives the player 3 stars. Between 10 & 16 gives the player 2 stars. Any higher and the player receives 1 star. 

-Once all cards have been matched and have disappeared off the board within the time limited, victory will have been achieved. This will cause an overlay to appear on screen, informing the player of their star rating and giving the option to click to restart the game again.

-However, if the player does not match all cards in the time given, it's game over and the player loses. This will cause an overlay to appear on screen, informing the player of Game Over and giving the option to click to restart the game again.

-Social Media icons exist in the footer of the page, if the player wishes to check out my social media accounts on Github, Dribbl & Twitter.

### Future Features
-AUDIO
I want to incorporate sound effects(tap, match, victory, game over etc.) and a mute button.

-SHARE RESULTS BUTTON
I would like to add a share result button so that players can share their results on their social media.

-LEVELS
I will be adding additional levels to add complexity for the player. 


## Technology Used
The project used the following technologies to create:
 - Javascript
    - JS was used to add functionality and interactivity to my game which was the core focus of this project. 
 - HTML5
    - I used HTML5 to build the basic elements and contents for the project.
 - CSS3
    - I used CSS3 to customise the style of my elements and contents.
 - Google Fonts
    - The project uses Google Fonts to style the text and suit my chosen theme.
 - Font Awesome
    - The project uses Font Awesome for the social media and naviagtion icons my game website/app.
 - Abobe Illustrator 
    - I used Adobe Illustrator to create and export the colour box images for the cards.
 - Visual Studio 
    - I used Visual Studio to complete the code writing and testing of the project.

### Version Control
 - Git
    - I used Git as a version control system to regularly add and commit changes made to project in Visual Studio, before pushing them to GitHub.    
 - GitHub 
    - I used this as my remote repository, as per project brief, to push and store the versions of my project. I've also used GitHub pages to deploy my website.

## Testing Checklist
### JavaScript, HTML and CSS Validation
- To validate my Javascript code, I used the Google Developer console by pushing the code to the browers and the shortcut of `Ctrl + 'i'` &  [JavaScript Validator](https://javascriptvalidator.net/).
- To validate my HTML code, I used the [W3C HTML Validator](https://validator.w3.org/#validate_by_input) tool. 
- To validate my CSS code, I used the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) tool.

### Screen Responsitivity 
- To test how the project would react to different for different screens, I used the Google Devloper console on the browser through pushing the code to the browers and the shortcut of `Ctrl + 'i'`

## Bugs or Problems Encountered
 -**Card Design:**I originally had just the border of the cards display their colour and kept the inside of the card transparent. This can been seen in the original wireframes / designs as above. I found that it was quite hard to read the colours against the background, especially between colours such as yellow & orange. I decided to use square jpgs of flat colours instead which proved much easier to read in regards to UX. This approach of using jpgs also had much more matieral online available for problem solving.
 - **Reset Cards on Restart:** I encountered an issue of the cards not resetting after Victory or Game Over. I inially added visible attribute to the card array. However, this would just show the cards with the colours displayed. I spent quite an amount of time trying to solve by playing with the visibility attributes on the front and back faces of the cards to no effect. I also had tried to use classlist to remove the 	`flip` attribute. This again didn't resolve the issue and caused other errors to appear in the game play. I finally resolved this by adding back their eventlistener in the startGame function and having the 	`flip` attribute removed if the array was over 1 when function was run.
  -**Restart Button** At one point, the Restart button needed to be pressed twice to appear. This was resolved byputting the modal inside a function and calling the one function on click, instead of having the modal simply appear on click, conflicting with the javascript code.
  **Visible Shuffle on Restart:** At one point, once the  play pressed restart they would be able to see the cards for a brief moment after they where shuffled but before they were flipped. This made the second round too easy. I resolved this by adding a `setTimeout` to the `shuffle` function to give the cards time to flip before shuffling.
 - **Pause Game:** I had issues with the Pause function in the game. I had initally tried to used clearInterval, however this created issues with maintaining time remaining and had a tendency to speed up or slow down when played once again. From advice I received, I changed to approach to use an `isPaused` boolean to run the function. The function continued to have some issues when combined with the modals as it conflicted with the `startGame` function when called too early. 
 - **Disappearing Cards When Pairing:** On occasion, when 2 cards are pairing if a 3rd card is selected before the cards have disappeared off the board, the 1st and 3rd card disappear instead. Leaving the 2nd card on the board without a match. I have been unable to have the issue occur consistently to find a solution to this issue.  


## Deployment
The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my Visual Studio workspace.

2. Initialised Git using the `git init` command.

3. Added all files to the Staging area (Git) using the `git add .` command.

4. Committed the files to Git using the `git commit -m "Initial commit"` command.

5. Created a new repository in GitHub called 'Ellen-Farnan-Memory-Game'.

6. Copied the below code from GitHub into the terminal window in my Visual Studio workspace:

`git remote add origin https://github.com/efarnan/Ellen-Farnan-Memory-Game.git`

`git push -u origin master`

7. Entered my GitHub username and password to push the files from Git to GitHub.

8. Went into 'Settings' on my repository page in GitHub.

9. Selected the 'master branch' option under the 'GitHub Pages' section.

10. Ran several regular commits throughout my project.

### Repository Link
https://efarnan.github.io/Ellen-Farnan-Memory-Game/

### Running Code Locally
To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to my GitHub repository.
2. Click on 'Clone or download'.
3. Click on 'Download ZIP'.
4. Once dowloaded, extract the zip file's contents and run my website locally.

## CREDITS
1. [PERCIPIO](https://learningpeople.percipio.com/journey/2e02592e-8d7e-4ffc-b2d4-00b414288ddd)
2. [W3SCHOOLS](https://www.w3schools.com/js/)
3. [W3SCHOOLS (Modal Tutorial)](https://www.w3schools.com/howto/howto_css_modals.asp)
4. [MEDIUM ARTICLE - Marina Ferreira](//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)
5. [BETTER DEV ARTICLE - Sandra Israel-Ovirih](https://www.better.dev/build-a-memory-matching-game-in-javascript)

### MEDIA
1. [Mohammad Abdul Mohaiman (CSS ANIMATED ELEMENT)](https://codepen.io/mohaiman/pen/MQqMyo)

## Acknowledgements
- I would like to thank the Stackflow community for their assistance in helping me better understand where I had made mistakes with Javascript.
- I would like to include a special thank you to my mentor Sunny Hebbar for his feedback and advice on my project, and helpful advice and guidance on certain bugs which I encountered during coding.