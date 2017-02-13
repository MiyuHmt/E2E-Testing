describe('TODO list', function() {
    beforeEach(function() {
        browser.get('http://todomvc.com/examples/angularjs/#/');
    });
        
    it('should filter results', function() {
        // Verify that that there is 0 item in the todo list
        expect(element.all(by.repeater('todo in todos')).count()).toEqual(0);

    });
});