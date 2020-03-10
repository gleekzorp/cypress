/// <reference types="Cypress" />

// Test Two
describe("add todo and mark complete", () => {
    it("marks todo complete", () => {
        const listOfTodos = ['another todo', 'a different todo']
        
        cy.visit("http://localhost:8888")

        listOfTodos.forEach((todo, index) => {
            cy.get('.new-todo')
                .click()
                .type(todo + "{enter}")
                .should("be.empty")
            cy.get(".todo-list")
                .should("contain", todo)
            cy.get('.todo-count')
                .should('contain', index + 1)
        })
        
        cy.get(".todo-list > li .toggle")
            .eq(0)
            .check()
        cy.get('.todo-list > li')
            .eq(0)
            .should('have.class', 'completed')
        cy.get('.filters > li')
            .eq(2)
            .click()
            .url()
            .should('include', 'http://localhost:8888/#/completed')
        cy.get('.todo-list > li')
            .should('have.length', 1)
            .should('contain', listOfTodos[0])
    })
})