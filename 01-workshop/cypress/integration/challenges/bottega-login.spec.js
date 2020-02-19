/**
 * Navigate to the bottega page
 * Click the green login button
 * Assert we're on the right page
 * Fill out the form
 * Click the login button
 * Assert we're at the profile page
 * Assert name is visible
 */


describe('devcamp', () => {
    it('Logs in', () => {
        cy.visit('https://devcamp.com')
        cy.get('.mc-closeModal')
           .click({timeout: 10000})
        cy.get('.navbar-right > .btn-default')
           .contains('Log in')
           .click()
        cy.url()
            .should('include', '/users/sign_in')
        cy.get('#user_email')
            .type('email@email.com')
        cy.get('#user_password')
            .type('password')
        cy.get('.signin-button')
            .click()
        cy.get('.username')
            .should('contain', 'UserName LastName')
    })
})