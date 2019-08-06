# Bamazon Project

### Problem the app addresses
This app allows you to store different items for sale in a SQL database. It allows you to select an item and enter a quantity to purchase for that product. The database should update to the correct quantity for that item once you have entered a transaction for it.

### How the app is layed out
This app first displays all the currently available items and the quantity for each item. It then prompts you to select an item number that you would like to purchase. It then asks you for the quantity that you would like to purchase for that item. Once you enter in the item and quantity it should update the database to reflect the new quantity for that item. It should also return an error saying 'insufficient quantity' if you enter a quantity above the quantity that is currently available.

### Instructions on running the app
1. The user will open the file and then the terminal/bash window in whatever code editor they are using.
2. The user will then type in the command line node bamazon.js and press enter. This will give a list of the current items with a quantity for each item in the database. 
3. The user will then be prompted to enter an item number that they would like to purchase. They will type the number of the item and press enter. 
4. The user will then be prompted to enter a quantity for that item. They will type the quantity amount and then press enter.
    4. Note: If the user enters a quantity that is greater than the current quantity available it will return an error message saying 'insufficient quantity'.
5. The database will then be updated to reflect the new reduced quantity for that item that was just purchased.

### Technologies used
* Node.js used to run the bamazon.js file rather than needing to run it in a browser.
* Inquirer package used to prompt user to input information.
* mySQL package used to create a connection with Sequel database.
* Sequel Pro used to create database.

### Link to Github and Recordings
* https://github.com/mattwhittle10/bamazon
* https://drive.google.com/file/d/177uRXzu3FiKxoLI5q5QaCuHEFNdIUQnF/view

#### My Role
I created this from start to finish. I used past examples of code from our class and researched a lot on my own. I leveraged the w3Schools website a lot to see how to use SQL Syntax. 