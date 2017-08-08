'use strict'
const assert = require('assert')

describe('Second Test Group', () => {
  it('gets the title of GitHub toppage', () => {
    const title = browser.url('https://github.com/').getTitle()
    assert.equal(title, 'The world\'s leading software development platform · GitHub')
    browser.waitForVisible('#myElem', 5000);
  })
})
