
//var reportPath = require('../Report/GenerateReport.js');
var baseClass = require('../BaseClass/BaseClass.js');

var Login = function()
{
    var base = new baseClass();


       var btnMatch =  element(by.linkText('MATCHES')).click();   
       var firstcheckinbtn = element(by.css('.mat-row:nth-child(2) > .mat-column-team-a-info .info'));
       var firstconfirmbtn = element(by.css('.mat-flat-button:nth-child(1) > .mat-button-wrapper'));
       var seccheckinbtn =  element(by.css('.checkin-wrapper:nth-child(2) .btn-team-name'));
        var secconfirmbtn =element(by.css('.mat-flat-button:nth-child(1) > .mat-button-wrapper'));

    this.clickMatch = function() {
        btnMatch.isDisplayed().then(function(exist) {
       
       base.click(btnMatch);
       
       base.scroll(btnMatch)
       
       console.log("Successful : Clicked on Login Button");
       browser.sleep(1000);
     });
    }
    this.click1stCheckin = function() {
        firstcheckinbtn.isDisplayed().then(function(exist) {
        //  base.scrollUp();
         base.click(firstcheckinbtn);
      
       console.log("Successful : Clicked on Login Button");
       browser.sleep(1000);
     });
    }
  
    this.click1stConfirm = function(resultdir) {
        firstconfirmbtn.isDisplayed().then(function(exist) {
        // base.scrollUp();
         base.click(firstconfirmbtn);
       console.log("Successful : Clicked Login Button on modal");
       browser.sleep(1000);
       });
    }


};
module.exports = Login