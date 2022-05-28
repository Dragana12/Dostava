/// <reference types = "cypress" />

class ManagerLokaliPage {

    get lokaliHeading(){
        return cy.get('h1');
    }

    isVisible() {
        this.lokaliHeading.should('contain', 'LOKALI');
       
    }
};

export const managerLokaliPage = new ManagerLokaliPage();
