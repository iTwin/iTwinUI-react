describe('DropdownButton', () => {
  const storyPath = 'Buttons/DropdownButton';
  const tests = ['Basic'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.compareSnapshot(`${testName} (Closed)`);
      cy.get('.iui-button').click();
      cy.compareSnapshot(`${testName} (Open)`);
    });
  });
});
