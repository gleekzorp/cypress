/**
 * Navigate to the bottega page
 * Click the red signup button
 * Assert we're on the right page
 * Fill out the form
 * Click the create account button
 * Assert we're at the profile page
 * Assert name is visible
 */


//  Need to find a way to get rid of the popup
 describe('devcamp', () => {
     it('Sign Up', () => {
        cy.visit('https://devcamp.com')
        cy.get('.mc-closeModal')
            .click({timeout: 10000})
        cy.get('.navbar-right > .btn-primary')
            .contains('Sign up')
            .click()
        cy.get('#user_first_name')
            .type('UserName')
        cy.get('#user_last_name')
            .type('LastName')
        cy.get('#user_email')
            .type('email@email.com')
        cy.get('#user_password')
            .type('password')
        cy.get('#user_password_confirmation')
            .type('password')
        // cy.get('#submit-btn')
        //     .click()
     })
 })