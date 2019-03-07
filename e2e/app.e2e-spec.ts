/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for beep-boop-angular', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be beep-boop-angular', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('beep-boop-angular');
    })
  });

  it('network-name should be carbon-market@1.1.1-deploy.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('carbon-market@1.1.1-deploy.1.bna');
    });
  });

  it('navbar-brand should be beep-boop-angular',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('beep-boop-angular');
    });
  });

  
    it('BeepBoopAccount component should be loadable',() => {
      page.navigateTo('/BeepBoopAccount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('BeepBoopAccount');
      });
    });

    it('BeepBoopAccount table should have 4 columns',() => {
      page.navigateTo('/BeepBoopAccount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('CreditListing component should be loadable',() => {
      page.navigateTo('/CreditListing');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreditListing');
      });
    });

    it('CreditListing table should have 6 columns',() => {
      page.navigateTo('/CreditListing');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Traveller component should be loadable',() => {
      page.navigateTo('/Traveller');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Traveller');
      });
    });

    it('Traveller table should have 2 columns',() => {
      page.navigateTo('/Traveller');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Buy component should be loadable',() => {
      page.navigateTo('/Buy');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Buy');
      });
    });
  

});