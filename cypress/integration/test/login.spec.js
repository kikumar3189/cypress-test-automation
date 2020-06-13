describe("Validate Login/Logout workflow", () => {

    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
        cy.get("#signin_button").click()
    })

    it("User logs in with invalid credentials", () => {
        cy.get("#login_form").should("be.visible")
        // Created custom login command as this is used multiple times
        cy.login("invalid_user", "invalid_password")
        
    })

    
    it("Error message should be displayed", () => {
        cy.get(".alert-error").should("be.visible")
        .and("contain", "Login and/or password are wrong.")
    })

    
       
    it("User logs in with valid credentials", () => {
        cy.fixture("user").then(user => {
            const id = user.username
            const password = user.password
            cy.login(id, password)
            
        })

        cy.get("#account_summary_tab").should("be.visible")
    })

    it("User logs out from the app", () => {
        cy.contains("username").click()
        cy.get("#logout_link").click()
        cy.get("#signin_button").should("be.visible")
    })
})