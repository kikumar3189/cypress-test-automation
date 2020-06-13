describe("User transfers funds", () => {
    
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

    it("User selects details", () => {
        cy.get("#transfer_funds_tab").click()
        cy.get("#tf_fromAccountId").select("3")
        cy.get("#tf_toAccountId").select("5")
        cy.get("#tf_amount").type("100")
        cy.get("#tf_description").type("Transferring funds")
        cy.get("#btn_submit").click()
    
    })

    it("User reviews transfer details", () => {
        cy.get("#tf_fromAccountId").should("have.value", "Savings")
        cy.get("#tf_toAccountId").should("have.value", "Credit Card")
        cy.get("#tf_amount").should("have.value", "100")
        
    })
})