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
        cy.clearCookies();
        cy.visit("/main_login.php");
        this.isVisible();
        this.username.type(inUsername);
        this.password.type(inPassword);
        this.submitBtn.click();
        generalPage.isUserLoggedIn(inUsername);
    }

    loginLokal() {
        cy.log('Login lokal: ' + Cypress.env('lokalUsername'));
        this.login(Cypress.env('lokalUsername'), Cypress.env('lokalPassword'));
        generalPage.isLokalLoggedIn();
    };

    loginVozac() {
        cy.log('Login vozac: ' + Cypress.env('vozacUsername'));
        this.login(Cypress.env('vozacUsername'), Cypress.env('vozacPassword'));
        generalPage.isVozacLoggedIn();
    };

    loginManager() {
        cy.log('Login menadzer: ' + Cypress.env('managerUsername'));
        this.login(Cypress.env('managerUsername'), Cypress.env('managerPassword'));
        generalPage.isMenadzerLoggedIn();
    };

    logout() {
        cy.visit("/main_logout.php");
        this.isVisible();
    };


    isVisible() {
        this.submitBtn.should('be.visible');
        this.loginHeading.should('be.visible');
        this.username.should('be.visible');
        this.password.should('be.visible');
    };
};

export const loginPage = new LoginPage();
