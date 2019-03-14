module.exports = { 
    'tags' : ['testcase8'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://kaspi.kz/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    browser.saveScreenshot('./screenshots/demo1.png')
    .click('#headerRegionConfirm__ConfirmButton') 
    .assert.visible('#headerRegionId') 
    .pause(1000) 
    browser.end(); 
    } 
    };
    