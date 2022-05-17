describe('Headline', () => {
  const storyPath = 'Typography/Headline';
  const tests = ['Base', 'Muted'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
