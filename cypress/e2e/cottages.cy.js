const url = 'https://cottagesonwash.com';
const retryOptions = { retries: 2 }; // 1 initial run + 2 retries = up to 3 attempts

describe('Verifies Cozy Cottage', () => {
    it('link works', retryOptions, () => {
        cy.visit(url);
        cy.get('#cottageLink').click();
        cy.contains('Cozy Cottage by Cottages on Wash');
    })
})

describe('Verifies Haven Hideaway', () => {
    it('link works', retryOptions, () => {
        cy.visit(url);
        cy.get('#havenLink').click();
        cy.contains('Haven Hideaway by Cottages on Wash');
    })
})

describe('Verifies Both Cottages', () => {
    it('link works', retryOptions, () => {
        cy.visit(url);
        cy.get('#bothLink').click();
        cy.contains('South Haven Office');
    })
})
