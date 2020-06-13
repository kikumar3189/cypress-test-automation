describe("Search for an item using search box", () => {
    
    before(function() {
        cy.visit("http://zero.webappsecurity.com/index.html", {timeout: 100000})
        //Validate page title
        cy.title().should("include", "Zero - Personal Banking")
    })

    it("Type into search box and submit by pressing enter", () => {
        //Searching element using ID
        cy.get("#searchTerm").type("search text {enter}")
    })

    it("Validate that search results page is displayed", () => {
        // Look for an h2 element that contains text Search Results:
        cy.get("h2").contains("Search Results:")
    })
})