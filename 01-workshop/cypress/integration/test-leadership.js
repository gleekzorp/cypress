// Extra Credit
// Visit qap.dev 
// Navigate to the leadership page, using the UI
// Confirm Carlos Kidman is listed on the leadership page


describe('Go to qap, hover navigation, click leadership, assert Carlos', function() {
    it('visits qap', function() {
        cy.visit('https://qap.dev')
        cy.get('.Header-nav-inner > span:nth-child(1) > span:nth-child(2) > a:nth-child(2)')
        .click({ force: true })

        cy.get('#block-yui_3_17_2_29_1471286434871_44722 > .sqs-block-content > :nth-child(1) > strong')
        .should('contain', 'Carlos Kidman')
    })
})





//   Work on getting the hover to work
// describe('Go to qap, hover navigation, click leadership, assert Carlos', function() {
//     it('visits qap', function() {
//         cy.visit('https://qap.dev')
//         //   cy.get('a[href*="/about"]')
//         //   cy.get('.Header-nav-inner > span:first > a')
//         // cy.get('.Header-nav-inner > :nth-child(1)')
//         // .trigger('mouseenter')
//         // .wait(5000)

//         // cy.get('a[href*="leadership"]')
//         cy.get('.Header-nav-inner > span:nth-child(1) > span:nth-child(2) > a:nth-child(2)')
//         .click({ force: true })

//         cy.get('#block-yui_3_17_2_29_1471286434871_44722 > .sqs-block-content > :nth-child(1) > strong')
//         .contains('Carlos Kidman')
//         //   cy.contains('Become a Presenter →').click()
//         //   cy.url().should('include', '/present-at-qap')
//     })
//   })