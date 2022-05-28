/// <reference types = "cypress" />

import { generalPage } from "./general";

class LoginPage {

    get loginHeading() {
        return cy.get('h1');
    }

    get username() {
        return cy.get('#myusername');
    }

    get password() {
        return cy.get('#mypassword');
    }

    get submitBtn() {
        return cy.get('[type="submit"]');
    }


    login(inUsername, inPassword) {
        this.isVisible();
        this.username.type(inUsername);
        this.password.type(inPassword);
        this.submitBtn.click();
        generalPage.isUserLoggedIn(inUsername);
    }

    loginLokal() {
        this.login(Cypress.env('lokalUsername'), Cypress.env('lokalPassword'));
        generalPage.isLokalLoggedIn();
    };

    loginVozac() {
        this.login(Cypress.env('vozacUsername'), Cypress.env('vozacPassword'));
        generalPage.isVozacLoggedIn();
    };

    loginManager() {
        this.login(Cypress.env('managerUsername'), Cypress.env('managerPassword'));
        generalPage.isMenadzerLoggedIn();
    };


    isVisible() {
        this.submitBtn.should('be.visible');
        this.loginHeading.should('be.visible');
        this.username.should('be.visible');
        this.password.should('be.visible');
    };
};

export const loginPage = new LoginPage();
