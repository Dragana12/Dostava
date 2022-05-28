import { loginPage } from "../page_object/login";
import { vozacPage } from "../page_object/vozac";

describe ('bid porudzbine', () => {
    
    it('visit login page', () => {
        cy.clearCookies();
        cy.visit("/main_login.php");
        loginPage.isVisible();
    });

    it('login with valid credentials', () => {
        loginPage.isVisible();
        loginPage.loginVozac1();
        vozacPage.isVisible();

    });

    it ('otkaži porudžbinu', ()=> {

        cy.get('#bid_589_time_15').click();
    });
});
