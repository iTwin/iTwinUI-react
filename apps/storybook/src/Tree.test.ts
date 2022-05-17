describe('Tree', () => {
  const storyPath = 'Core/Tree';
  const tests = ['Basic', 'Full', 'Customized Expander', 'Async Loading'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
