
//var reportPath = require('../Report/GenerateReport.js');
var baseClass = require('../BaseClass/BaseClass.js');
var waitPage = require("../Wait/Wait.js");

var MainlineHome = function()
{
    var base = new baseClass();
    var wait = new waitPage();

    var txtUserName = element(by.xpath("//input[@id='mat-input-0']"));
    var txtFirstName = element(by.css('input[formcontrolname="firstName"]'));
    var txtLastName = element(by.css('input[formcontrolname="lastName"]'));
    var txtEmail = element(by.css('input[formcontrolname="email"]'));
    //var txtUserName = element(by.css('input[formControlName="handle"]'));
    
    var txtPassword = element(by.css('input[formcontrolname="password"]'));
    var txtConfirmPassword = element(by.css('input[formcontrolname="confirmPassword"]'));
    var txtBirthdate = element(by.id('birthdate'));
    var btnCreaAcc = element(by.xpath("//span[.='CREATE ACCOUNT']"));

    
   
    this.updateUserDetails = function(UserName, FirstName, LastName, Email, Password, ConfirmPass, Date) {
        txtUserName.isDisplayed().then(function(exist) {
            base.enterText(txtUserName,UserName);
            browser.waitForAngularEnabled(false);
            console.log("Successful : Updated Firstname :"+UserName);
            browser.sleep(250);
        
        }); 
        txtFirstName.isDisplayed().then(function(exist) {
            base.enterText(txtFirstName,FirstName);
            console.log("Successful : Updated Firstname :"+FirstName);
            browser.sleep(250);
            console.log("Updated Firstname :"+FirstName, "Successful", "Done");
       
        });
        txtLastName.isDisplayed().then(function(exist) {
            base.enterText(txtLastName,LastName);
            console.log("Successful : Updated LastName :"+LastName);
            browser.sleep(250);
            console.log("Updated LastName :"+LastName, "Successful", "Done");
    
        });

        txtEmail.isDisplayed().then(function(exist) {
            base.enterText(txtEmail,Email);
            console.log("Successful : Updated Email :"+Email);
            browser.sleep(250);
            console.log("Updated Email :"+Email, "Successful", "Done");
     
        });
    
        txtPassword.isDisplayed().then(function(exist) {
            base.enterText(txtPassword,Password);
            console.log("Successful : Updated Password : XXXXXXX");
            browser.sleep(250);
            console.log("Updated Password : XXXXXXX", "Successful", "Done");
       
        });
        txtConfirmPassword.isDisplayed().then(function(exist) {
            base.enterText(txtConfirmPassword,Password);
            console.log("Successful : Updated Password : XXXXXXX");
            browser.sleep(250);
         
        });
        txtBirthdate.isDisplayed().then(function(exist) {
            base.enterText(txtBirthdate,Date);
            console.log("Successful : Updated Date :"+Date);
            browser.sleep(250);
          
        });
    }
    this.clickSubmit = function() {
        btnCreaAcc.isDisplayed().then(function(exist) {
            base.click(btnCreaAcc);
            console.log("Successful : Clicked on Submit");
            browser.sleep(1000);
 
        
       
       });
       
    }
    
    
};

module.exports = MainlineHome