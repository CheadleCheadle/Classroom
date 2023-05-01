# Classroom

Create Classes, Assignments, Announcements and more! Built using Python and React.js.

[Classroom!][live]

[User stories][user-stories]

[live]:https://classroom-fr3x.onrender.com/
[user-stores]:https://github.com/CheadleCheadle/Classroom/wiki/User-Stories

## Main Features

This Google Classroom clone allows for users to emulate all the tools of a classroom all in one place!
Users can create classes and have their students join the class where they can then create assignments and announcements for the class.
Users who are students can view all their assignments and upload their completed work via file upload hosted with AWS.

## Front End
- Uses React.js
- Implements Redux for state management.
- Uses RESTful requests.

## To-do
* Implement Update and Delete for announcements.
* Allow for file upload when creating assignments and announcements.
* Be able to invite students.

## To launch the application locally:
* Clone the repository
* Open the root folder and type "pipenv install" to install dependencies
* Open the frontend folder called 'react-app' and type "npm install"
* In the root folder, type "pipenv run flask run" to start the flask server on localhost:5000
* Inside the 'react-app' folder type "npm start" to start the react frontend server on localhost:3000
* The application should now be running!
* ![classroom](https://user-images.githubusercontent.com/108553712/235412145-77914cbf-940a-4b41-8ea8-71acf10963cd.PNG)
If you wish to stop using the application, you can close it by hitting ctrl + c inside of both the root and frontend folders.
