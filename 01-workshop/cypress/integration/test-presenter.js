// Challenge for Week 2
// Visit qap.dev (the qa at the point website)
// Click on become a presenter
// Assert that you are at the correct URL

describe('Go to qap, find become a presenter, click and assert your on the the right page', function() {
  it('visits qap', function() {
    cy.visit('https://qap.dev')

    cy.contains('Become a Presenter →').click()
    cy.url().should('include', '/present-at-qap')
  })
})