module.exports = { 
    'tags' : ['testcase3'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=?l=russian&re..') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .setValue('#input_username', 'tungpr12') 
    .setValue('#input_password', 'dasdasdada') 
    .click('#login_btn_signin > button > span') 
    // .waitForElementVisible('#error_display', 1000) // wait till page loads 
    .assert.visible('#error_display') 
    .click('#link_forgot_password') 
    //.waitForElementVisible('body', 1000) // wait till page loads 
    .assert.visible('#wizard_contents > div > div > a:nth-child(2) > span')
    .click('#wizard_contents > div > div > a:nth-child(2) > span') 
    .end(); 
    } 
    };