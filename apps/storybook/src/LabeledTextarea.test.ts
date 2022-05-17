describe('LabeledTextarea', () => {
  const storyPath = 'Input/LabeledTextarea';
  const tests = [
    'Basic',
    'Disabled',
    'Inline',
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
