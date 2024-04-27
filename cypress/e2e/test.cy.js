context("Premier test", () => {

    before(() => {
        cy.visit('')
        
        cy.wait(2000);
    });

        describe("", () => {

            it("", () => {

            cy.get('.navbar').should('exist');
            cy.get('.header #home').should('exist');
            cy.get('#about').should('exist');
            cy.get('#caces').should('exist');
            cy.get('#galery').should('exist');
            cy.get('#parteners').should('exist');
            cy.get('#contact').should('exist');

            });
        });
});