/// <reference types = "cypress" />

class SendOrder {

    get localHeading(){
        return cy.get('#title');
    }

    get address(){
        return cy.get('[name="address"]');
    }

    get phone(){
        return cy.get('[type="tel"]');
    }

    get finishBtn(){
        return cy.get('[name="submit"]');
    }

    get orderOutput (){
        return cy.get ('#output_button');
        
    }


    sendOrder(inAddress, inPhone){
        this.address.type(inAddress);
        this.phone.type(inPhone);
        this.finishBtn.click();
    }

    isVisible() {
        this.finishBtn.should ('be.visible');
        this.localHeading.should ('be.visible');
        this.address.should ('be.visible');
        this.phone.should ('be.visible');
    
    }

    cancelOrder () {
        this.orderOutput.should ('have.value', 'OTKAŽI');
    }
};

export const sendOrder = new SendOrder();
