/// <reference types = "cypress" />


import { generalPage } from '../page_object/general.js';
import { loginPage } from '../page_object/login.js'
import { managerLokaliPage } from '../page_object/managerLokali.js';
import { managerVozaciPage } from '../page_object/managerVozaci.js';
import { sendOrder } from '../page_object/slanjePorudzbine.js'



describe('login menadzer', () => {

    it('login with valid credentials', () => {
        loginPage.loginManager();


    });
});
