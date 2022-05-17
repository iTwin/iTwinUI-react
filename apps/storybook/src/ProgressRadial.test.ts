describe('ProgressRadial', () => {
  const storyPath = 'ProgressIndicators/ProgressRadial';
  const tests = [
    'Determinate',
    'Determinate With Content',
    'Indeterminate',
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
