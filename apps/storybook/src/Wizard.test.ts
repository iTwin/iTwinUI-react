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
    const id = `${storyPath
      .replace('/', '-')
      .toLowerCase()}--${testName.replaceAll(' ', '-').toLowerCase()}`;

    it(testName, () => {
      cy.visit('iframe', { qs: { id } });

      if (testName.includes('Tooltip')) {
        cy.get('.iui-wizard-step').first().trigger('mouseenter'); // trigger tooltip
      }

      cy.compareSnapshot(testName);
    });
  });
});
