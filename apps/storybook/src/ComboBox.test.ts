/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
describe('ComboBox', () => {
  const storyPath = 'Core/ComboBox';
  const tests = [
    'Basic',
    'Controlled',
    'Custom Renderer',
    'With Custom Message Icon',
    'With Label',
    'With Message',
    'With Status',
    'Multiple Select',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('input').focus();
      if (testName === 'Multiple Select') {
        cy.get('.iui-menu-item').then((els) => {
          const items = Array.from(els, (el) => el);
          items[3].click();
        });
      }
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
