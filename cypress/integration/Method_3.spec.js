// create utils.js file in support folder

import { Utility } from "../support/Utility";

let url = new Utility().getBaseUrl()

describe('Method_3 Custom Utility Class', () => {

    it('using baseUrl', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url)
    })
})