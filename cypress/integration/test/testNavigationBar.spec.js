describe("Test Navigation through the app", () => {

    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
    })

    it("Navigate to online banking", () => {
        cy.contains("Online Banking").click()
        cy.url().should("include", "online-banking.html")
        cy.get("h1").should("be.visible")
    })

    it("Navigate to feedback", () => {
        cy.contains("Feedback").click()
        cy.url().should("include", "feedback.html")
        
    })

    it("Navigate back to home", () => {
        cy.contains("Zero Bank").click()
        cy.url().should("include", "index.html")
    })

})