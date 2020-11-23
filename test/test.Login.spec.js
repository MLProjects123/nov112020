describe('Login flow E2E', function() {
    it('to validate and check Login flow of user', function() {
      browser.get('https://avengers-qa.mainline.gg/sprint10/10nov/-/tournament/matches');
     
      
      element(by.xpath("//span[.='Login']")).click();
  
      element(by.css('input[formcontrolname="email"]')).clear().sendKeys('instantpost101@gmail.com');
     
      element(by.css('input[formcontrolname="password"]')).clear().sendKeys('Test1234');
     
      element(by.xpath("//span[.='LOGIN']")).click();
      browser.sleep(5000)
  
      
     browser.sleep(2000)
    });
  
    
  });


