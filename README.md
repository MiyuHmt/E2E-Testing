## Protractor
Move to the Protractor project branch with:

```git checkout protractor```

Then install the required dependencies, you need a Selenium Server (make sure you have Java(JRE) installed) and Protractor:

```npm install```

Make a webdriver-manager update with:
```webdriver-manager update```

Run the Protractor tests:

```webdriver-manager start```

This will start up a Selenium Server

Then, in a second terminal window run this command:

```protractor tests/conf.js```