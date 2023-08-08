# Tech Blog - MVC: Module 14 Challenge

## Description

This app is our first full stack assignment in this Bootcamp! This tech blog is a CMS-style site that allows users to publish articles, blog posts, and comments/opinions on other posts.  
  
It uses `MVC (model-view-controller)` to organize the user-interface (views), data (models), and controlling logic (controllers). It uses the 'separation of concerns' principal, which provides for simple and efficient division of logic and labor, which makes our code easier to improve and maintain.  
  
In this app, I've implemented both front-end and back-end logic to perform functions and retrieve information for certain routes. Users are able to signup/login via authentication (with hashed passwords) with `Express Session` and the `bcrypt` libraries. I use `Express` for route designation, and `Sequelize` and `MySQL` for database/table setup and organization.  
  
This is also my first app using a view engine. We are using `Handlebars`, which allows me to set up a main layout, other view pages, and partials to be inserted into certain views. `Handlebars` allows us to dynamically update an html page with content from our database.  
  
Finally, we are using the library `dotenv` to store our sensitive variables securely in a `.env` file; in this case, our login information for `MySQL`.  

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)

## User Story
AS A developer who writes about tech  
I WANT a CMS-style blog site  
SO THAT I can publish articles, blog posts, and my thoughts and opinions  

## Acceptance Criteria
GIVEN a CMS-style blog site  
WHEN I visit the site for the first time  
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in  
WHEN I click on the homepage option  
THEN I am taken to the homepage  
WHEN I click on any other links in the navigation  
THEN I am prompted to either sign up or sign in  
WHEN I choose to sign up  
THEN I am prompted to create a username and password  
WHEN I click on the sign-up button  
THEN my user credentials are saved and I am logged into the site  
WHEN I revisit the site at a later time and choose to sign in  
THEN I am prompted to enter my username and password  
WHEN I am signed in to the site  
THEN I see navigation links for the homepage, the dashboard, and the option to log out  
WHEN I click on the homepage option in the navigation  
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created  
WHEN I click on an existing blog post  
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment  
WHEN I enter a comment and click on the submit button while signed in  
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created  
WHEN I click on the dashboard option in the navigation  
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post  
WHEN I click on the button to add a new blog post  
THEN I am prompted to enter both a title and contents for my blog post  
WHEN I click on the button to create a new blog post  
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post  
WHEN I click on one of my existing posts in the dashboard  
THEN I am able to delete or update my post and taken back to an updated dashboard  
WHEN I click on the logout option in the navigation  
THEN I am signed out of the site  
WHEN I am idle on the site for more than a set time  
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts  

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## Features

If your project has a lot of features, list them here.
