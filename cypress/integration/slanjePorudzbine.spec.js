/// <reference types = "cypress" />

import { loginPage } from '../page_object/login.js'
import { sendOrder } from '../page_object/slanjePorudzbine.js'


describe('slanje porudzbine', () => {

    // beforeEach(() => {
    //     Cypress.Cookies.debug(true);
    //     Cypress.Cookies.preserveOnce('PHPSESSID', 'LAST_ACTIVITY');
    //     console.log('beforeEach called');

    // });

    it('posalji porudzbinu', () => {
        loginPage.loginLokal();
        sendOrder.sendOrder('adresa 1', '12345');
        sendOrder.orderOutput.should('be.visible');
        sendOrder.cancelOrder();
    });


});

