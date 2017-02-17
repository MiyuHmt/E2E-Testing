describe('Todo list', function() {
  var appAddress = 'http://todomvc.com/examples/angularjs/#/';

  afterEach(function() {
    browser.executeScript('window.localStorage.clear();');
  });

  var before = function(callback) {
    it('', function() {
      callback();
    });
  };

  var fs = require('fs');

  function writeScreenShot(data,filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  var elements = {
    getNewTodoInput:              function() { return element(by.model('newTodo')); },
    getItemCompleteToggle:        function(index) { return element.all(by.css('.toggle')).get(index); },
    getItemkDeleteButton:         function(index) { return element.all(by.css('.destroy')).get(index); },
    getMainViewLink:              function() { return element(by.css('.main-link')); },
    getClearCompletedItemsButton: function() { return element(by.id('clear-completed')); },
    getTodoCount:                 function() { return element(by.id('todo-count')).evaluate('remainingCount'); }
  };

  var addItem = function(itemText) {
    elements.getNewTodoInput().sendKeys(itemText);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  };

  var completeItem = function(index) {
    browser.actions().click(elements.getItemCompleteToggle(index)).perform();
  };

  var deleteItem = function(optionalIndex) {
    var index = optionalIndex || 0;
    browser.actions().click(elements.getItemDeleteButton(index)).perform();
  };

  var clearCompletedItems = function() {
    browser.actions().click(elements.getClearCompletedItemsButton()).perform();
  };

  describe('adding an item', function() {
    before(function() {
      browser.get(appAddress);
      addItem('Chocolate');
      browser.takeScreenshot().then(function(png) {
        writeScreenShot(png, 'addingChocolateInTheList.png');
      });
    });

    it('see if the item left counter is increment', function() {
      expect(elements.getTodoCount().getText()).toBe('1 item left');
    });
  });
  describe('adding a second item', function() {
    before(function() {
      browser.get(appAddress);
      addItem('Milk');
      completeItem(0);
    });
  });
  describe('checking all todolist items', function() {
    before(function() {
      browser.get(appAddress);
      addItem('Eggs');
      addItem('Flour');
    });
    it('checking the item', function() {
      completeItem(0);
      completeItem(1);
    })
  });
  describe('clear complete items', function() {
    before(function() {
     browser.get(appAddress);
     addItem('Milk');
     addItem('Butter'); 
    });
    it('Check items', function() {
      completeItem(0);
      completeItem(1);
    })
    it('Clear completed items', function() {
      browser.takeScreenshot().then(function(png) {
        writeScreenShot(png, 'beforeCleanCompletedItems.png');
      });
      clearCompletedItems();
      browser.takeScreenshot().then(function(png) {
        writeScreenShot(png, 'clearCompletedItems.png');
      });
    })
  });
  describe('Try to add blank item', function() {
    before(function() {
     browser.get(appAddress);
     addItem('Milk');
     addItem(' ');
    });
    it('Count if the blank item is in the list', function() {
      expect(elements.getTodoCount().getText()).toBe('1 item left');
      browser.takeScreenshot().then(function(png) {
        writeScreenShot(png, 'addBlankItem.png');
      });
    })
  });
});