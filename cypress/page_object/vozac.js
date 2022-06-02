/// <reference types = "cypress" />

class VozacPage {

    get allContent() {
        return cy.get('#allcontent');
    }

    get otkaziDugme() {
        return cy.get('button:contains("OTKAŽI")');

    }

    get zavrsiDugme() {
        return cy.get('button:contains("ZAVRŠENO")');
    }
    bidDugme(vreme) {
        return cy.get('[id*="_time_' + vreme + '"]')
    }

    bid(vreme) {
        var dugme = this.bidDugme(vreme);
        dugme.should('exist');
        dugme.click();
        this.isOtkaziDugmeVisible();
        this.isZavrsenoDugmeVisible();
    }

    isOtkaziDugmeVisible() {
        this.otkaziDugme.should('exist');
    }

    isZavrsenoDugmeVisible() {
        this.zavrsiDugme.should('exist');

    }

    isVisible() {
        this.allContent.should('exist');

    }

};

export const vozacPage = new VozacPage();
