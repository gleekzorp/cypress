/// <reference types="Cypress" />

// Test Single
describe("add todo and mark complete", () => {
    it("marks todo complete", () => {
        const todo = "another todo"
        
        cy.visit("http://localhost:8888")
        cy.get('.new-todo')
            .click()
            .type(todo + "{enter}")
            .should("be.empty")
        cy.get(".todo-list")
            .should("contain", todo)
        cy.get('.todo-count')
            .should('contain', 1)
        cy.get(".todo-list > li .toggle")
            .check()
        cy.get('.todo-list > li')
            .should('have.class', 'completed')
    })
})


// Test Multiple
// describe("add multiple todos and mark complete", () => {
//     it("marks multiple todos complete and checks count", () => {
//         const listOfTodos = ['another todo', 'a different todo', 'another']

//         cy.visit("http://localhost:8888")
        
//         listOfTodos.forEach((todo, index) => {
//             cy.get('.new-todo')
//                 .click()
//                 .type(todo + "{enter}")
//                 .should("be.empty")
//             cy.get(".todo-list > li")
//                 .eq(index)
//                 .should("contain", todo)
//             cy.get('.todo-count')
//                 .should('contain', 1)
//             cy.get(".todo-list > li .toggle")
//                 .eq(index)
//                 .check()
//             cy.get('.todo-list > li')
//                 .eq(index)
//                 .should('have.class', 'completed')
//             cy.get('.todo-count')
//                 .should('contain', 0)
//         })
//     })
// })