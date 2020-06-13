describe("User forgets password and resets using forgot password link", () => {
    
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
    })

    it("User clicks sign-in button", () => {
        cy.get("#signin_button").click()
    })

    it("User clicks Forgot Password link", () => {
        // Get a element of class offset3 and click
        cy.get(".offset3 > a").click()
    })

    it("User enters email address to receive password reset link", () => {
        cy.get("#user_email").type("kishor.kumar@example.com")
    })

    it("User submits the form", () => {
        cy.contains("Send Password").click()
    })
})