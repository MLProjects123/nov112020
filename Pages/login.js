
//var reportPath = require('../Report/GenerateReport.js');
var baseClass = require('../BaseClass/BaseClass.js');

var Login = function()
{
    var base = new baseClass();

       var btnLOGIN = element(by.xpath("//span[.='Login']"));
       var loginemail = element(by.css('input[formcontrolname="email"]'));
       var loginPW = element(by.css('input[formcontrolname="password"]'));
       var loginbtn = element(by.xpath("//span[.='LOGIN']"));


    this.clickLogin = function() {
       btnLOGIN.isDisplayed().then(function(exist) {
       base.click(btnLOGIN);
       console.log("Successful : Clicked on Login Button");
       browser.sleep(1000);
     });
    }
    this.LoginUserDetails = function(LoginEmail, LoginPassword) {
    loginemail.isDisplayed().then(function(exist) {
       base.enterText(loginemail,LoginEmail); 
       console.log("Successful : Updated Email :"+LoginEmail);
       browser.sleep(250);
    });
    loginPW.isDisplayed().then(function(exist) {
       base.enterText(loginPW,LoginPassword);
       console.log("Successful : Updated Password : XXXXXXX");
       browser.sleep(250);
       
    });
 
    }
    this.clickLoginModal = function(resultdir) {
       loginbtn.isDisplayed().then(function(exist) {
       base.click(loginbtn);
       console.log("Successful : Clicked Login Button on modal");
       browser.sleep(1000);
       });
    }


};
module.exports = Login