// npx cypress run --headed --browser chrome --config baseUrl="https://www.google.com"
// npx cypress run --config baseUrl="https://www.facebook.com"
// npx cypress run --config baseUrl="https://www.yahoo.com"

describe('Method_1 using baseUrl in cypress.json', () => {

    it('using baseUrl', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url)
    })
})