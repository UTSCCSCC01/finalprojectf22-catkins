# Catkins
A UTSC community-focused web application for one point of contact for any resources related to life at the Scarborough campus. 

## Motivation
As first-years we were lost with all resources available on campus and would like to have one platform that offered everything in one place. The University website is not the ideal place to find news about events and club updates. And when searching on Facebook or Instagram, some pages were abandoned or never replied back. Catkins is here as a new sprout flower on your social life on campus! Connecting you with departments, clubs and professors while at the same time allowing you to find your people. 

## Installation - MERN Stack
### Database: MongoDB Atlas
> https://www.mongodb.com/atlas/database
When you build a Cluster, you will need to substitute your URI under setup>backend>.env
Don't forget to substitute your MongoDB user password in the URI!

### Server: Node.js
Make sure you have Node.js and NPM installed on your pc, you can check on your CMD:
> node -v
> npm - v

You may need to also install some dependencies, so go ahead and run this on your terminal:
> npm install express cors mongoose dotenv
> npm install react-scripts --save

If react-scripts doesn’t automatically install, you might have to add “sudo” in front of the command

> npm install -g nodemon 

### Running
Go into setup>backend, open terminal and run "nodemon server"

### Front-end
You will need to install all the dependencies 

> npm install

And then start the React localhost server

> npm start

It will start the Front-end of the page

### Main Browser: Google Chrome
Using others might provide you with a not ideal experience

## Contribution
We will use git-flow to coordinate the project. 

### Branches
Main: Will be the official releases of the web application
Dev: Used to test and debug anything before officially pushing into main
feature-name-#-branch: Individual branches to develop each feature related to its user story (#: represents user story number)

### Ticketing Platform
We will be using JIRA as our ticketing platform (link: TBD)

### Pull request
We will be using pull requests to make sure the main branch has the finished product at that time
