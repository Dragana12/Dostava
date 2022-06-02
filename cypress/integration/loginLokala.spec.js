/// <reference types = "cypress" />


import { generalPage } from '../page_object/general.js';
import { loginPage } from '../page_object/login.js'
import { sendOrder } from '../page_object/slanjePorudzbine.js'




describe('login test', () => {

    it('login with valid credentials', () => {
        loginPage.loginLokal();


    });

    // it('click on the login button', () => {
    //     cy.visit ("/main_login.php");
    //    cy.get('#myusername').type('test');
    //    cy.get('#mypassword').type('test');
    //    cy.get('input[type=submit]').click();

});

