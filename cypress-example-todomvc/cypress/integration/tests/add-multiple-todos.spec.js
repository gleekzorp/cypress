/// <reference types="Cypress" />

// Test Multiple Checking Amount Before Marking Complete
describe("add any number of todos", () => {
    it("makes sure the todo is in the right spot", () => {
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
                .should('contain', 1)
            cy.get(".todo-list > li .toggle")
                .eq(index)
                .check()
            cy.get('.todo-list > li')
                .eq(index)
                .should('have.class', 'completed')
            cy.get('.todo-count')
                .should('contain', 0)
        })
    })
})


// Test multiple with marking complete
// describe("add any number of todos", () => {
//     it("makes sure the todo is in the right spot", () => {
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







// describe("add any number of todos", () => {
//     it("makes sure the todo is in the right spot", () => {
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
//                 .should('contain', (index + 1))
//         })
//     })
// })




// This is my attempt at using cypresses .each
// describe("todo", () => {
//     it("add any todo", () => {
//         cy.visit("http://localhost:8888")
//         const todo = "another todo"
//         const todoTwo = "a different todo"
//         const listOfTodos = [todo, todoTwo]
//         cy.get('.new-todo')
//             .click()
//             .type(todo + "{enter}")
//         cy.get('.new-todo')
//             .click()
//             .type(todoTwo + "{enter}")
//         cy.get(".todo-list > li")
//             .each((item, index) => {
//                 console.log(item[0].innerText === listOfTodos[index])
//             console.log(item, index)
//             item.has(listOfTodos[index])
//         })
//     })
// })




// Works with two elements
// describe("todo", () => {
//     it("add a todo", () => {
//         const todo = "another todo"
//         const todoTwo = "a different todo"
        
//         cy.visit("http://localhost:8888")
//         cy.get('.new-todo')
//             .click()
//             .type(todo + "{enter}")
//         cy.get('.new-todo')
//             .click()
//             .type(todoTwo + "{enter}")
//         cy.get(".todo-list > li")
//             .eq(0)
//             .contains(todo)
//         cy.get(".todo-list > li")
//             .eq(1)
//             .contains(todoTwo)
//     })
// })