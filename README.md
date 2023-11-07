# Jeeps
Repo für das SEP Projekt 2023 

# Installation
1. Pull current state of GitLab
2. Install react in ...Jeeps\processvisualizer
2.1. Open the concole and navigate to ...Jeeps\processvisualizer
2.2. Install react via "npm install create-react-app ."
2.3. Install bootsrap via "npm install react-bootstrap bootstrap"
3. Run the app via "npm start"

# Publishing to page for the first time
0. Navigate to ...Jeeps\processvisualizer in the Console
1. Install "npm install gh-pages --save-dev"
2. Change/add the following things in the package.json:
3. add '"hompage": "http://Nexxot.github.io/-SEP-Jeeps",' as the first line in the json
4. In scripts add after "start": '"react-scripts start",': '"predeploy": "npm run build",
    "deploy": "gh-pages -d build",'
5. Push changes to GitHub
6. run "npm run deploy"
7. Done Page can be found via https://nexxot.github.io/-SEP-Jeeps/

# Publishing to page after the first time
0. Navigate to ...Jeeps\processvisualizer in the Console
1. run "npm run deploy"
2. Done Page can be found via https://nexxot.github.io/-SEP-Jeeps/
