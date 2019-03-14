
module.exports = { 
    'tags' : ['testcase4'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=?l=russian&re..') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .click('#link_forgot_password') 
    .setValue('#link_forgot_password > div > p:nth-child(2) > input[type="email"]', 'tungpr123@mail.ru') 
    .click('#link_forgot_password > div > p:nth-child(3) > input') 
    .pause(1000) 
    .end(); 
    } 
    };