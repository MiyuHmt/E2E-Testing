module.exports = {
   "Test todolist" : function (browser)
   {
       browser
           .resizeWindow(1680, 1200)
           .url("http://todomvc.com/examples/angularjs/#/")
           .waitForElementVisible("#todoapp", 1000)
           .saveScreenshot("./screenshot/todo-empty.png")
           .end();
   }
};