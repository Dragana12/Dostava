/// <reference types = "cypress" />

class ManagerVozaciPage {

    get vozaciHeading(){
        return cy.get('h1');
    }

    isVisible() {
        this.vozaciHeading.should('contain', 'VOZAČI');
       
    }
};

export const managerVozaciPage = new ManagerVozaciPage();
