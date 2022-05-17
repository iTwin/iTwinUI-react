describe('Body', () => {
  const storyPath = 'Typography/Body';
  const tests = ['Basic', 'Muted', 'Skeleton'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
