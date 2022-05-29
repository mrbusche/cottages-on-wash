const url = 'http://localhost:8080/website/';

describe('Verifies Cozy Cottage', () => {
    it('link works', () => {
        cy.visit(url);
        cy.get('#cottageLink').click();
        cy.contains('Cozy Cottage by Cottages on Wash');
    })
})

describe('Verifies Haven Hideaway', () => {
    it('link works', () => {
        cy.visit(url);
        cy.get('#havenLink').click();
        cy.contains('Haven Hideaway by Cottages on Wash');
    })
})

describe('Verifies Both Cottages', () => {
    it('link works', () => {
        cy.visit(url);
        cy.get('#bothLink').click();
        cy.contains('South Haven Office');
    })
})
