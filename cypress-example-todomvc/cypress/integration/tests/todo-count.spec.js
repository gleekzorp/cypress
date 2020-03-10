/// <reference types="Cypress" />

// Test Single Todo
// describe("count todos", () => {
//     it("add a todo and make sure todo count is 1", () => {
//         const todo = "another todo"
        
//         cy.visit("http://localhost:8888")
//         cy.get('.new-todo')
//             .click()
//             .type(todo + "{enter}")
//             .should("be.empty")
//         cy.get(".todo-list")
//             .should("contain", todo)
//         cy.get('.todo-count')
//             .should('contain', 1)
//     })
// })


// Test Multiple Todos
describe("count todos", () => {
    it("adds multiple todos and makes sure todo count is correct", () => {
        const listOfTodos = ['another todo', 'a different todo', 'another']

        cy.visit("http://localhost:8888")
        
        listOfTodos.forEach((todo, index) => {
            cy.get('.new-todo')
                .click()
                .type(todo + "{enter}")
                .should("be.empty")
            cy.get(".todo-list > li")
                .eq(index)
                .should("contain", todo)
            cy.get('.todo-count')
                .should('contain', (index + 1))
        })
    })
})