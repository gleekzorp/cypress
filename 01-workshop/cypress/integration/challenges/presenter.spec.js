// Make intellisense to work
/// <reference types="cypress" />


// Challenge for Week 2
// Visit qap.dev (the qa at the point website)
// Click on become a presenter
// Assert that you are at the correct URL




// describe('Go to qap, find become a presenter, click and assert your on the the right page', function() {
//   it('visits qap', function() {
//     cy.visit('https://qap.dev')

//     cy.contains('Become a Presenter →').click()
//     cy.url().should('include', '/present-at-qap')
//   })
// })




// Arrow Functions and context
context('Go to qap, find become a presenter, click and assert your on the the right page', () => {
  it('visits qap', () => {
    cy.visit('https://qap.dev')

    // cy.get('#yui_3_17_2_1_1582076051721_110 > .sqs-block-button-element--medium')
    cy.get('.sqs-block-button-element--medium')
    // cy.contains('Become a Presenter →')
    .click()

    cy.url()
    .should('include', '/present-at-qap')
  })
})