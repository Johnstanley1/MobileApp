The first iteration is the creation of the static HTML pages for the mobile app.

The second iteration is the implementation of javascript validations and saving the reviewer's email to local storage

The third iteration is the creation of two stores, namely reviews and types, for storing reviews in the IndexedDB. The reviews store performs CRUD functionalities, while the types store is a look-up store.

The Home page: 
This is the home page with four navigation pages at the header/top of the page
The page also displays the feedback image in the body
Three links styled as button types for contact information
The footer displays information regarding the developer and year of development

![Home](https://github.com/Johnstanley1/MobileWebApp/assets/124546871/e807a170-9ae9-4667-9ad1-7bb9a240179c)

The Add page:
This page is a simple form for adding reviewer's feedback information to the database
It displays the header tabs and footer just as the home page
There's a save button to trigger the save function to the database

![Add](https://github.com/Johnstanley1/MobileWebApp/assets/124546871/67d79d02-0ef5-4ba4-94b9-9e2af521a182)

The Reviewers page:
This page was designed to display in a list view the reviews/feedback saved to the database
This view was implemented as a list view. However, clicking on any list view navigates to the edit/modify view for the review selected.

![Reviews](https://github.com/Johnstanley1/MobileWebApp/assets/124546871/dfe9de4a-54b7-4145-ae04-039d8dc790e2)

The Setting page:
This page is a simple form with only one input text box and two buttons
The page is for setting a default email for reviewers

![Settings](https://github.com/Johnstanley1/MobileWebApp/assets/124546871/4acb9dda-21da-4671-9064-f9d661e0d751)
