/// <reference types = "cypress" />


import { generalPage } from '../page_object/general.js';
import { loginPage } from '../page_object/login.js'
import { sendOrder } from '../page_object/slanjePorudzbine.js'
import { vozacPage } from '../page_object/vozac.js';




describe('login test', () => {


    it('login with valid credentials', () => {
        loginPage.loginVozac();


    });
});
