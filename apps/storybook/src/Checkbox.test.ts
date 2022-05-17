describe('Checkbox', () => {
  const storyPath = 'Input/Checkbox';
  const tests = [
    'Basic',
    'Disabled',
    'Indeterminate',
    'Loading',
    'Negative',
    'Positive',
    'Warning',
    'Visibility',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
