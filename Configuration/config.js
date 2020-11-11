exports.config = {
    directConnect:'true',
      capabilities: {
        'browserName': 'chrome'
      },

    directConnect: true,
   //capabilities: { browserName: 'chrome', chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=800,600"] } },
   
   framework: 'jasmine',
    //specs:['../TestScript/TC04*'],
    specs:['../TestScript/test.Swiss*'],
    //specs:['../TestScript/test.createAcc*'],
   // params: require('../TestData/CommonData.json'),

//    allScriptsTimeout: 20000,
//  suites: {
//         smoke: './smoke/*.spec.js',
//         full: './**/*.spec.js',
//         login: './login/*.spec.js'
//     },
    

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
    }
    
};

// exports.config = {
//   allScriptsTimeout: 110000,
//   getPageTimeout: 110000,
//   specs:['../TestScript/test.Swiss*'],

//   capabilities: {
// browserName: 'chrome'
//   },
//   directConnect: true,
//   ///baseUrl: 'http://localhost:8123/',
//   framework: 'jasmine',
//   jasmineNodeOpts: {
//  showTiming: true,
// showColors: true,
// includeStackTrace: false,
// defaultTimeoutInterval: 600000
//   },

  
// }