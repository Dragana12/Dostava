/// <reference types = "cypress" />

class VozacPage {

    get allContent() {
        return cy.get('#allcontent');
    }

    isVisible() {
        this.allContent.should('exist');

    }
};

export const vozacPage = new VozacPage();
