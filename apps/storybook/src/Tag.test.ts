describe('Tag', () => {
  const storyPath = 'Core/Tag';
  const tests = ['Default', 'No Close'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
