describe('LabeledSelect', () => {
  const storyPath = 'Input/LabeledSelect';
  const tests = [
    'Basic',
    'Negative',
    'Positive',
    'Warning',
    'With Custom Icon',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
