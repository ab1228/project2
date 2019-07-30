# HotCars

## Live

Hot Cars is deployed on heroku at: 

## Purpose

Hot Cars is intended to let a user check a car out and have it reserved for them.

## How it works

A user is prompted to either login to their current account or set up a new account.  After logging into their account, they are given a choice of cars that are available to be rented.  Once they've chosen the car that they want and the dates they want to rent the car, the database will update to show that the car is no longer available (change the available column to false) and set the user with with the inventory id and the dates they are checking out.  When the user is ready to check back in the car, they go to a page and click check in which returns the car (changes available to true).

A user can be deleted from the database if they have become inactive or need their account deleted for some other reason.

## Future Development

* Add a larger database that includes pictures of the cars so that they can be displayed when a user chooses a car they wish to rent.

* Make a user page that displays the dates and car they have rented.  As well as a check-in button.

* Make a page so we can delete a car from the inventory.

* Page to add cars to the inventory.

* Style the front-end that's not part of the homepage.


### Created By:

Alex Blanco, Teddy Brewer, Helen Khodabakhsh, and Deepali Singh


