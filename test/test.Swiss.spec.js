


describe('Swiss flow E2E', function() {
  
    
    browser.get('https://avengers-qa.mainline.gg/sprint10/10nov/-/tournament/matches?matchGuid=8c5a7a2b-a5c3-45f1-ba98-142110482cb7');
    browser.sleep(1000);
    
    it('to validate and check Login flow of user', function() {
    
       
        element(by.xpath("//span[.='Login']")).click();
        browser.sleep(1000);
       
        element(by.css('input[formcontrolname="email"]')).sendKeys('Gamer1300@mailinator.com');
        browser.sleep(1000);
        element(by.css('input[formcontrolname="password"]')).sendKeys('Test1234');
        browser.sleep(1000);
        element(by.xpath("//span[.='LOGIN']")).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(2000);
    })
    it('to validate and scrolling flow of user', function() {
        browser.executeScript('window.scrollTo(0,500);');
       
         browser.sleep(2000);
    })
    it('to validate and checking flow of user', function() {
        
        element(by.linkText(' Check In ')).click();
        
         browser.sleep(2000);
    })
    
  });
