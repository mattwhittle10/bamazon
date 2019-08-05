var inquirer = require("inquirer");
var mysql = require("mysql");

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
      message: "Which item ID would you like to purchase?"
    },
    {
      name: "quantity",
      type: "input",
      message: "Please enter the quantity you would like to purhcase."
    }
    ])
    .then(function(answer) {
        // connection.query(
        //     "SELECT * FROM products" +
        //     "WHERE item='answer'"
        // )
        console.log(answer);
    })
  };
  