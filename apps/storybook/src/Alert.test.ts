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
    it(testName, () => {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
