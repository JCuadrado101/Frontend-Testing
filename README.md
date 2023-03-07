# Frontend-Testing
Going over testing for the Frontend

## Chapter 1 - Cross-Browser Testing Methodologies

* Monitoring Web Treads - https://httparchive.com
  * State of the Web
  * SEO
  * Accessibility
  * Performance
  * etc...
  
* Accessibility Rules Provided by:
  * Disabilities Act (ADA)
  * Web Content Accessibility Guidelines (WCAG)
  
* Progressive Web Applications (PWA)
  * Design for both Web and Mobile Applications
    * Typically designed in JavaScript
  * Real mobile devices and browsers
    * Require mix of frameworks for testing
      * Selenum
      * Appium
  * Can be downloaded directly into native OS (Twitter Lite, Instagram, etc...)
  * PWAs were initially developed and led by Google.
    * PWAs are able to access native functionality that the standard browser can not:
      * Camera, contact list, biometric, location, etc...
      * This is done by using Service Workers
        * Service workers are scripts that run in the background of the user's browser to enable the unique functionalities expected by a PWA.
        * Deployment of PWAs allow developers to bypass the mobile app store.
  * There are tools to validate PWAs:
    * PWA Stats: https://www.pwastats.com
    * Baseline Requirements: https://web.dev/progressive-web-apps/
  * General Test Plan for PWA (to be considered along with RWD)
    * The validation of PWA manifests file correctness (pointing to the home URL, theme, icon, and more)
    * The validation of the PWA service workers, which comprises critical components of the PWA application, includes registering for push notifications, caching abilities, and more.
    * PWA installation and functionality across the platform and in parallel with the native applications.
    * PWAs provide a custom offline page to server users when they are offline.
    * PWAs work with any input type such as a mouse, keyboard, stylus, or touch.
    * PWAs work fine with all mobile devices sensors such as location services, audio, camera, and more.
    * PWAs should be tested against all third-party dependencies such as social media integrations (for instance, Facebook and LinkedIn), other APIs, analytics services, and more.
    * The PWA testing of security, privacy polices and permissions of the app to adhere to Apple and Google requirements.
      
* Responsive Web Design (RWD)
  * Responsiveness for both Desktop and Mobile.
  * General Test Plan for RWD Projects:
    * Compatibility testing across the most relevant desktop browsers, OS versions, and mobile devices.
    * Visual testing coverage across different layouts, screen sizes, resolutions, and languages to ensure the proper display of all graphical elements on these plaforms. 
    * The end-to-end functional testing of all business flows, links, forms, and other web UI dependencies.
    * Accessibility of the pages across all different platforms.
    * Client-side performance testing
    * Load testing at peak levels and normal ones.
    * Testing across different environment conditions (both web and mobile), including networks, working with sensors, incoming events, location-aware events, and more 
    
* Testing Types for web applications
  * Functional
  * APIs
  * Integrations
  * Non-functional
  * Unit
  * Accessibility
  * Ad Hoc Exploratory Testing
  
* Testing Scenarios
  * Sanity
  * Regression
  * Smoke
  * Intergration
  * Usability Testing
  
* Functionality Testing Requirements
  * The website links across the entire website should work fine, including the following:
    * Navigation links
    * Social media links
    * MailTo links
  * Website forms to test for relevant pages such as registration forms and order forms:
    * Form field testing (positive/negative inputs)
    * The verification of mandatory filled fields
    * The submission of forms accoss all platforms (mobile/desktop)
  * Testing web application policies regarding cookies:
    * Cookies are deleted when the web cache is cleared
  * Business flow verification of the entire user flow within the website:
    * All internal links and user journeys are working.
    * UI and layout testing
    * Localization testing
    * The compatibility of the website across all screen sizes and resolutions
    * Usability and user experience testing.
    
* Non-functional Testing Requirements
  * Security testing (both static and dynamic)
    * Ensuring authorized access to secure pages is kept.
    * Preventing users from downloading restricted files without appropriate access and authentication
    * Terminating user inactivity sessions automatically
    * Redirecting a website to encrypted SSL pages, upon the user of SSL cerificates.
    * Adopting industry-proven tests such as OWASP Top 10, CWE, CERT, and others.
    * Including code quality standards such as JSLint within SAST and DAST (https://www.jslint.com)
  * Performance and load testing
    * Measuring against benchmarks and KPI web application response times according to different network conditions (web and mobile)
    * Loading testing your web application to determine its behavior under normal (single user performance) and peak loads (millions of virtual users)
    * Stress testing your web app to determine its breakpoint when it is pushed to beyond normal load at peak time.
    * Determining how the site recovers from crashes or availibility issues.
  * Accessibility
    * Covering the most common accessibility rules: WCAG, ADA, 508, and, if in Canada, ACA
    * Executing accessibility tests across different platforms and languages (web and mobile)
    * Ensuring proper accessibility IDs (web elements) for ease of test automation.
    
* Headless Browsers
  * A normal browser that simply doesn't load the UI on runtime. 
  * A headless browser can be used when
    * No elements or actions are needed to be tested.
    * Parallel testing is required and no need to view the UI
    * Increasing testing speed
  * Headless testing shouldn't be performed solo - headed testing in combination is key.
    * Running headless options can be performed in two ways:
      * All major browsers offer a headless option through CLIs (Google, Mozilla and Microsoft)
      * Test Automation Frameworks: Selenium and Puppeteer.
        * Sample of headless Selenium: https://github.com/SeleniumHQ/selenium/blob/truck/javascript/node/selenium-webdriver/chrome.js#L3333
        
        ``` 
        let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();
        ```
  * Puppeteer Framework
    * Google headless browser (https://developers.google.com/web/tools/puppeteer)
      * Chrome DevTools Protocol (CDP) enhances puppeteer capabilities.
      * Remote debugging ``` --remote-debugging-port=9222 ```
    * Microsoft equivalent framework - Playwright
   
