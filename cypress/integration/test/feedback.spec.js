describe("User Submits feedback for the app", () => {
    
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
        
    })

    it("Validate feedback page is loaded", () => {
        cy.get("#feedback").click()
        cy.get("form").should("be.visible")
    })

    it("User fills feedback form", () => {
        cy.get("#name").type("Kishor")
        cy.get("#email").type("Kishor.kumar@example.com")
        cy.get("#subject").type("This is feedback subject")
        cy.get("#comment").type("This is feedback content")
        
    })

    it("User submits feedback", () => {
        cy.get(".btn-signin").click()
    })

    it("Validate that feedback message is displayed", () => {
        cy.get("#feedback-title").contains("Feedback")
    })
})