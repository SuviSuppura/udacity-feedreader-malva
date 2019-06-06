/* feedreader.js
  */
/* For the tests reference and learing process I have used video "Tutorial Request: FEND Project 4 Reader Testing - Walk Though" by Ryan White.

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', function() {
           for (url of allFeeds) {
             url == true;
             expect(allFeeds).toBeDefined();
             expect(allFeeds.url).not.toBe(false);
             }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name defined', function() {
           for (name of allFeeds) {
             name == true;
             expect(allFeeds).toBeDefined();
             expect(allFeeds.name).not.toBe(false);
             }
         });
    });


    /* A test suite named "The menu" */
    describe ('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default.
         */

        it('Menu is hidden by default', function() {
          var isHidden = document.body.classList.contains('menu-hidden');
           expect(isHidden).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. The menu display when
          * clicked and hide when clicked again.
          */
        it('Menu is hidden/shown when clicked', function() {
          var menuIcon = document.querySelector('a.menu-icon-link');
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
      });


    /* A test suite named "Initial Entries" */
    describe ('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

           beforeEach(function(done) {
             loadFeed(1, done);
          });

          it('Feed container has entries', function(done) {
            var feedContainer = document.querySelector('div.feed');
            var entries = document.querySelectorAll('article.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
          });
        });

    /* A test suite named "New Feed Selection" */
    describe ('New Feed Selection', function() {

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var firstFeed, secondFeed;

         beforeEach(function(done) {
           loadFeed(3, function() {
             firstFeed = document.querySelector('div.feed').innerHTML;
             loadFeed(2, function(){
               secondFeed = document.querySelector('div.feed').innerHTML;
               done();
             });
           });
         });

         it('List of feed is changed as new feed is added', function(done) {
           expect(firstFeed).not.toBe(secondFeed);
           done();
         });
      });

}());
