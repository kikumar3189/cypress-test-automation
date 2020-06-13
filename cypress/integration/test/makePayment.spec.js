describe("User makes a new payment", () => {
    
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
        cy.get("#signin_button").click()

        cy.fixture("user").then(user => {
            const id = user.username
            const password = user.password
            cy.login(id, password)

        })

    })

    it("User sends a new payment", () => {
        cy.get("#pay_bills_tab").click()
        cy.contains("Pay Saved Payee").click()
        cy.get("#sp_payee").select("wellsfargo")
        cy.get("#sp_account").select("Credit Card")
        cy.get("#sp_amount").type("2000")
        cy.get("#sp_date").type("2020-06-13 {enter}")
        cy.get("#sp_description").type("Making new payment")
        cy.get("#pay_saved_payees").click()
    
    })

    it("Success message should be displayed", () => {
        cy.get("#alert_content").should("be.visible")
        .and("contain", "The payment was successfully submitted.")
    })
})