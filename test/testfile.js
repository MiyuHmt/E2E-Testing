var url = '#####'; // put the local link
var siteName = 'AngularJS • TodoMVC';
var firstItem = 'Buy chocolate';

casper.test.begin("Basic tests", function suite(test) {
    casper.start(url, function() {
        test.assertTitle(siteName, "This page has the correct title !");
        test.assertVisible('footer');
        test.assertExists('h1',"H1 title is here");
        test.assertElementCount('.todoform', 1);
        test.assertTextExists('todo', "page contains 'todo' ");
        // adding new item
        this.sendKeys('.newtodo', firstItem);
        this.page.sendEvent('keypress', this.page.event.key.Enter);

        // asynchronous mode
        this.click(".newtodo");

        casper.then(function() {
            test.assertElementCount('li', 3);
            this.sendKeys('.newtodo', "Toto");
            this.page.sendEvent('keypress', this.page.event.key.Enter);
        });
    }).run(function(){
        test.done();
    });
});

