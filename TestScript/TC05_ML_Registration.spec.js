//Either use .then(function(fnName) { or .then(fnName) => { , both will work
//function() ~ ()=>

/**
Author: Aditya Roy
**/

//Importing modules
var testSetUp = require("../Test Environment/Environment.js");
var reportPath = require("../Report/GenerateReport.js");
var home = require("../Pages/registration.js");
var tutorial = require("../Pages/login.js");
var dateFormat = require('dateformat');
var testdata = require("../TestData/TestData.json");


var path = require('path');
var scriptName = path.basename(__filename).replace('.js','');
var timeStamp = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss").replace(' ','-').replace(':','_').replace(':','_');
var fs = require('fs');
var resultPath = 'C:/ProtractorAutomation/Result/Result_'+ scriptName + "_" + timeStamp;
var Report = new reportPath();
Report.CreateResultsFile(resultPath);

//Test Functionality check
describe('Validation of www.protractortest.org HomePage', function() {

    var Environment = new testSetUp()
    using(testdata, function(inputData) {;
    it('To validate Home Page Details', function() {
        
        browser.get("https://qaglo.mainline.gg/signup");

        var homePage = new home();
        var tutorialPage = new tutorial();

            HomePage.clickLogin();
            HomePage. LoginUserDetails(inputData.TC0.LoginEmail,
                                      inputData.TC0.LoginPassword,
                                          
                                        );
            HomePage.clickLoginModal();
                

            homePage.navigateSignUpNow(resultPath);
            homePage.navigateCreateTeambutton(resultPath);
            homePage.navigateToEnterText(resultPath);
            homePage.navigateToSavebutton(resultPath);
            homePage.navigateToCancelbtn(resultPath);
            homePage.navigateToRegisterbtn(resultPath);

            
        Report.updateDuration(resultPath);
              
    });
       
          
        
});});

