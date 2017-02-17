## Nightwatch
 Move to the Nightwatch project branch with:

```git checkout nightwatch```

Then install the required dependencies, you need a Selenium Server (make sure you have Java(JRE) installed) and Nightwatch:

```npm install -g nightwatch```

This command will install nightwatch globally


```npm install -g webdriver-manager ```

This command will install webdriver-manager globally

```npm install```

Make a webdriver-manager update with:

```webdriver-manager update```

Run the Protractor tests:

```webdriver-manager start```

This will start up a Selenium Server

In a second terminal window:

```npm test```