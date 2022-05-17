describe('Alert', () => {
  const storyPath = 'Core/Alert';
  const tests = [
    'Positive',
    'Negative',
    'Warning',
    'Informational',
    'Empty',
    'Sticky',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      cy.storyId(storyPath, testName).as('id');
      cy.visit('iframe', { qs: { id: this.id } });
      cy.compareSnapshot(testName);
    });
  });
});
