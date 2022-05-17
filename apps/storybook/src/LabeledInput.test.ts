describe('LabeledInput', () => {
  const storyPath = 'Input/LabeledInput';
  const tests = [
    'Basic',
    'Disabled',
    'Inline',
    'Hybrid Layout',
    'Hybrid Layout With Button',
    'Negative',
    'Positive',
    'Warning',
    'With Custom Icon',
    'With Message',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
