# Test Requirements


## Introduction

We're going to Mars!

You are to produce a React/Redux SPA to help the mission, using webpack as your transpiler/bundler.

A basic React project is configured in the "Mars Mission" folder in this directory.
To use this project, install node dependencies, then run the application using `yarn start` or `npm run start`.

If you are more comfortable setting up a React project yourself, you can do so.

This application will need to use Redux.  You should install and setup Redux as part of this exercise.


## Features

You are going to build a React/Redux WebApp for tracking tasks on the Mars mission.
Try to implement as many of the following features as possible in the alloted time.

1: Implement the ability to to view, create, update and delete task items.
These tasks should be stored in the application redux store, and contain a title, a description
the name of the user who created the task, and the name of the person to whom the task is assigned.

2: At the top of the page, there should be a colored header bar containing a witty title 
which maintains it's position as you scroll through the application.

3: To the side of the page, there should be a side panel containing the current use, the current
number of tasks stored within the application, and a button that deletes all tasks 
from the application.

4: A picture at the top of the application rendered asyncronously from https://source.unsplash.com/random/800x600/?mars.
You MUST use the fetch api to retrieve this image. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch.

5: Write tests to verify that the application is behaving correctly.

6: Create a git repository for the project and commit changes to it at appropriate times.
Make sure not to include any files from node_modules in the repository.
