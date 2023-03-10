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


## Chapter 2 - Challenges Faced by Frontend Web Application Developers

 * Browser Complications Report by Google/Microsoft 2022 - [https://insights.developer.mo](https://insights.developer.mozilla.org/reports/mdn-browser-compatibility-report-2020.html)
   * Javascript
    * ECMAScript standard - https://262.ecma.internal.org/12.0/
    * Top pain point with JS:
      * Different versions supported by different browsers and separate versions within those browsers. 

  * Quality vs. Velocity
   * Velocity: delivery frequency depending:
     * Organization
     * Team Experience
     * App Complexity
     * Scope of Release
   * Quality: mininal bugs
     * Reduction of unnecessary risks. 
   * Processes that assist with the balance:
     * Continous Delivery
     * Agile
     * DevOps

  * Coverage challenges for web application developers
    * There is great importance in keeping up-to-date on latest versions.
      * Failure to do so much result in application bugs / breaks due to releases. 
    * Scheduled browser update releases
      * Google - https://www.chromestatus.com/features/schedule
      * Microsoft - https:///wiki.Mozilla.org/Release_Schedule/Calendar   
    * Focusing on the most popular browsers makes the issues easier to manage.
      * Stats Counter - https://gs.statcounter.com/browser-market-share/mobile/worldwide
      * Drilling down to the locations (country, state, city) where the app is used most allows for greater success.

  * High level pain points of web challenges:
    * Compatibility with new and trending digital platforms as well as old browser support.
    * Coverage strategy for web and mobile platforms
    * Style and layout across different browser versions and OS versions (CSS, animation grids)
    * JavaScript and ECMAScript compatibility across browsers
    * Complexities around new types of web applications, including PWAs and Flutter
    * Choosing the right web development framework

  * Non-functional challenges
    * Performance challenges
      * Any page that takes longer than 3 seconds is considered unusable. 
        * This may decrease as time progresses. 
      * Research by Limelight - https://docs.broadcom.com/doc/its-all-about-the-user-experience
      * Load/Stress testing is a base requirement to determine performance.
        * The sooner this type of testing is performance the better - smaller changes are quicker and less riskier.
        * Testing late in the project may result in unexpected overhauls and delay velocity.  
        * Key Performance Indicators (KPIs) is the way to measure performance. 
        * Many browsers have built-in dev tools to assist in measuring perfomance. 
    * Accessibility challenges
      * Accessibility practices are governed by: 
        * ADA compliance - https://get.adaaccessible.com/ada-comliance-law-and-penalties
        * WCAG - https://www.w3.org/TR/WCAG21/
          * Finding non-compliance through these organizations may result in large fines ($55,000 - $110,000)
          * Built-in tools:
            * Lighthouse - Chrome plugin
            * AXE - https://www.deque.com/axe from Deque framework.


   * Compliance challenges
     * Focus on data privacy and cyber security
       * Static Application Security Testing (SAST)
         * SAST is a method of inspecting and analyzing application source code to determine security vulnerabilities.
         * This is known as "white box testing" as it test the code in a non-running state. 
       * Dynamic Application Security Testing (DAST)  
         * DAST is a method of inspecting and analyzing application source code and compilation. 
         * This is known as "black box testing" as it tests the code in a running state and compiling.
        * There is importance in adding additional testing layers dependent on the regulations of the organization i.e. HIPAA for healthcare
      * Forrester report
        * A report that keeps track of AI related attacks
        * https://www.forrester.com/report/Using-AI-For-Evil/RES143162/
      * You can grab any specific compliance to be used on any pipeline to be checked.
        * Open Web Applications Security Project (OWASP) - https://owasp.org/www-project-top-ten/ is an example.
      * Online tools for security training reference:
        * Secure Code Warrior - https://www.securecodewarrior.com/    

   
