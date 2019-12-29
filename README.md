## Dreamloom Dream Journal

A database where users can record and view dreams they've had. Information like the date, how well they slept, and the contents of their dream. The user can log in, create dreams, view a list of dreams, view and edit an individual dream. 

See more at the back end repo:
[Dreamloom Back-End](https://github.com/derekmurphy1993/dreamloom-back-end)

### Storing and Retrieving Data
The core element to this app is the functionality and communication with the back-end api database.

When a user logs in the have the ability to log a new dream, browse their collection of dreams, view the full details of a dream, edit that dream or delete it.



### The Process
The concept of this app has existed for a long time, with a large scope of functions and views. Keeping SOLID design principals in mind, I decided on building the app in several stages. I created user stories and wireframes for a version 1 that would strictly be the foundational database that could store users and dreams.

I created the back end using _Ruby on Rails_ containing a dreams table with a one to many relationship to a users table.

##### Technologies Used
1. Ruby on Rails
2. Javascript
3. Handlebars
4. Ajax
4. Bootstrap

### Upcoming Versions
