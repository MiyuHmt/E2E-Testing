module.exports = {
   "Test todolist" : function (browser)
   {
       browser
           .url("http://todomvc.com/examples/angularjs/#/")
           .waitForElementVisible("#todoapp", 1000)
           .saveScreenshot("./screenshot/todo-empty.png")
           .end();
   },
   "Adding an item in the todolist" : function(client)
   {
       client
            .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Chocolate')
            .submitForm('#todo-form')
            .assert.containsText('#todo-list li:first-child label', "Chocolate")
            .saveScreenshot("./screenshot/toto-1item.png")
            .end();
   },
   "Adding two items in the todolist" : function(client)
   {
       client
            .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Milk')
            .submitForm('#todo-form')
            .setValue('#new-todo', 'Eggs')
            .submitForm('#todo-form')
            .assert.containsText('#todo-list li:nth-child(2) label', "Eggs")
            .saveScreenshot("./screenshot/todo-2items.png")
            .end();
   }
};