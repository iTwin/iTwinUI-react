describe('IconButton', () => {
  const storyPath = 'Buttons/IconButton';
  const tests = [
    'Add',
    'Borderless',
    'High Visibility Add',
    'Small Active Add',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
