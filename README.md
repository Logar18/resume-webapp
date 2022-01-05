
## Resume App
This full stack app is basically meant to be used as a portfolio. With a simple change in the frontend code, you can enable a login button that when logged, grants the user the ability to add projects to the home page.  



## Installation
### Node:
**Mac**
1. Recommend installation with homebrew: `brew install node`
2. You can use the following to download and run a pkg file:

`curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

**Windows:** There is a installer to download from Node.js website

Node getting started: https://nodejs.org/en/docs/guides/getting-started-guide/

I particularly like this resource as well: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

## How to run
First run `npm install` to install node dependencies

To start the node server run `npm start`
