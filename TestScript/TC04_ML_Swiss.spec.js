

//Importing modules
var Home = require("../Pages/login.js");
var testdata = require("../TestData/TestData.json");
var using = require('jasmine-data-provider');
var Home1 =require("../Pages/swiss.js");


//Test Functionality check
describe('Login flow E2E', function() {
      
    using(testdata, function(inputData) {
        it('to validate and check Login flow of user', function() {
            var HomePage = new Home();

            browser.get('https://avengers-qa.mainline.gg/sprint10/10nov/-/tournament/overview');
            HomePage.clickLogin();
            HomePage. LoginUserDetails(inputData.TC0.LoginEmail,
                                      inputData.TC0.LoginPassword,
                                          
                                        );
                HomePage.clickLoginModal();
        
            var SwissHome = new Home1();
                SwissHome.clickMatch();
                SwissHome.click1stCheckin();
                SwissHome.click1stConfirm();   

            
        });
        it('to validate and check Login flow of user', function() {
            var HomePage = new Home();

        
        
            var SwissHome = new Home1();
                SwissHome.clickMatch();
                SwissHome.click1stCheckin();
                SwissHome.click1stConfirm();   

            
        });
       
       
        
});});

