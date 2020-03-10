/// <reference types="Cypress" />

describe("todo", () => {
    it("no todos", () => {
        cy.visit("http://localhost:8888")
        cy.get('.todo-list').should("not.exist")
    })
})


// This one will find it so it will throw an error
// describe("todo", () => {
//     it("no todos", () => {
//         const todo = "another todo"

//         cy.visit("http://localhost:8888")
//         cy.get('.new-todo')
//             .click()
//             .type(todo + "{enter}")
//         cy.get('.todo-list').should("not.exist")
//     })
// })