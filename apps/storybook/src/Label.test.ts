describe('Label', () => {
  const storyPath = 'Typography/Label';
  const tests = ['Basic', 'Inline', 'Polymorphic'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
