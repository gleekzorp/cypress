describe("todo", () => {
    it("add a todo", () => {
        const todo = "another todo"
        cy.visit("http://localhost:8888")
        cy.get('.new-todo')
            .click()
            .type(todo + "{enter}")
        cy.get(".todo-list")
            .contains("li", todo)
    })
})