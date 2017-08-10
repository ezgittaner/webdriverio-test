'use strict'
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    const title = browser.url('https://www.ciceksepeti.com/cicek').getTitle()
    assert.equal(title, 'Çiçek Siparişi, Çiçek Gönder, Online Çiçekçi - Çiçek Sepeti')
   
    console.log(browser.getText('pagination-area'));
  })
})
