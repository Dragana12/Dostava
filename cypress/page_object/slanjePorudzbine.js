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
    get outputForm() {
        return cy.get('#output_form');

    }


    sendOrder(inAddress, inPhone) {
        cy.log('Send order');
        this.isVisible();
        this.address.type(inAddress);
        this.phone.type(inPhone);
        this.finishBtn.click();
        var orderId;
        this.outputForm.then((oForm) => {
            // get outputForm action
            var action = oForm.attr("action");
            // na kom mestu u stringu action se nalazi =
            var n = action.lastIndexOf('=');
            orderId = action.substring(n + 1);
            cy.log(action);
            cy.log(orderId);
        })

        this.orderOutput.should('be.visible');
        return orderId;
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
