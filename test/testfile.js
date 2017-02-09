var url = '#'; // url
var siteName = 'Todo';
var firstItem = 'Buy chocolate';
casper.test.begin("Basic tests", function suite(test) {
    casper.start(url, function() {
        test.assertTitle(siteName, "This page has the correct title !");
        test.assertVisible('footer');
        test.assertExists('h1',"H1 title is here");
        test.assertElementCount('.ng-binding', 1);
        test.assertTextExists('todo', "page contains 'todo' ");

        //this.click('#toggle-all');

        // asynchronous mode
        this.click('#new-todo');

        casper.then(function() {
            test.assertElementCount('li', 3);
            this.sendKeys('#new-todo', "Toto");
            this.page.sendEvent('keypress', this.page.event.key.Enter);
        })


    }).run(function(){
        test.done();
    });
});


