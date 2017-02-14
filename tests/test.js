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
   },
   "Checking a todolist item" : function(client)
   {
       client
            .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Flour')
            .submitForm('#todo-form')
            .assert.containsText('#todo-list li:first-child label', "Flour")
            .click('#todo-list li:first-child .toggle')
            .saveScreenshot("./screenshot/todo-checked-item.png")
            .end();
   },
   "Completed item list" : function(client)
   {
       client
            .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Sugar')
            .submitForm('#todo-form')
            .assert.containsText('#todo-list li:first-child label', "Sugar")
            .setValue('#new-todo', 'Butter')
            .submitForm('#todo-form')
            .click('#todo-list li:first-child .toggle')
            .click('#filters li:nth-child(3) a')
            .assert.containsText('#todo-list li:first-child label', 'Sugar')
            .saveScreenshot('./screenshot/todo-Completed-list.png')
            .end();
   },
   "clear completed items is visible if there is a completed item in the todo list" : function(client)
   {
       client
           .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Sugar')
            .submitForm('#todo-form')
            .assert.hidden('#clear-completed')
            .click('#todo-list li:first-child .toggle')
            .assert.visible('#clear-completed')
            .saveScreenshot('./screenshot/todo-clear-completed-button-visible.png')
            .end();
   },
   "Test to add blank item in the todo list" : function(client)
   {
       client
            .url("http://todomvc.com/examples/angularjs/#/")
            .waitForElementVisible("#todoapp", 1000)
            .setValue('#new-todo', 'Chocolate')
            .submitForm('#todo-form')
            .setValue('#new-todo', ' ')
            .submitForm('#todo-form')
            .assert.containsText('#todo-count', '1 item left')
            .saveScreenshot('./screenshot/todo-add-blank-item.png')
            .end();

   }
};