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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });

      if (testName.includes('Tooltip')) {
        cy.get('.iui-wizard-step').first().trigger('mouseenter'); // trigger tooltip
      }

      cy.compareSnapshot(testName);
    });
  });
});
