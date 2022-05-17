describe('Wizard', () => {
  const storyPath = 'Core/Wizard';
  const tests = [
    'Basic',
    'Long',
    'Localized Long',
    'With Tooltips',
    'Workflow Diagram',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });

      if (testName.includes('Tooltip')) {
        cy.get('.iui-wizard-step').first().trigger('mouseenter'); // trigger tooltip
      }

      cy.compareSnapshot(testName);
    });
  });
});
