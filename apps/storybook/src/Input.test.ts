describe('Input', () => {
  const storyPath = 'Input/Input';
  const tests = ['Basic', 'Disabled', 'Small'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
