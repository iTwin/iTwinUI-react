describe('Radio', () => {
  const storyPath = 'Input/Radio';
  const tests = ['Basic', 'Disabled', 'Negative', 'Positive', 'Warning'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
