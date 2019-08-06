var inquirer = require("inquirer");
var mysql = require("mysql");
var itemChosen;
var quantityChosen;

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    readList();
  });

  function readList() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
        start();
      });
    }

  function start(){
      inquirer.prompt([
    {
      name: "item",
      type: "input",
      message: "Which item number would you like to purchase?"
    },
    {
      name: "quantity",
      type: "input",
      message: "Please enter the quantity you would like to purhcase."
    }
    ])
    .then(function(answer) {
//Need to select from the products database the specific item that the user selected
//Then I need to update the quantity for that item based on the quantity that was entered.
//If the quantity entered is > the quantity available then I need to console.log message 'insufficient quantity available'.
        // connection.query(
        // "SELECT * FROM PRODUCTS WHERE item=" (answer.item), function(err, results) {
        //     if (error) throw err;
        //     console.log(results);
        // });
        console.log("item: " + answer.item);
        console.log("quantity: " + answer.quantity);
        itemChosen = answer.item;
        console.log(itemChosen);
        quantityChosen = answer.quantity;
        console.log(quantityChosen);
    }) 
  };
  