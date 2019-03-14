module.exports = { 
    'tags' : ['testcase6'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/app/858810/Dawn_of_Man/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .click('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.btn_addtocart > a') 
    browser.saveScreenshot('./screenshots/demo.png')
    .click('#btn_purchase_self')

    .setValue('#input_username', 'tungpr12') 
    .setValue('#input_password', 'dasdasdada') 
    .pause(1000) 
    browser.end(); 
    } 
    };
    