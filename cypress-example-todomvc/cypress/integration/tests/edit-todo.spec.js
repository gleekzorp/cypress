/// <reference types="Cypress" />

describe("todo", () => {
    it("add a todo, edit todo", () => {
        const todo = "another todo"
        const todoTwo = "a new todo"
        
        cy.visit("http://localhost:8888")
        cy.get('.new-todo')
            .click()
            .type(todo + "{enter}")
            .should("be.empty")
            cy.get(".todo-list > li")
                .eq(0)
                .should("contain", todo)
                .dblclick()
            cy.get('.edit')
                .clear()
                .type(todoTwo + "{enter}")
            cy.get(".todo-list > li")
                .eq(0)
                .should("contain", todoTwo)
    })
})