var url = 'http://todomvc.com/examples/angularjs/#/';
var siteName = 'AngularJS • TodoMVC';
var firstItem = 'Buy chocolate';

casper.test.begin("Basic tests", function suite(test) {
    casper.start(url, function() {
        test.assertTitle(siteName, "This page has the correct title !");
        test.assertVisible('footer');
        test.assertExists('h3',"H3 title is here");
        test.assertElementCount('.quote', 1);
        test.assertTextExists('todo', "page contains 'todo' ");
        // adding new item
        //his.sendKeys('#new-todo', firstItem);
        this.page.sendEvent('keypress', this.page.event.key.Enter);
        this.capture('adding.png');

        // asynchronous mode
        //this.click("#new-todo");

        casper.then(function() {
            test.assertElementCount('li', 16);
            //this.sendKeys('#new-todo', "Toto");
            this.page.sendEvent('keypress', this.page.event.key.Enter);
        })
    }).run(function(){
        test.done();
    });
});

