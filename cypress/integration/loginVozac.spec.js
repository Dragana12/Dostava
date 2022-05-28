/// <reference types = "cypress" />


import { generalPage } from '../page_object/general.js';
import { loginPage } from '../page_object/login.js'
import { sendOrder } from '../page_object/slanjePorudzbine.js'
import { vozacPage } from '../page_object/vozac.js';




describe('login test', () => {

    it('visit login page', () => {
        cy.clearCookies();
        cy.visit("/main_login.php");
        loginPage.isVisible();
    });

    it('login with valid credentials', () => {
        loginPage.loginVozac();




    });
});
