module.exports = { 
    'tags' : ['testcase9'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://kaspi.kz/shop/c/computers/') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .click('body > div:nth-child(17) > div > div > div.dialog.animation-fadeIn.undefined > div.current-location__dialog > div > ul:nth-child(1) > li:nth-child(1) > a')
    .pause(1000)
    .click('#page > div.search-result.mount-search-result > div > div.filters > div:nth-child(2) > div > div.filters__filter-row._active > label.filters__filter-row__description > span.filters__filter-row__description-label')
    .click('#page > div.search-result.mount-search-result > div > div.filters > div:nth-child(3) > div > div.filters__filter-row._active > label.filters__filter-row__description > span.filters__filter-row__description-label') 
    .assert.visible('#heade#page > div.search-result.mount-search-result > div > div:nth-child(3) > div.item-cards-grid > div.item-cards-grid__cards > div:nth-child(1) > a > imgrRegionId') 
    .pause(1000) 
    .end(); 
    } 
    };