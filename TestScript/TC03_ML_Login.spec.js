

//Importing modules
var Home = require("../Pages/login.js");
var testdata = require("../TestData/TestData.json");
var using = require('jasmine-data-provider');



//Test Functionality check
describe('Login flow E2E', function() {
      
    using(testdata, function(inputData) {
        it('to validate and check Login flow of user', function() {
            var HomePage = new Home();

            browser.get("https://qafe.mainline.gg/qa/rr/-/tournament/overview"); 
            HomePage.clickLogin();
            HomePage. LoginUserDetails(inputData.TC0.LoginEmail,
                                      inputData.TC0.LoginPassword,
                                          
                                        );
                HomePage.clickLoginModal();
                

            
        });
       
          
        
});});

