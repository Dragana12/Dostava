/// <reference types = "cypress" />

describe ('bid porudzbine', () => {
    
    it('click on the login button', () => {
        cy.visit ("/main_login.php");
        cy.get('#myusername').type('test1');
        cy.get('#mypassword').type('test1');
        cy.get('input[type=submit]').click();
    
    });

    it('biduj porudzbinu', () => {
        cy.get('id="bid_235_time_-1"').should('be visible')
        cy.visit ("/courier.php");
        cy.get('#bid_243_time_15').click();
        
    
    });
    
    
    });
    
