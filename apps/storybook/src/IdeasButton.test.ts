describe('IdeasButton', () => {
  const storyPath = 'Buttons/IdeasButton';
  const tests = ['Ideas', 'Localized Ideas'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
