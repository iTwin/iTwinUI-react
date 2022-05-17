describe('Fieldset', () => {
  const storyPath = 'Input/Fieldset';
  const tests = ['Basic', 'Disabled'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(testName);
    });
  });
});
