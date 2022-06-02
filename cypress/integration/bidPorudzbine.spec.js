/// <reference types = "cypress" />

import { generalPage } from "../page_object/general";
import { loginPage } from "../page_object/login";
import { sendOrder } from "../page_object/slanjePorudzbine";
import { vozacPage } from "../page_object/vozac";

describe('bid porudzbine', () => {

    it('otkazi porudzbinu', () => {
        //login lokal
        loginPage.loginLokal();
        //napraviti porudzbinu
        sendOrder.sendOrder('adresa 1', '12345');
        //login vozac
        loginPage.loginVozac();
        //bid porudzbine
        vozacPage.bid(10);
        //otkazi porudzbinu
        vozacPage.otkaziDugme.click();

    });

    it('zavrsi porudzbinu', () => {
        //login lokal
        loginPage.loginLokal();
        //napraviti porudzbinu
        sendOrder.sendOrder('adresa 1', '12345');
        //login vozac
        loginPage.loginVozac();
        //bid porudzbine
        vozacPage.bid(10);
        //zavrsi porudzbinu
        vozacPage.zavrsiDugme.click();
       // <form id="output_form" action="store_cancel.php?id=665" method="post" style="display: block;">
      // <input id="output_button" type="submit" value="OTKAŽI" style="width:100%; height:100px; font-size: x-large;">
    // </input>/<script>isVisible('input', false);isVisible('bottom', false);isVisible('output', true);isVisible('output_form', true);startTimeout(1654200814,665);</script>
//</form>

    });

    //treba pratiti broj porudzbine kroz cio test
    //kako praviti komentare u cypressu u test runner-u


});



