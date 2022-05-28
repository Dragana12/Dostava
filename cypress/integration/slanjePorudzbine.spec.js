/// <reference types = "cypress" />

import { loginPage } from '../page_object/login.js'
import { sendOrder } from '../page_object/slanjePorudzbine.js'


describe('slanje porudzbine', () => {

    // beforeEach(() => {
    //     Cypress.Cookies.debug(true);
    //     Cypress.Cookies.preserveOnce('PHPSESSID', 'LAST_ACTIVITY');
    //     console.log('beforeEach called');

    // });
    it('lokal login', () => {
        cy.clearCookies();
        cy.visit("/main_login.php");
        loginPage.loginLokal();
        sendOrder.isVisible();

    });

    it('posalji porudzbinu', () => {
        sendOrder.isVisible();
        sendOrder.sendOrder('adresa 1', '12345');
        sendOrder.orderOutput.should ('be.visible');

    });


});

