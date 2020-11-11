

//Importing modules
//var testSetUp = require("../Test Environment/Environment.js");
//var reportPath = require("../Report/GenerateReport.js");
var home = require("../Pages/createAcc.js");
//var dateFormat = require('dateformat');
var testdata = require("../TestData/TestData.json");
var using = require('jasmine-data-provider');


var path = require('path');
const { Browser } = require("selenium-webdriver");
var scriptName = path.basename(__filename).replace('.js','');
//var timeStamp = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss").replace(' ','-').replace(':','_').replace(':','_');
//var fs = require('fs');
//var resultPath = 'C:/ProtractorAutomation/Result/Result_'+ scriptName + "_" + timeStamp;
//var Report = new reportPath();
// Report.CreateResultsFile(resultPath);

//Test Functionality check
describe('Registration flow E2E', function() {
    
    browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
   
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {
            
            browser.get("https://qaglo.mainline.gg/signup");
           
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC00.UserName,
                                           inputData.TC00.FirstName,
                                           inputData.TC00.LastName,
                                           inputData.TC00.Email,
                                           inputData.TC00.Password,
                                           inputData.TC00.ConfirmPass,
                                           inputData.TC00.Date,
                                           );
                homePage.clickSubmit();

            
        });
        
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {
           
            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC01.UserName,
                                           inputData.TC01.FirstName,
                                           inputData.TC01.LastName,
                                           inputData.TC01.Email,
                                           inputData.TC01.Password,
                                           inputData.TC01.ConfirmPass,
                                           inputData.TC01.Date,
                                           );
                homePage.clickSubmit();

            
        });
       
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC02.UserName,
                                           inputData.TC02.FirstName,
                                           inputData.TC02.LastName,
                                           inputData.TC02.Email,
                                           inputData.TC02.Password,
                                           inputData.TC02.ConfirmPass,
                                           inputData.TC02.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC03.UserName,
                                           inputData.TC03.FirstName,
                                           inputData.TC03.LastName,
                                           inputData.TC03.Email,
                                           inputData.TC03.Password,
                                           inputData.TC03.ConfirmPass,
                                           inputData.TC03.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC04.UserName,
                                           inputData.TC04.FirstName,
                                           inputData.TC04.LastName,
                                           inputData.TC04.Email,
                                           inputData.TC04.Password,
                                           inputData.TC04.ConfirmPass,
                                           inputData.TC04.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC05.UserName,
                                           inputData.TC05.FirstName,
                                           inputData.TC05.LastName,
                                           inputData.TC05.Email,
                                           inputData.TC05.Password,
                                           inputData.TC05.ConfirmPass,
                                           inputData.TC05.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC06.UserName,
                                           inputData.TC06.FirstName,
                                           inputData.TC06.LastName,
                                           inputData.TC06.Email,
                                           inputData.TC06.Password,
                                           inputData.TC06.ConfirmPass,
                                           inputData.TC06.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC07.UserName,
                                           inputData.TC07.FirstName,
                                           inputData.TC07.LastName,
                                           inputData.TC07.Email,
                                           inputData.TC07.Password,
                                           inputData.TC07.ConfirmPass,
                                           inputData.TC07.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC08.UserName,
                                           inputData.TC08.FirstName,
                                           inputData.TC08.LastName,
                                           inputData.TC08.Email,
                                           inputData.TC08.Password,
                                           inputData.TC08.ConfirmPass,
                                           inputData.TC08.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC09.UserName,
                                           inputData.TC09.FirstName,
                                           inputData.TC09.LastName,
                                           inputData.TC09.Email,
                                           inputData.TC09.Password,
                                           inputData.TC09.ConfirmPass,
                                           inputData.TC09.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC10.UserName,
                                           inputData.TC10.FirstName,
                                           inputData.TC10.LastName,
                                           inputData.TC10.Email,
                                           inputData.TC10.Password,
                                           inputData.TC10.ConfirmPass,
                                           inputData.TC10.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC11.UserName,
                                           inputData.TC11.FirstName,
                                           inputData.TC11.LastName,
                                           inputData.TC11.Email,
                                           inputData.TC11.Password,
                                           inputData.TC11.ConfirmPass,
                                           inputData.TC11.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC12.UserName,
                                           inputData.TC12.FirstName,
                                           inputData.TC12.LastName,
                                           inputData.TC12.Email,
                                           inputData.TC12.Password,
                                           inputData.TC12.ConfirmPass,
                                           inputData.TC12.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC13.UserName,
                                           inputData.TC13.FirstName,
                                           inputData.TC13.LastName,
                                           inputData.TC13.Email,
                                           inputData.TC13.Password,
                                           inputData.TC13.ConfirmPass,
                                           inputData.TC13.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC14.UserName,
                                           inputData.TC14.FirstName,
                                           inputData.TC14.LastName,
                                           inputData.TC14.Email,
                                           inputData.TC14.Password,
                                           inputData.TC14.ConfirmPass,
                                           inputData.TC14.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC15.UserName,
                                           inputData.TC15.FirstName,
                                           inputData.TC15.LastName,
                                           inputData.TC15.Email,
                                           inputData.TC15.Password,
                                           inputData.TC15.ConfirmPass,
                                           inputData.TC15.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC16.UserName,
                                           inputData.TC16.FirstName,
                                           inputData.TC16.LastName,
                                           inputData.TC16.Email,
                                           inputData.TC16.Password,
                                           inputData.TC16.ConfirmPass,
                                           inputData.TC16.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC17.UserName,
                                           inputData.TC17.FirstName,
                                           inputData.TC17.LastName,
                                           inputData.TC17.Email,
                                           inputData.TC17.Password,
                                           inputData.TC17.ConfirmPass,
                                           inputData.TC17.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC18.UserName,
                                           inputData.TC18.FirstName,
                                           inputData.TC18.LastName,
                                           inputData.TC18.Email,
                                           inputData.TC18.Password,
                                           inputData.TC18.ConfirmPass,
                                           inputData.TC18.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC19.UserName,
                                           inputData.TC19.FirstName,
                                           inputData.TC19.LastName,
                                           inputData.TC19.Email,
                                           inputData.TC19.Password,
                                           inputData.TC19.ConfirmPass,
                                           inputData.TC19.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC20.UserName,
                                           inputData.TC20.FirstName,
                                           inputData.TC20.LastName,
                                           inputData.TC20.Email,
                                           inputData.TC20.Password,
                                           inputData.TC20.ConfirmPass,
                                           inputData.TC20.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC21.UserName,
                                           inputData.TC21.FirstName,
                                           inputData.TC21.LastName,
                                           inputData.TC21.Email,
                                           inputData.TC21.Password,
                                           inputData.TC21.ConfirmPass,
                                           inputData.TC21.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC22.UserName,
                                           inputData.TC22.FirstName,
                                           inputData.TC22.LastName,
                                           inputData.TC22.Email,
                                           inputData.TC22.Password,
                                           inputData.TC22.ConfirmPass,
                                           inputData.TC22.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC23.UserName,
                                           inputData.TC23.FirstName,
                                           inputData.TC23.LastName,
                                           inputData.TC23.Email,
                                           inputData.TC23.Password,
                                           inputData.TC23.ConfirmPass,
                                           inputData.TC23.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC24.UserName,
                                           inputData.TC24.FirstName,
                                           inputData.TC24.LastName,
                                           inputData.TC24.Email,
                                           inputData.TC24.Password,
                                           inputData.TC24.ConfirmPass,
                                           inputData.TC24.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC25.UserName,
                                           inputData.TC25.FirstName,
                                           inputData.TC25.LastName,
                                           inputData.TC25.Email,
                                           inputData.TC25.Password,
                                           inputData.TC25.ConfirmPass,
                                           inputData.TC25.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC26.UserName,
                                           inputData.TC26.FirstName,
                                           inputData.TC26.LastName,
                                           inputData.TC26.Email,
                                           inputData.TC26.Password,
                                           inputData.TC26.ConfirmPass,
                                           inputData.TC26.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC27.UserName,
                                           inputData.TC27.FirstName,
                                           inputData.TC27.LastName,
                                           inputData.TC27.Email,
                                           inputData.TC27.Password,
                                           inputData.TC27.ConfirmPass,
                                           inputData.TC27.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

           browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC28.UserName,
                                           inputData.TC28.FirstName,
                                           inputData.TC28.LastName,
                                           inputData.TC28.Email,
                                           inputData.TC28.Password,
                                           inputData.TC28.ConfirmPass,
                                           inputData.TC28.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

             browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC29.UserName,
                                           inputData.TC29.FirstName,
                                           inputData.TC29.LastName,
                                           inputData.TC29.Email,
                                           inputData.TC29.Password,
                                           inputData.TC29.ConfirmPass,
                                           inputData.TC29.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

          //  browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC30.UserName,
                                           inputData.TC30.FirstName,
                                           inputData.TC30.LastName,
                                           inputData.TC30.Email,
                                           inputData.TC30.Password,
                                           inputData.TC30.ConfirmPass,
                                           inputData.TC30.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC31.UserName,
                                           inputData.TC31.FirstName,
                                           inputData.TC31.LastName,
                                           inputData.TC31.Email,
                                           inputData.TC31.Password,
                                           inputData.TC31.ConfirmPass,
                                           inputData.TC31.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC32.UserName,
                                           inputData.TC32.FirstName,
                                           inputData.TC32.LastName,
                                           inputData.TC32.Email,
                                           inputData.TC32.Password,
                                           inputData.TC32.ConfirmPass,
                                           inputData.TC32.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC33.UserName,
                                           inputData.TC33.FirstName,
                                           inputData.TC33.LastName,
                                           inputData.TC33.Email,
                                           inputData.TC33.Password,
                                           inputData.TC33.ConfirmPass,
                                           inputData.TC33.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC34.UserName,
                                           inputData.TC34.FirstName,
                                           inputData.TC34.LastName,
                                           inputData.TC34.Email,
                                           inputData.TC34.Password,
                                           inputData.TC34.ConfirmPass,
                                           inputData.TC34.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC35.UserName,
                                           inputData.TC35.FirstName,
                                           inputData.TC35.LastName,
                                           inputData.TC35.Email,
                                           inputData.TC35.Password,
                                           inputData.TC35.ConfirmPass,
                                           inputData.TC35.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC36.UserName,
                                           inputData.TC36.FirstName,
                                           inputData.TC36.LastName,
                                           inputData.TC36.Email,
                                           inputData.TC36.Password,
                                           inputData.TC36.ConfirmPass,
                                           inputData.TC36.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC37.UserName,
                                           inputData.TC37.FirstName,
                                           inputData.TC37.LastName,
                                           inputData.TC37.Email,
                                           inputData.TC37.Password,
                                           inputData.TC37.ConfirmPass,
                                           inputData.TC37.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC38.UserName,
                                           inputData.TC38.FirstName,
                                           inputData.TC38.LastName,
                                           inputData.TC38.Email,
                                           inputData.TC38.Password,
                                           inputData.TC38.ConfirmPass,
                                           inputData.TC38.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC39.UserName,
                                           inputData.TC39.FirstName,
                                           inputData.TC39.LastName,
                                           inputData.TC39.Email,
                                           inputData.TC39.Password,
                                           inputData.TC39.ConfirmPass,
                                           inputData.TC39.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC40.UserName,
                                           inputData.TC40.FirstName,
                                           inputData.TC40.LastName,
                                           inputData.TC40.Email,
                                           inputData.TC40.Password,
                                           inputData.TC40.ConfirmPass,
                                           inputData.TC40.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC41.UserName,
                                           inputData.TC41.FirstName,
                                           inputData.TC41.LastName,
                                           inputData.TC41.Email,
                                           inputData.TC41.Password,
                                           inputData.TC41.ConfirmPass,
                                           inputData.TC41.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC42.UserName,
                                           inputData.TC42.FirstName,
                                           inputData.TC42.LastName,
                                           inputData.TC42.Email,
                                           inputData.TC42.Password,
                                           inputData.TC42.ConfirmPass,
                                           inputData.TC42.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC43.UserName,
                                           inputData.TC43.FirstName,
                                           inputData.TC43.LastName,
                                           inputData.TC43.Email,
                                           inputData.TC43.Password,
                                           inputData.TC43.ConfirmPass,
                                           inputData.TC43.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC44.UserName,
                                           inputData.TC44.FirstName,
                                           inputData.TC44.LastName,
                                           inputData.TC44.Email,
                                           inputData.TC44.Password,
                                           inputData.TC44.ConfirmPass,
                                           inputData.TC44.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC45.UserName,
                                           inputData.TC45.FirstName,
                                           inputData.TC45.LastName,
                                           inputData.TC45.Email,
                                           inputData.TC45.Password,
                                           inputData.TC45.ConfirmPass,
                                           inputData.TC45.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC46.UserName,
                                           inputData.TC46.FirstName,
                                           inputData.TC46.LastName,
                                           inputData.TC46.Email,
                                           inputData.TC46.Password,
                                           inputData.TC46.ConfirmPass,
                                           inputData.TC46.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC47.UserName,
                                           inputData.TC47.FirstName,
                                           inputData.TC47.LastName,
                                           inputData.TC47.Email,
                                           inputData.TC47.Password,
                                           inputData.TC47.ConfirmPass,
                                           inputData.TC47.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC48.UserName,
                                           inputData.TC48.FirstName,
                                           inputData.TC48.LastName,
                                           inputData.TC48.Email,
                                           inputData.TC48.Password,
                                           inputData.TC48.ConfirmPass,
                                           inputData.TC48.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC49.UserName,
                                           inputData.TC49.FirstName,
                                           inputData.TC49.LastName,
                                           inputData.TC49.Email,
                                           inputData.TC49.Password,
                                           inputData.TC49.ConfirmPass,
                                           inputData.TC49.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC50.UserName,
                                           inputData.TC50.FirstName,
                                           inputData.TC50.LastName,
                                           inputData.TC50.Email,
                                           inputData.TC50.Password,
                                           inputData.TC50.ConfirmPass,
                                           inputData.TC50.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC51.UserName,
                                           inputData.TC51.FirstName,
                                           inputData.TC51.LastName,
                                           inputData.TC51.Email,
                                           inputData.TC51.Password,
                                           inputData.TC51.ConfirmPass,
                                           inputData.TC51.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC52.UserName,
                                           inputData.TC52.FirstName,
                                           inputData.TC52.LastName,
                                           inputData.TC52.Email,
                                           inputData.TC52.Password,
                                           inputData.TC52.ConfirmPass,
                                           inputData.TC52.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC53.UserName,
                                           inputData.TC53.FirstName,
                                           inputData.TC53.LastName,
                                           inputData.TC53.Email,
                                           inputData.TC53.Password,
                                           inputData.TC53.ConfirmPass,
                                           inputData.TC53.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC54.UserName,
                                           inputData.TC54.FirstName,
                                           inputData.TC54.LastName,
                                           inputData.TC54.Email,
                                           inputData.TC54.Password,
                                           inputData.TC54.ConfirmPass,
                                           inputData.TC54.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC55.UserName,
                                           inputData.TC55.FirstName,
                                           inputData.TC55.LastName,
                                           inputData.TC55.Email,
                                           inputData.TC55.Password,
                                           inputData.TC55.ConfirmPass,
                                           inputData.TC55.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC56.UserName,
                                           inputData.TC56.FirstName,
                                           inputData.TC56.LastName,
                                           inputData.TC56.Email,
                                           inputData.TC56.Password,
                                           inputData.TC56.ConfirmPass,
                                           inputData.TC56.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC57.UserName,
                                           inputData.TC57.FirstName,
                                           inputData.TC57.LastName,
                                           inputData.TC57.Email,
                                           inputData.TC57.Password,
                                           inputData.TC57.ConfirmPass,
                                           inputData.TC57.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC58.UserName,
                                           inputData.TC58.FirstName,
                                           inputData.TC58.LastName,
                                           inputData.TC58.Email,
                                           inputData.TC58.Password,
                                           inputData.TC58.ConfirmPass,
                                           inputData.TC58.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC59.UserName,
                                           inputData.TC59.FirstName,
                                           inputData.TC59.LastName,
                                           inputData.TC59.Email,
                                           inputData.TC59.Password,
                                           inputData.TC59.ConfirmPass,
                                           inputData.TC59.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC60.UserName,
                                           inputData.TC60.FirstName,
                                           inputData.TC60.LastName,
                                           inputData.TC60.Email,
                                           inputData.TC60.Password,
                                           inputData.TC60.ConfirmPass,
                                           inputData.TC60.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC61.UserName,
                                           inputData.TC61.FirstName,
                                           inputData.TC61.LastName,
                                           inputData.TC61.Email,
                                           inputData.TC61.Password,
                                           inputData.TC61.ConfirmPass,
                                           inputData.TC61.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC62.UserName,
                                           inputData.TC62.FirstName,
                                           inputData.TC62.LastName,
                                           inputData.TC62.Email,
                                           inputData.TC62.Password,
                                           inputData.TC62.ConfirmPass,
                                           inputData.TC62.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC63.UserName,
                                           inputData.TC63.FirstName,
                                           inputData.TC63.LastName,
                                           inputData.TC63.Email,
                                           inputData.TC63.Password,
                                           inputData.TC63.ConfirmPass,
                                           inputData.TC63.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC64.UserName,
                                           inputData.TC64.FirstName,
                                           inputData.TC64.LastName,
                                           inputData.TC64.Email,
                                           inputData.TC64.Password,
                                           inputData.TC64.ConfirmPass,
                                           inputData.TC64.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC65.UserName,
                                           inputData.TC65.FirstName,
                                           inputData.TC65.LastName,
                                           inputData.TC65.Email,
                                           inputData.TC65.Password,
                                           inputData.TC65.ConfirmPass,
                                           inputData.TC65.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC66.UserName,
                                           inputData.TC66.FirstName,
                                           inputData.TC66.LastName,
                                           inputData.TC66.Email,
                                           inputData.TC66.Password,
                                           inputData.TC66.ConfirmPass,
                                           inputData.TC66.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC67.UserName,
                                           inputData.TC67.FirstName,
                                           inputData.TC67.LastName,
                                           inputData.TC67.Email,
                                           inputData.TC67.Password,
                                           inputData.TC67.ConfirmPass,
                                           inputData.TC67.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC68.UserName,
                                           inputData.TC68.FirstName,
                                           inputData.TC68.LastName,
                                           inputData.TC68.Email,
                                           inputData.TC68.Password,
                                           inputData.TC68.ConfirmPass,
                                           inputData.TC68.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC69.UserName,
                                           inputData.TC69.FirstName,
                                           inputData.TC69.LastName,
                                           inputData.TC69.Email,
                                           inputData.TC69.Password,
                                           inputData.TC69.ConfirmPass,
                                           inputData.TC69.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC70.UserName,
                                           inputData.TC70.FirstName,
                                           inputData.TC70.LastName,
                                           inputData.TC70.Email,
                                           inputData.TC70.Password,
                                           inputData.TC70.ConfirmPass,
                                           inputData.TC70.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC71.UserName,
                                           inputData.TC71.FirstName,
                                           inputData.TC71.LastName,
                                           inputData.TC71.Email,
                                           inputData.TC71.Password,
                                           inputData.TC71.ConfirmPass,
                                           inputData.TC71.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC72.UserName,
                                           inputData.TC72.FirstName,
                                           inputData.TC72.LastName,
                                           inputData.TC72.Email,
                                           inputData.TC72.Password,
                                           inputData.TC72.ConfirmPass,
                                           inputData.TC72.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC73.UserName,
                                           inputData.TC73.FirstName,
                                           inputData.TC73.LastName,
                                           inputData.TC73.Email,
                                           inputData.TC73.Password,
                                           inputData.TC73.ConfirmPass,
                                           inputData.TC73.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC74.UserName,
                                           inputData.TC74.FirstName,
                                           inputData.TC74.LastName,
                                           inputData.TC74.Email,
                                           inputData.TC74.Password,
                                           inputData.TC74.ConfirmPass,
                                           inputData.TC74.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC75.UserName,
                                           inputData.TC75.FirstName,
                                           inputData.TC75.LastName,
                                           inputData.TC75.Email,
                                           inputData.TC75.Password,
                                           inputData.TC75.ConfirmPass,
                                           inputData.TC75.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC76.UserName,
                                           inputData.TC76.FirstName,
                                           inputData.TC76.LastName,
                                           inputData.TC76.Email,
                                           inputData.TC76.Password,
                                           inputData.TC76.ConfirmPass,
                                           inputData.TC76.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC77.UserName,
                                           inputData.TC77.FirstName,
                                           inputData.TC77.LastName,
                                           inputData.TC77.Email,
                                           inputData.TC77.Password,
                                           inputData.TC77.ConfirmPass,
                                           inputData.TC77.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC78.UserName,
                                           inputData.TC78.FirstName,
                                           inputData.TC78.LastName,
                                           inputData.TC78.Email,
                                           inputData.TC78.Password,
                                           inputData.TC78.ConfirmPass,
                                           inputData.TC78.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC79.UserName,
                                           inputData.TC79.FirstName,
                                           inputData.TC79.LastName,
                                           inputData.TC79.Email,
                                           inputData.TC79.Password,
                                           inputData.TC79.ConfirmPass,
                                           inputData.TC79.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC80.UserName,
                                           inputData.TC80.FirstName,
                                           inputData.TC80.LastName,
                                           inputData.TC80.Email,
                                           inputData.TC80.Password,
                                           inputData.TC80.ConfirmPass,
                                           inputData.TC80.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC81.UserName,
                                           inputData.TC81.FirstName,
                                           inputData.TC81.LastName,
                                           inputData.TC81.Email,
                                           inputData.TC81.Password,
                                           inputData.TC81.ConfirmPass,
                                           inputData.TC81.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC82.UserName,
                                           inputData.TC82.FirstName,
                                           inputData.TC82.LastName,
                                           inputData.TC82.Email,
                                           inputData.TC82.Password,
                                           inputData.TC82.ConfirmPass,
                                           inputData.TC82.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC83.UserName,
                                           inputData.TC83.FirstName,
                                           inputData.TC83.LastName,
                                           inputData.TC83.Email,
                                           inputData.TC83.Password,
                                           inputData.TC83.ConfirmPass,
                                           inputData.TC83.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC84.UserName,
                                           inputData.TC84.FirstName,
                                           inputData.TC84.LastName,
                                           inputData.TC84.Email,
                                           inputData.TC84.Password,
                                           inputData.TC84.ConfirmPass,
                                           inputData.TC84.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC85.UserName,
                                           inputData.TC85.FirstName,
                                           inputData.TC85.LastName,
                                           inputData.TC85.Email,
                                           inputData.TC85.Password,
                                           inputData.TC85.ConfirmPass,
                                           inputData.TC85.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC86.UserName,
                                           inputData.TC86.FirstName,
                                           inputData.TC86.LastName,
                                           inputData.TC86.Email,
                                           inputData.TC86.Password,
                                           inputData.TC86.ConfirmPass,
                                           inputData.TC86.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC87.UserName,
                                           inputData.TC87.FirstName,
                                           inputData.TC87.LastName,
                                           inputData.TC87.Email,
                                           inputData.TC87.Password,
                                           inputData.TC87.ConfirmPass,
                                           inputData.TC87.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC88.UserName,
                                           inputData.TC88.FirstName,
                                           inputData.TC88.LastName,
                                           inputData.TC88.Email,
                                           inputData.TC88.Password,
                                           inputData.TC88.ConfirmPass,
                                           inputData.TC88.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC89.UserName,
                                           inputData.TC89.FirstName,
                                           inputData.TC89.LastName,
                                           inputData.TC89.Email,
                                           inputData.TC89.Password,
                                           inputData.TC89.ConfirmPass,
                                           inputData.TC89.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC90.UserName,
                                           inputData.TC90.FirstName,
                                           inputData.TC90.LastName,
                                           inputData.TC90.Email,
                                           inputData.TC90.Password,
                                           inputData.TC90.ConfirmPass,
                                           inputData.TC90.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC91.UserName,
                                           inputData.TC91.FirstName,
                                           inputData.TC91.LastName,
                                           inputData.TC91.Email,
                                           inputData.TC91.Password,
                                           inputData.TC91.ConfirmPass,
                                           inputData.TC91.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC92.UserName,
                                           inputData.TC92.FirstName,
                                           inputData.TC92.LastName,
                                           inputData.TC92.Email,
                                           inputData.TC92.Password,
                                           inputData.TC92.ConfirmPass,
                                           inputData.TC92.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC93.UserName,
                                           inputData.TC93.FirstName,
                                           inputData.TC93.LastName,
                                           inputData.TC93.Email,
                                           inputData.TC93.Password,
                                           inputData.TC93.ConfirmPass,
                                           inputData.TC93.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC94.UserName,
                                           inputData.TC94.FirstName,
                                           inputData.TC94.LastName,
                                           inputData.TC94.Email,
                                           inputData.TC94.Password,
                                           inputData.TC94.ConfirmPass,
                                           inputData.TC94.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC95.UserName,
                                           inputData.TC95.FirstName,
                                           inputData.TC95.LastName,
                                           inputData.TC95.Email,
                                           inputData.TC95.Password,
                                           inputData.TC95.ConfirmPass,
                                           inputData.TC95.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC96.UserName,
                                           inputData.TC96.FirstName,
                                           inputData.TC96.LastName,
                                           inputData.TC96.Email,
                                           inputData.TC96.Password,
                                           inputData.TC96.ConfirmPass,
                                           inputData.TC96.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC97.UserName,
                                           inputData.TC97.FirstName,
                                           inputData.TC97.LastName,
                                           inputData.TC97.Email,
                                           inputData.TC97.Password,
                                           inputData.TC97.ConfirmPass,
                                           inputData.TC97.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC98.UserName,
                                           inputData.TC98.FirstName,
                                           inputData.TC98.LastName,
                                           inputData.TC98.Email,
                                           inputData.TC98.Password,
                                           inputData.TC98.ConfirmPass,
                                           inputData.TC98.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC99.UserName,
                                           inputData.TC99.FirstName,
                                           inputData.TC99.LastName,
                                           inputData.TC99.Email,
                                           inputData.TC99.Password,
                                           inputData.TC99.ConfirmPass,
                                           inputData.TC99.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC100.UserName,
                                           inputData.TC100.FirstName,
                                           inputData.TC100.LastName,
                                           inputData.TC100.Email,
                                           inputData.TC100.Password,
                                           inputData.TC100.ConfirmPass,
                                           inputData.TC100.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC101.UserName,
                                           inputData.TC101.FirstName,
                                           inputData.TC101.LastName,
                                           inputData.TC101.Email,
                                           inputData.TC101.Password,
                                           inputData.TC101.ConfirmPass,
                                           inputData.TC101.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC102.UserName,
                                           inputData.TC102.FirstName,
                                           inputData.TC102.LastName,
                                           inputData.TC102.Email,
                                           inputData.TC102.Password,
                                           inputData.TC102.ConfirmPass,
                                           inputData.TC102.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC103.UserName,
                                           inputData.TC103.FirstName,
                                           inputData.TC103.LastName,
                                           inputData.TC103.Email,
                                           inputData.TC103.Password,
                                           inputData.TC103.ConfirmPass,
                                           inputData.TC103.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC104.UserName,
                                           inputData.TC104.FirstName,
                                           inputData.TC104.LastName,
                                           inputData.TC104.Email,
                                           inputData.TC104.Password,
                                           inputData.TC104.ConfirmPass,
                                           inputData.TC104.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC105.UserName,
                                           inputData.TC105.FirstName,
                                           inputData.TC105.LastName,
                                           inputData.TC105.Email,
                                           inputData.TC105.Password,
                                           inputData.TC105.ConfirmPass,
                                           inputData.TC105.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC106.UserName,
                                           inputData.TC106.FirstName,
                                           inputData.TC106.LastName,
                                           inputData.TC106.Email,
                                           inputData.TC106.Password,
                                           inputData.TC106.ConfirmPass,
                                           inputData.TC106.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC107.UserName,
                                           inputData.TC107.FirstName,
                                           inputData.TC107.LastName,
                                           inputData.TC107.Email,
                                           inputData.TC107.Password,
                                           inputData.TC107.ConfirmPass,
                                           inputData.TC107.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC108.UserName,
                                           inputData.TC108.FirstName,
                                           inputData.TC108.LastName,
                                           inputData.TC108.Email,
                                           inputData.TC108.Password,
                                           inputData.TC108.ConfirmPass,
                                           inputData.TC108.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC109.UserName,
                                           inputData.TC109.FirstName,
                                           inputData.TC109.LastName,
                                           inputData.TC109.Email,
                                           inputData.TC109.Password,
                                           inputData.TC109.ConfirmPass,
                                           inputData.TC109.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    using(testdata, function(inputData) {
        it('To validate and check registration flow of user', function() {

            browser.restart();
            browser.get("https://qaglo.mainline.gg/signup");
            var homePage = new home();
               
                homePage.updateUserDetails(inputData.TC110.UserName,
                                           inputData.TC110.FirstName,
                                           inputData.TC110.LastName,
                                           inputData.TC110.Email,
                                           inputData.TC110.Password,
                                           inputData.TC110.ConfirmPass,
                                           inputData.TC110.Date,
                                           );
                homePage.clickSubmit();

            
        });
    });
    
});


