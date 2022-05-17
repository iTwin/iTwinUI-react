describe('Badge', () => {
  const storyPath = 'Core/Badge';
  const tests = ['Basic', 'Long Label', 'Statuses'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
