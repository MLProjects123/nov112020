describe('Create Account flow E2E', function() {
      
   
    it('to validate and check Create Account flow of user', function() {
        

        browser.get("https://qaglo.mainline.gg/signup");

         element(by.xpath("//input[@id='mat-input-0']")).sendKeys("Gamer");
         element(by.css('input[formcontrolname="firstName"]')).sendKeys("Gamer601");
         element(by.css('input[formcontrolname="lastName"]')).sendKeys("601");
         element(by.css('input[formcontrolname="email"]')).sendKeys("gamer601@mailinator.com");
       
       
        //var txtUserName = element(by.css('input[formControlName="handle"]'));
        
         element(by.css('input[formcontrolname="password"]')) .sendKeys("Test1234");
         element(by.css('input[formcontrolname="confirmPassword"]')) .sendKeys("Test1234");
         element(by.id('birthdate')).sendKeys("12031991");
         element(by.xpath("//span[.='CREATE ACCOUNT']")).click();
      
    
});});