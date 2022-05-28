/// <reference types = "cypress" />

class GeneralPage {

    get title() {
        return cy.get('#title');
    };

    get newUserMenuElement() {
        return cy.get("[href='main_user.php?new_user=1']");

    };

    get vozacMenuElement() {
        return cy.get("[href='courier.php']");

    };
    get lokalMenuElement() {
        return cy.get("[href='store.php']");

    };
    
    isUserLoggedIn(inUsername) {
        this.title.should('exist');
        this.title.should('have.text', inUsername);

    };

    isMenadzerLoggedIn() {
        this.newUserMenuElement.should('exist');

    };

    isVozacLoggedIn() {
        this.vozacMenuElement.should('exist');
    };

    isLokalLoggedIn() {
        this.lokalMenuElement.should('exist');
        

    };


};



export const generalPage = new GeneralPage();
