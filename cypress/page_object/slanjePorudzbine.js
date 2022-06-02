/// <reference types = "cypress" />

class SendOrder {

    get localHeading() {
        return cy.get('#title');
    }

    get address() {
        return cy.get('[name="address"]');
    }

    get phone() {
        return cy.get('[type="tel"]');
    }

    get finishBtn() {
        return cy.get('[name="submit"]');
    }

    get orderOutput() {
        return cy.get('#output_button');

    }


    sendOrder(inAddress, inPhone) {
        this.isVisible();
        this.address.type(inAddress);
        this.phone.type(inPhone);
        this.finishBtn.click();
        this.orderOutput.should('be.visible');
    }

    isVisible() {
        this.finishBtn.should('be.visible');
        this.localHeading.should('be.visible');
        this.address.should('be.visible');
        this.phone.should('be.visible');

    }

    cancelOrder() {
        this.orderOutput.should('be.visible');
        this.orderOutput.should('have.value', 'OTKAŽI');
        this.orderOutput.click();
    }
};

export const sendOrder = new SendOrder();
