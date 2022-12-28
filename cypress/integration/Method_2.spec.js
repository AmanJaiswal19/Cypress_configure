// npx cypress run --headed --brower chrome --config-file staging-config.json
// npx cypress run --config-file production-config.json
// npx cypress run --config-file local-config.json

describe('Method_2 Separate Cypress Configuration Files for Each Environment', () => {

    it.only('using baseUrl', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url)
    })
})