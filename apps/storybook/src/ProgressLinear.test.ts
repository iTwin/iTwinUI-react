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
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
