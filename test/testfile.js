var url = '#'; // url
var siteName = 'Todo';

casper.test.begin("Test", 3, function suite(test) {
    casper.start(url, function() {
        test.comment("Starting testing...");
        test.assertTitle(siteName, "This page has the correct title !");
        test.assertExists(".view", "The class view exists");
    })

})

