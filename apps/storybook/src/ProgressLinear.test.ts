describe('ProgressLinear', () => {
  const storyPath = 'ProgressIndicators/ProgressLinear';
  const tests = [
    'Determinate',
    'Indeterminate',
    'Labeled Center',
    'Labeled Left Right',
    'Negative',
    'Positive',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
