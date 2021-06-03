# Problem 2 (Approx 1 hr)

Part A
Write code that models (in other words, represents) a collection of people (E.g., a club, class, or company). The code you write should be clean, simple, and reusable.

Each person in the set of people has 2 properties:
A name
An age

You may initialise the collection with 4 hard coded users:
Alice, age 20
Bob, age 25
Carol, age 30
Dave, age 35

Your code should calculate and output:
The average age
The oldest person in the collection
The youngest person in the collection


Part B
Create a website that presents the data modelled above. The website should be implemented in your choice of backend and / or front-end framework - E.g., React, Laravel, Spring, ASP.NET MVC etc. You may use a CSS framework. 

Store the collection data in the HTTP session when the session is first initialised. If you prefer, you may implement storage of the data in a DB (with accompanying migrations etc). The site should consist of 2 pages:

Page 1 - Details the collection as a whole (I.e., lists all users, and the data listed above in 1 - 3).
Page 2 - Detail page for an individual user.

You should endeavour to use best web practises (E.g., dynamically generated URLs, reusing page layouts, clear separation of concerns between view & controller etc.)

Extension:

Implement a form to enable a new user - Eve, age 40 to be added to the group. Once added, your code will automatically recalculate & re-generate the output (1-3). Note: you should avoid copy / paste code duplication.    
