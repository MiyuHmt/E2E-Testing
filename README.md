E2E Testing

## Protractor
Move to the Protractor project branch with:

```git checkout protractor```

Then install the required dependencies, you need a Selenium Server (make sure you have Java(JRE) installed) and Protractor:

```npm install```

Make an webdriver-manager update with:
```webdriver-manager update```

Run the Protractor tests:

```webdriver-manager start```

This will start up a Selenium Server

Then, in a second terminal window run this command:

```protractor tests/conf.js```

 ## Nightwatch
 Move to the Nightwatch project branch with:

```git checkout nightwatch```

Then install the required dependencies, you need a Selenium Server (make sure you have Java(JRE) installed) and Nightwatch:

```npm install -g nightwatch```

This command will install nightwatch globally


```npm install -g webdriver-manager ```

This command will install webdriver-manager globally

```npm install```

Make an webdriver-manager update with:

```webdriver-manager update```

Run the Protractor tests:

```webdriver-manager start```

This will start up a Selenium Server

In a second terminal window:

```npm test```

## CasperJS
Move to the CasperJS project branch with:

```git checkout CasperJS```

Then install the required dependencies, you need PhantomJS and CasperJS:

```npm install -g phantomjs```

This command will install phantomjs globally

```npm install -g casperjs```

This command will install casperjs globally

```npm install ```

Run the CasperJS tests: 

```casperjs test test/testfile.js```


## Other useful commands 

* For the Selenium Server:

```webdriver-manager clean```

This command is for clear out the server and driver files. Use it if `webdriver-manager start` does not work.

```webdriver-manager shutdown```

Use it for stopping server

## Documentation

[PhantomJS API Documentation](http://phantomjs.org/api/)

[CasperJS Documentation](http://docs.casperjs.org/en/latest/)

[Nightwatch API Documentation](http://nightwatchjs.org/api)

[Protractor API Documentation](http://www.protractortest.org/#/api)
