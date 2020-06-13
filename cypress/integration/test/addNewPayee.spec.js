describe("User adds new payee", () => {
    
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
        cy.get("#signin_button").click()

        cy.fixture("user").then(user => {
            const id = user.username
            const password = user.password
            cy.get("#user_login").type(id)
            cy.get("#user_password").type(password)
            cy.get("#user_remember_me").click()
            cy.contains("Sign in").click()

        })

    })

    it("User adds new payee", () => {
        cy.get("#pay_bills_tab").click()
        cy.contains("Add New Payee").click()
        cy.get("#np_new_payee_name").type("Kishor")
        cy.get("#np_new_payee_address").type("New Delhi")
        cy.get("#np_new_payee_account").type("987234569")
        cy.get("#np_new_payee_details").type("Details")
        cy.get("#add_new_payee").click()

    })

    it("Success message should be displayed", () => {
        cy.get("#alert_content").should("be.visible")
        .and("contain", "The new payee Kishor was successfully created.")
    })
})