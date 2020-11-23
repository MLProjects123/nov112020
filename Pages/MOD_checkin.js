

var reportPath = require('../Report/GenerateReport.js');
var baseClass = require('../BaseClass/BaseClass.js');
var waitPage = require("../Wait/Wait.js");

var HomePage = function()
{
    var Report = new reportPath();
    var base = new baseClass();
    var wait = new waitPage();
//scroll

  
  var matchbtn= element(by.xpath("MATCHES"));
  var Teamb = element(by.xpath("//span[contains(.,'TeamB')]"));
  var TeamD = element(by.xpath("//span[contains(.,'TeamD')]"));
   var checkinbtn1 = element(by.xpath("//div[4]/div/div/div/button"));
  var confirmbtn = element(by.xpathh("//span[contains(.,'CONFIRM')]"));
  var checkinbtn2 = element(by.xpath("//div[2]/button/span"));
  var checkinbtn3 = element(by.xpathh("//div[4]/div/div/div/button/span"));
  var checkinbtn4 = element(by.xpath("//div[2]/button/span/span"));

    this.navigateToMatchButton = function(resultdir) {
        matchbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",matchbtn);
            wait.waitTillElementPresent(matchbtn);
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
    
    this.navigateToTeambButton = function(resultdir) {
        Teamb.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",Teamb);
            wait.waitTillElementPresent(Teamb);
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
    this.navigateToCheck1stbutton = function(resultdir) {
        checkinbtn1.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",checkinbtn1);
            wait.waitTillElementPresent(checkinbtn1);
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
    this.navigateToConfirmbutton = function(resultdir) {
        confirmbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",confirmbtn);
            wait.waitTillElementPresent(confirmbtn);
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
    this.navigateToCheckinbtn2 = function(resultdir) {
        checkinbtn2.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",checkinbtn2);
            wait.waitTillElementPresent(checkinbtn2);
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
    this.navigateToConfirmbutton = function(resultdir) {
        confirmbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",confirmbtn);
            wait.waitTillElementPresent(confirmbtn);
            base.click();
            console.log("Successful : Sign Up Now btn Displayed");
            Report.udpateResult(resultdir,"Sign Up Now btn Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Set Up section Not Displayed");
            Report.udpateResult(resultdir,"Set Up section Not Displayed", "Unsuccessful", "Fail");
        });
        browser.navigate().back();
    }
    this.navigateToMatchButton = function(resultdir) {
        matchbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",matchbtn);
            wait.waitTillElementPresent(matchbtn);
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
    
    this.navigateToTeamDButton = function(resultdir) {
        TeamD.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",TeamD);
            wait.waitTillElementPresent(TeamD);
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
    this.navigateToCheckinbtn3 = function(resultdir) {
        checkinbtn3.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",checkinbtn3);
            wait.waitTillElementPresent(checkinbtn3);
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
    this.navigateToConfirmbutton = function(resultdir) {
        confirmbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",confirmbtn);
            wait.waitTillElementPresent(confirmbtn);
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
    this.navigateToCheckinbtn4 = function(resultdir) {
        checkinbtn4.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",checkinbtn4);
            wait.waitTillElementPresent(checkinbtn4);
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
    this.navigateToConfirmbutton = function(resultdir) {
        confirmbtn.isDisplayed().then(function(exist){
            browser.executeScript("arguments[0].scrollIntoView();",confirmbtn);
            wait.waitTillElementPresent(confirmbtn);
            base.click();
            console.log("Successful : Sign Up Now btn Displayed");
            Report.udpateResult(resultdir,"Sign Up Now btn Displayed", "Successful", "Pass");
            browser.sleep(1000);
        },
        function(err) {
            console.error("Unsuccessful : Set Up section Not Displayed");
            Report.udpateResult(resultdir,"Set Up section Not Displayed", "Unsuccessful", "Fail");
        });
        browser.navigate().back();
    }


};


module.exports = HomePage