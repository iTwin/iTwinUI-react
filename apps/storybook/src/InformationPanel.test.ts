describe('InformationPanel', () => {
  const storyPath = 'Core/InformationPanel';
  const tests = ['Basic', 'Custom Actions', 'Custom Width', 'Horizontal'];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('iframe', { qs: { id } });
      cy.get('.iui-button').first().click();
      cy.compareSnapshot(testName);
    });
  });
});
