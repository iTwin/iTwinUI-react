describe('InputGroup', () => {
  const storyPath = 'Input/InputGroup';
  const tests = ['Checkbox Group', 'Radio Group', 'Toggle Group'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
