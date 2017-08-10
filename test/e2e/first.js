'use strict'
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    const title = browser.url('https://www.ciceksepeti.com/').getTitle()
    assert.equal(title, 'Çiçek Sepeti - Türkiye\'nin En Büyük Çiçek Sitesi')
   
    console.log(browser.getText('.pagination-area'))
  })
})
