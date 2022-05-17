describe('Blockquote', () => {
  const storyPath = 'Typography/Blockquote';
  const tests = ['Basic', 'With Footer'];

  tests.forEach((testName) => {
    it(testName, () => {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
