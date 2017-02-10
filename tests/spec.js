// spec.js
describe('TODO list', function() {
    it('should filter results', function() {

        // Find the element with ng-model="user" and type "chocolate" into it
        element(by.model('new-todo')).sendKeys('chocolate');

        // Find the first (and only) button on the page and click it
        element(by.css(':button')).click();

        // Verify that that there is only one item in the todo list
        expect(element.all(by.repeater('todo in todos')).count()).toEqual(1);

    });
});