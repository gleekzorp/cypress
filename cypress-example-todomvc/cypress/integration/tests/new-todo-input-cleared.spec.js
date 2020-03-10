/// <reference types="Cypress" />

describe("todo", () => {
    it("add a todo", () => {
        const todo = "another todo"
        
        cy.visit("http://localhost:8888")
        cy.get('.new-todo')
            .click()
            .type(todo + "{enter}")
            .should("be.empty")
        cy.get(".todo-list")
            .should('contain', todo)
    })
})