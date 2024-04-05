# MatchingCardGame
This repo relates to the code files used in this YouTube video.
Code for a game is hosted in GitHub. We create an S3 bucket for static website hosting, then create a continuous deployment pipeline (using AWS Code Pipeline) to automatically deploy the code whenever changes are made.

# The Game
A simple card matching game. The user clicks two cards (images) to try to match them. If there's a match, the cards disappear from the board. If there's no match, the cards are flipped back to their blank side so the user can try again.

The game consists of HTML, CSS and JavaScript.

# Ideas for additional features:

A scoring mechanism

A timer ✓

Add additional cards ✓

Multi-player capabilities so you can compare scores

Resizing images ✓

# The Deployment Pipeline
The pipeline is created using AWS Code Pipeline. The pipeline pulls the code from GitHub, and deploys it to S3, when a change is detected the pipeline updates and pushes code immediately 

# Cost
All services used are eligible for the AWS Free Tier. However, charges will incur at some point so it's recommended that you shut down resources after completing this tutorial.


![AWS Diagram](https://github.com/OklenCodes/MatchingCardGame/assets/26550391/205370a5-a749-4aa2-98f2-4c5b4180edcd)
