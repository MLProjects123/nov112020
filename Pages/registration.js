

var reportPath = require('../Report/GenerateReport.js');
var baseClass = require('../BaseClass/BaseClass.js');
var waitPage = require("../Wait/Wait.js");

var HomePage = function()
{
    var Report = new reportPath();
    var base = new baseClass();
    var wait = new waitPage();
//scroll
   var SignUpNowbtn = element(by.xpath("//app-tournament-overview/div/div[2]/div/div/div/button/span"));
   var CreateTeambtn = element(by.xpath("//span[contains(.,\'CREATE NEW TEAM\')]"));
   var textFeild = element(by.xpath("mat-input-2"));
   var Savebtn = element(by.xpath("//button[2]/span"));
    var Cancelbtn = element(by.xpath(".cancel_button > .mat-button-wrapper"));
   var RegisterRosterbtn =element(by.xpath(".mat-flat-button .hide-mobile"));
 

    this.navigateSignUpNow = function(resultdir) {
        SignUpNowbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",SignUpNowbtn);
            wait.waitTillElementPresent(SignUpNowbtn);
            base.click();
            console.log("Successful : Sign Up Now btn Displayed");
            Report.udpateResult(resultdir,"Sign Up Now btn Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Set Up section Not Displayed");
            Report.udpateResult(resultdir,"Set Up section Not Displayed", "Unsuccessful", "Fail");
        });
    }
    this.navigateCreateTeambutton = function(resultdir) {
        CreateTeambtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",CreateTeambtn);
            wait.waitTillElementPresent(CreateTeambtn);
            base.click();
            console.log("Successful : Create Teamb Displayed");
            Report.udpateResult(resultdir,"Create Teambt Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Create Teamb Section Not Displayed");
            Report.udpateResult(resultdir,"Create Teamb Section Not Displayed", "Unsuccessful", "Fail");
        }); 
    }
    this.navigateToEnterText= function(resultdir) {
        textFeild.isDisplayed().then(function(exist){
           // browser.executeScript("arguments[0].scrollIntoView();",Configuration);
            base.enterText(textFeild,'WritingTeamName');
            wait.waitTillElementPresent(textFeild);
            console.log("Successful : textFeild Displayed");
            Report.udpateResult(resultdir,"textFeild Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : textFeild section Not Displayed");
            Report.udpateResult(resultdir,"textFeild section Not Displayed", "Unsuccessful", "Fail");
        });
    }
    
    this.navigateToSavebutton = function(resultdir) {
        Savebtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",Savebtn);
            wait.waitTillElementPresent(Savebtn);
            base.click();
            console.log("Successful : Savebtn Displayed");
            Report.udpateResult(resultdir,"Savebtn Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Savebtn section Not Displayed");
            Report.udpateResult(resultdir,"Savebtn section Not Displayed", "Unsuccessful", "Fail");
        });
    }
    this.navigateToCancelbtn = function(resultdir) {
        Cancelbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",Cancelbtn);
            wait.waitTillElementPresent(Cancelbtn);
            base.click();
            console.log("Successful : Cancelbtn Displayed");
            Report.udpateResult(resultdir,"Cancelbtn Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Cancelbtn section Not Displayed");
            Report.udpateResult(resultdir,"Cancelbtn section Not Displayed", "Unsuccessful", "Fail");
        });
    }
    this.navigateToRegisterbtn = function(resultdir) {
        RegisterRosterbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",RegisterRosterbtn);
            wait.waitTillElementPresent(RegisterRosterbtn);
            base.click(RegisterRosterbtn);
            console.log("Successful : Clicked on Tutorial");
            Report.udpateResult(resultdir,"Clicked on tutorial link", "Successful", "Done")
            browser.sleep(2000);
            Tutorial.isPresent().then(function(exist) {
                expect(exist).toBeTruthy();
                Report.udpateResult(resultdir,"Tutorial Page Displayed", "Successful", "Pass");
            });
        },
        function(err) {
            console.error("Unsuccessful : Tutorial Link Not Displayed");
            Report.udpateResult(resultdir,"Tutorial Link Not Displayed", "Unsuccessful", "Fail");
        }); 
    }    
};

module.exports = HomePage