describe('Title', () => {
  const storyPath = 'Typography/Title';
  const tests = ['Base', 'Muted'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
